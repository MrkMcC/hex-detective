import { useEffect, useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import {
  FaCircleArrowRight,
  FaEye,
  FaEyeSlash,
  FaRepeat,
} from "react-icons/fa6";
import Crowd from "../classes/Crowd";
import CustomFlavour from "../classes/CustomFlavour";
import GameSettings from "../classes/GameSettings";
import ColourFlavour from "../enum/ColourFlavour";
import SuspectSelectionMode from "../enum/SuspectSelectionMode";
import TutorialStage from "../enum/TutorialStage";
import ColourService from "../services/ColourService";
import TutorialService from "../services/TutorialService";
import TutorialState from "../types/TutorialState";
import SuspectInfoOptionsT from "../types/components/SuspectInfoOptionsT";
import GameStatus from "./../enum/GameStatus";
import PersonService from "./../services/PersonService";
import GameDataT from "./../types/GameDataT";
import Person from "./Person";
import ControlPanel from "./control-panel/ControlPanel";
import HighScore from "./control-panel/HighScore";

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

  //#region Shorthand variables
  const isRoundInProgress = status === GameStatus.InProgress;
  //#endregion

  const initialiseRoundState = (resetProgress = false) => {
    if (resetProgress) setGameData({ ...initialGameData });
    setAccusedPersonId(null);
    onChangeStatus(GameStatus.InProgress);
    setCrowd(undefined);

    if (tutorialState !== null) {
      if (resetProgress)
        setTutorialState((prev) => ({
          stage: prev!.stage,
          round: 1,
        }));
      else if (gameData.roundsWon >= 3) {
        setTutorialState((prev) => ({
          stage: prev!.stage + 1,
          round: 1,
        }));
        setGameData((prev) => ({ ...prev, roundsWon: 0 }));
      } else
        setTutorialState((prev) => ({
          ...prev!,
          round: gameData.roundsWon + 1,
        }));
    }
  };

  const score = () => {
    onChangeStatus(GameStatus.Scored);
    let roundsWon = gameData.roundsWon + 1;
    setGameData((prev) => ({ ...prev, roundsWon: roundsWon }));
  };

  const accuse = (personId: string) => {
    if (isRoundInProgress) {
      setAccusedPersonId(personId);
      if (personId === crowd!.suspectId) {
        score();
      } else onChangeStatus(GameStatus.Failed);
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
      status === GameStatus.InProgress ||
      status === GameStatus.Scored ||
      confirm(
        "You are about to quit the game. Your current progress will be lost."
      )
    )
      onChangeStatus(GameStatus.Setup);
  };

  const handleContinue = () => {
    initialiseRoundState();
  };

  const handleReset = () => {
    initialiseRoundState(true);
  };

  const handleHideRuledOut = () => {
    setCrowd((prev) => ({
      ...prev!,
      people: prev!.people.map((p) => ({ ...p, hidden: p.ruledOut })),
    }));
  };

  const handleUnhideRuledOut = () => {
    setCrowd((prev) => ({
      ...prev!,
      people: prev!.people.map((p) => ({ ...p, hidden: false })),
    }));
  };

  const handleResetRuledOut = () => {
    if (confirm("Rule everyone back in?"))
      setCrowd((prev) => ({
        ...prev!,
        people: prev!.people.map((p) => ({
          ...p,
          ruledOut: false,
          hidden: false,
        })),
      }));
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

    const newCrowd = TutorialService.GenerateCrowd(tutorialState);

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
          flavour: new CustomFlavour((int: number) =>
            convertToInt16(int).toString()
          ),
        }));
        break;
      case TutorialStage.Hex_Letters:
        const convertToBase16 = (int: number) =>
          ((int / 255) * 15).toString(16).toUpperCase();
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: new CustomFlavour((int: number) =>
            convertToBase16(int).toUpperCase()
          ),
        }));
        break;
      case TutorialStage.Hex_DoubleDigits:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: new CustomFlavour((int: number) =>
            ColourService.IntToHex(int).toUpperCase()
          ),
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
    if (!isRoundInProgress) onChangeStatus(GameStatus.InProgress);
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
        (status === GameStatus.Failed || status === GameStatus.Scored) &&
        p.id === crowd.getSuspect()!.id
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
      <div className="bottom-bar flex-row justify-between">
        <div className="bottom-left flex-row justify-between align-start">
          <button className="btn-main-menu" onClick={handleQuit}>
            <FaCaretLeft className="icon" />
            Back to Menu
          </button>
          <HighScore gameData={gameData} />
        </div>
        <ControlPanel
          gameStatus={status}
          suspectInfoOptions={suspectInfoOptions}
          currentSelectionMode={currentSelectionMode}
          onSelectSelectionMode={handleSelectSelectionMode}
          suspect={crowd?.getSuspect()}
          accused={crowd?.getPersonById(accusedPersonId)}
        />
        <div className="bottom-right flex-row justify-start">
          <div className="flex-col justify-center align-stretch">
            <div className="btn-group-ruled-out flex-row gap-mini">
              <button
                onClick={handleHideRuledOut}
                disabled={
                  !isRoundInProgress ||
                  crowd?.people.every((p) => !p.ruledOut || p.hidden)
                }
              >
                <FaEyeSlash className="icon" />
                <span>
                  Hide
                  <br />
                  ruled out
                </span>
              </button>
              <button
                onClick={handleUnhideRuledOut}
                disabled={
                  !isRoundInProgress || crowd?.people.every((p) => !p.hidden)
                }
              >
                <FaEye className="icon" />
                <span>
                  Unhide
                  <br />
                  ruled out
                </span>
              </button>
              <button
                onClick={handleResetRuledOut}
                disabled={
                  !isRoundInProgress || crowd?.people.every((p) => !p.ruledOut)
                }
              >
                <FaRepeat className="icon" />
                <span>
                  Reset
                  <br />
                  ruled out
                </span>
              </button>
            </div>
          </div>
          <div className="flex-col justify-center">
            {status === GameStatus.Scored && (
              <button className="large" onClick={handleContinue}>
                Continue <FaCircleArrowRight className="icon" />
              </button>
            )}
            {status === GameStatus.Failed && (
              <button className="large" onClick={handleReset}>
                {tutorialState === null ? (
                  <>
                    Play again <FaRepeat className="icon" />
                  </>
                ) : (
                  <>
                    Continue <FaCircleArrowRight className="icon" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
