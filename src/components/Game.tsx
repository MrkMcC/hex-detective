import { useEffect, useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import Colour from "../classes/Colour";
import Crowd from "../classes/Crowd";
import GameSettings from "../classes/GameSettings";
import ColourFlavour from "../enum/ColourFlavour";
import SuspectSelectionMode from "../enum/SuspectSelectionMode";
import TutorialStage from "../enum/TutorialStage";
import TutorialService from "../services/TutorialService";
import TutorialState from "../types/TutorialState";
import SuspectInfoOptionsT from "../types/components/SuspectInfoOptionsT";
import GameStatus from "./../enum/GameStatus";
import PersonService from "./../services/PersonService";
import GameDataT from "./../types/GameDataT";
import Person from "./Person";
import ControlPanel from "./control-panel/ControlPanel";

interface Props {
  status: GameStatus;
  onChangeStatus: (status: GameStatus) => void;
  settings: GameSettings;
}

const initialGameData: GameDataT = {
  roundsWon: 0,
};

function Game({ status, onChangeStatus, settings }: Props) {
  const [gameData, setGameData] = useState<GameDataT>({ ...initialGameData });

  const [crowd, setCrowd] = useState<Crowd>();
  const [currentSelectionMode, setCurrentSelectionMode] = useState(
    SuspectSelectionMode.Accuse
  );
  const [accusedPersonId, setAccusedPersonId] = useState<string | null>(null);
  const [tutorialState, setTutorialState] = useState<TutorialState | null>(
    null
  );
  const [suspectInfoOptions, setSuspectInfoOptions] =
    useState<SuspectInfoOptionsT>({});

  const initialiseRoundState = () => {
    setAccusedPersonId(null);
    onChangeStatus(GameStatus.InProgress);
    setCrowd(undefined);
  };

  const score = () => {
    let roundsWon = gameData.roundsWon + 1;

    if (tutorialState !== null) {
      if (roundsWon >= 3) {
        setTutorialState((prev) => ({
          stage: prev!.stage + 1,
          round: 1,
        }));
        roundsWon = 0;
      } else
        setTutorialState((prev) => ({
          ...prev!,
          round: prev!.round + 1,
        }));
    }

    setGameData((prev) => ({ ...prev, roundsWon: roundsWon }));
    initialiseRoundState();
  };

  const accuse = (personId: string) => {
    setAccusedPersonId(personId);
    if (status === GameStatus.InProgress) {
      if (personId === crowd!.suspectId) {
        score();
      } else onChangeStatus(GameStatus.GameOver);
    }
  };

  //#region Event Handling
  const handleSelect = (personId: string) => {
    switch (currentSelectionMode) {
      case SuspectSelectionMode.RuleOut:
        setCrowd((prev) => ({
          ...prev!,
          people: prev!.people.map((p) =>
            p.id === personId ? { ...p, ruledOut: !p.ruledOut } : p
          ),
        }));
        break;
      case SuspectSelectionMode.Accuse:
        accuse(personId);
        break;
    }
  };

  const handleSelectSelectionMode = (mode: SuspectSelectionMode) => {
    setCurrentSelectionMode(mode);
  };

  const handleQuit = () => {
    if (
      status !== GameStatus.InProgress ||
      confirm(
        "You are about to quit the game. Your current progress will be lost."
      )
    )
      onChangeStatus(GameStatus.Setup);
  };

  const handleReset = () => {
    if (tutorialState) setTutorialState((prev) => ({ ...prev!, round: 1 }));
    setGameData({ ...initialGameData });
    initialiseRoundState();
  };
  //#endregion

  //#region tutorial
  const setupTutorialRound = () => {
    if (tutorialState === null) {
      setTutorialState({
        stage: TutorialStage.Basics_Scoring,
        round: 1,
      });
      return;
    }

    const newCrowd = TutorialService.GeneratePeople(tutorialState);

    switch (tutorialState.stage) {
      case TutorialStage.Basics_Scoring:
      case TutorialStage.Basics_SelectionMode:
      case TutorialStage.Colours_Brightness:
      case TutorialStage.Colours_Complementary:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Name,
        }));
        break;
      case TutorialStage.Colours_PercNotation:
      case TutorialStage.Colours_Saturation:
      case TutorialStage.Colours_Imbalance:
      case TutorialStage.Colours_Exam:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Percentage,
        }));
        break;
      case TutorialStage.Hex_ChangingScale:
        const convertToInt16 = (int: number) => (int / 255) * 15;
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: (colour: Colour) =>
            `(${convertToInt16(colour.int.red)}, ${convertToInt16(
              colour.int.green
            )}, ${convertToInt16(colour.int.blue)})`,
        }));
        break;
      case TutorialStage.Hex_Letters:
        const convertToBase16 = (int: number) =>
          ((int / 255) * 15).toString(16).toUpperCase();
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: (colour: Colour) =>
            `(${convertToBase16(colour.int.red)}, ${convertToBase16(
              colour.int.green
            )}, ${convertToBase16(colour.int.blue)})`,
        }));
        break;
      case TutorialStage.Hex_DoubleDigits:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: (colour: Colour) =>
            `(${colour.hex.red}, ${colour.hex.green}, ${colour.hex.blue})`.toUpperCase(),
        }));
        break;
      case TutorialStage.Hex_Exam:
      case TutorialStage.Done:
      default:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Hex,
        }));
        break;
      // default:
      // throw `NOT IMPLEMENTED: setup tutorial stage ${tutorialState.stage}.${tutorialState.round}`;
    }
    setCrowd(newCrowd);
  };
  useEffect(() => {
    if (tutorialState !== null && tutorialState.round === 1)
      TutorialService.ShowModal(tutorialState.stage);
  }, [tutorialState]);
  //#endregion

  //#region Game State
  const startNewRound = () => {
    if (settings.parameters.tutorial) setupTutorialRound();
    else {
      const newCrowd = PersonService.RandomCrowd(
        settings.parameters.crowdSizeInitial +
          settings.parameters.crowdSizeIncrement * gameData.roundsWon
      );
      setCrowd(newCrowd);
    }

    setAccusedPersonId(null);
    if (status !== GameStatus.InProgress) onChangeStatus(GameStatus.InProgress);
  };

  const tryStartNextRound = () => {
    if (crowd === undefined) {
      startNewRound();
    }
  };
  tryStartNextRound();
  //#endregion

  //#region Component Construction
  const personElements = crowd?.people.map((p) => (
    <Person
      key={p.id}
      person={p}
      disabled={
        accusedPersonId !== null ||
        (p.ruledOut && currentSelectionMode !== SuspectSelectionMode.RuleOut)
      }
      isAccused={accusedPersonId === p.id}
      isRevealedSuspect={
        status === GameStatus.GameOver && p.id === crowd.getSuspect()!.id
      }
      onSelect={handleSelect}
    />
  ));
  //#endregion

  return (
    <div className="game-session">
      <div className="people-container">
        <div className="people">{personElements}</div>
      </div>
      <div className="bottom-bar">
        <div className="flex-col">
          <button className="btn-main-menu" onClick={handleQuit}>
            <FaCaretLeft className="icon" />
            Back to Menu
          </button>
        </div>
        <ControlPanel
          gameData={gameData}
          gameStatus={status}
          suspectInfoOptions={suspectInfoOptions}
          currentSelectionMode={currentSelectionMode}
          onSelectSelectionMode={handleSelectSelectionMode}
          suspect={crowd?.getSuspect()}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default Game;
