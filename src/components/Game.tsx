import { useEffect, useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import PersonData from "../classes/PersonData";
import ColourFlavour from "../enum/ColourFlavour";
import SuspectSelectionMode from "../enum/SuspectSelectionMode";
import TutorialService from "../services/TutorialService";
import GameSettingsT from "../types/GameSettingsT";
import TutorialState from "../types/TutorialState";
import SuspectInfoOptionsT from "../types/components/SuspectInfoOptionsT";
import GameStatus from "./../enum/GameStatus";
import ArrayHelper from "./../helper/ArrayHelper";
import PersonService from "./../services/PersonService";
import GameDataT from "./../types/GameDataT";
import Person from "./Person";
import ControlPanel from "./control-panel/ControlPanel";

interface Props {
  status: GameStatus;
  onChangeStatus: (status: GameStatus) => void;
  settings: GameSettingsT;
}

const initialGameData: GameDataT = {
  roundsWon: 0,
};

function Game({ status, onChangeStatus, settings }: Props) {
  const [gameData, setGameData] = useState<GameDataT>({ ...initialGameData });
  const [people, setPeople] = useState<PersonData[]>([]);
  const [suspectId, setSuspectId] = useState<string>();
  const [currentSelectionMode, setCurrentSelectionMode] = useState(
    SuspectSelectionMode.Accuse
  );
  const [accusedPersonId, setAccusedPersonId] = useState<string | null>(null);
  const [tutorialState, setTutorialState] = useState<TutorialState | null>(
    null
  );
  const [suspectInfoOptions, setSuspectInfoOptions] =
    useState<SuspectInfoOptionsT>({});

  const getSuspect = () => PersonService.FindPersonById(people, suspectId);

  const initialiseRoundState = () => {
    setAccusedPersonId(null);
    onChangeStatus(GameStatus.InProgress);
    setPeople([]);
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
      if (personId === suspectId) {
        score();
      } else onChangeStatus(GameStatus.GameOver);
    }
  };

  //#region Event Handling
  const handleSelect = (personId: string) => {
    switch (currentSelectionMode) {
      case SuspectSelectionMode.RuleOut:
        setPeople((prevPeople) =>
          prevPeople.map((p) =>
            p.id === personId ? { ...p, ruledOut: !p.ruledOut } : p
          )
        );
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
      setTutorialState({ stage: 1, round: 1 });
      return;
    }

    const newPeople = TutorialService.GeneratePeople(tutorialState);
    let newSuspect: PersonData | null = null;

    switch (tutorialState.stage) {
      case 1:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Name,
        }));
        newSuspect = newPeople[gameData.roundsWon];
        break;
      case 2:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Name,
        }));
        break;
      case 3:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Name,
        }));
        break;
      default:
        throw `NOT IMPLEMENTED: setup tutorial stage ${tutorialState.stage}.${tutorialState.round}`;
    }

    if (newSuspect === null) newSuspect = ArrayHelper.RandomElement(newPeople);

    setPeople(newPeople);
    setSuspectId(newSuspect.id);
  };
  useEffect(() => {
    if (tutorialState !== null && tutorialState.round === 1)
      TutorialService.ShowModal(tutorialState.stage);
  }, [tutorialState]);
  //#endregion

  //#region Game State
  const startNewRound = () => {
    if (settings.tutorial) setupTutorialRound();
    else {
      const newPeople = PersonService.RandomPeople(
        settings.crowdSizeInitial +
          settings.crowdSizeIncrement * gameData.roundsWon
      );
      const suspect = ArrayHelper.RandomElement(newPeople);
      setPeople(newPeople);
      setSuspectId(suspect.id);
    }

    setAccusedPersonId(null);
    if (status !== GameStatus.InProgress) onChangeStatus(GameStatus.InProgress);
  };

  const tryStartNextRound = () => {
    if (people.length === 0) {
      startNewRound();
    }
  };
  tryStartNextRound();
  //#endregion

  //#region Component Construction
  const personElements = people.map((p) => (
    <Person
      key={p.id}
      person={p}
      disabled={
        accusedPersonId !== null ||
        (p.ruledOut && currentSelectionMode !== SuspectSelectionMode.RuleOut)
      }
      isAccused={accusedPersonId === p.id}
      isRevealedSuspect={
        status === GameStatus.GameOver && p.id === getSuspect()!.id
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
          suspect={getSuspect()}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default Game;
