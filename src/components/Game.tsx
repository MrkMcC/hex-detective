import { useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import PersonData from "../classes/PersonData";
import ColourFlavour from "../enum/ColourFlavour";
import SuspectSelectionMode from "../enum/SuspectSelectionMode";
import ModalService from "../services/ModalService";
import GameSettingsT from "../types/GameSettingsT";
import TutorialState from "../types/TutorialState";
import SuspectInfoOptionsT from "../types/components/SuspectInfoOptionsT";
import GameStatus from "./../enum/GameStatus";
import ArrayHelper from "./../helper/ArrayHelper";
import PersonService from "./../services/PersonService";
import GameDataT from "./../types/GameDataT";
import Person from "./Person";
import ControlPanel from "./control-panel/ControlPanel";
import TutorialBasicsPage1 from "./modal/tutorial/basics/TutorialBasicsPage1";

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
    //   {
    //   stage: 1,
    //   round: 1,
    // }
    null
  );
  const [suspectInfoOptions, setSuspectInfoOptions] =
    useState<SuspectInfoOptionsT>({});

  const getSuspect = () => PersonService.FindPersonById(people, suspectId);

  const score = () => {
    const roundsWon = gameData.roundsWon + 1;
    setGameData((prev) => ({ ...prev, roundsWon: roundsWon }));

    if (tutorialState !== null)
      setTutorialState((prev) => ({
        stage: roundsWon >= 3 ? prev!.stage + 1 : prev!.stage,
        round: roundsWon + 1,
      }));

    startNewRound(roundsWon);
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
    setAccusedPersonId(null);
    onChangeStatus(GameStatus.InProgress);
    setPeople([]);
  };
  //#endregion

  //#region tutorial
  const setupTutorialRound = (state: TutorialState) => {
    const newPeople = PersonService.GenerateTutorialPeople(state);
    let newSuspect: PersonData | null = null;

    switch (state.stage) {
      case 1:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Name,
        }));
        newSuspect = newPeople[state.round - 1];
        break;
    }

    if (newSuspect === null) newSuspect = ArrayHelper.RandomElement(newPeople);

    setPeople(newPeople);
    setSuspectId(newSuspect.id);
  };
  //#endregion

  //#region Game State
  const startNewRound = (incrementMultiplier: number = 0) => {
    if (tutorialState === null) {
      const newPeople = PersonService.GeneratePeople(
        settings.crowdSizeInitial +
          settings.crowdSizeIncrement * incrementMultiplier
      );
      const suspect = ArrayHelper.RandomElement(newPeople);
      setPeople(newPeople);
      setSuspectId(suspect.id);
    } else setupTutorialRound(tutorialState);

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
          <button
            onClick={() => ModalService.ShowModal(<TutorialBasicsPage1 />)}
          >
            Open modal
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
