import { useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import SuspectSelectionMode from "../enum/SuspectSelectionMode";
import GameSettingsT from "../types/GameSettingsT";
import GameStatus from "./../enum/GameStatus";
import ArrayHelper from "./../helper/ArrayHelper";
import GameService from "./../services/GameService";
import PersonService from "./../services/PersonService";
import GameDataT from "./../types/GameDataT";
import PersonT from "./../types/PersonT";
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
  const [people, setPeople] = useState<PersonT[]>([]);
  const [suspectId, setSuspectId] = useState<string>();
  const [currentSelectionMode, setCurrentSelectionMode] = useState(
    SuspectSelectionMode.Accuse
  );
  const [accusedPersonId, setAccusedPersonId] = useState<string | null>(null);

  const getSuspect = () => PersonService.FindPersonById(people, suspectId);

  const accuse = (personId: string) => {
    setAccusedPersonId(personId);
    if (status === GameStatus.InProgress) {
      if (personId === suspectId) {
        const roundsWon = gameData.roundsWon + 1;
        setGameData((prev) => ({ ...prev, roundsWon: roundsWon }));
        startNewRound(roundsWon);
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
    setGameData({ ...initialGameData });
    startNewRound();
  };
  //#endregion

  //#region Game State
  const startNewRound = (incrementMultiplier: number = 0) => {
    const newPeople = PersonService.GeneratePeople(
      settings.crowdSizeInitial +
        settings.crowdSizeIncrement * incrementMultiplier
    );
    const suspect = ArrayHelper.RandomElement(newPeople);
    setAccusedPersonId(null);
    setPeople(newPeople);
    setSuspectId(suspect.id);
    if (status !== GameStatus.InProgress) onChangeStatus(GameStatus.InProgress);
  };

  const tryStartNextRound = () => {
    if (people.length === 0) {
      startNewRound();
    }
  };
  tryStartNextRound();

  const tryAutoAccuseLastPerson = () => {
    if (!accusedPersonId) {
      const onlySuspect = GameService.GetOnlyRemainingSuspect(people);
      if (onlySuspect) accuse(onlySuspect.id);
    }
  };
  tryAutoAccuseLastPerson();
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
        <button className="btn-main-menu" onClick={handleQuit}>
          <FaCaretLeft className="icon" />
          Back to Menu
        </button>
        <ControlPanel
          gameData={gameData}
          gameStatus={status}
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
