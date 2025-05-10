import { useState } from "react";
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

function Game({ status, onChangeStatus, settings }: Props) {
  const [gameData, setGameData] = useState<GameDataT>({
    roundsWon: 0,
  });
  const [people, setPeople] = useState<PersonT[]>([]);
  const [suspectId, setSuspectId] = useState<string>();
  const [currentSelectionMode, setCurrentSelectionMode] = useState(
    SuspectSelectionMode.Accuse
  );
  const [accusedPersonId, setAccusedPersonId] = useState<string | null>(null);

  const getSuspect = () => PersonService.FindPersonById(people, suspectId);

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
    onChangeStatus(GameStatus.Setup);
  };
  //#endregion

  //#region Game State
  const startNewRound = () => {
    const newPeople = PersonService.GeneratePeople(settings.crowdSizeInitial);
    const suspect = ArrayHelper.RandomElement(newPeople);
    setAccusedPersonId(null);
    setPeople(newPeople);
    setSuspectId(suspect.id);
  };

  const tryInitialiseGame = () => {
    if (people.length === 0) {
      startNewRound();
    }
  };
  tryInitialiseGame();

  const tryAutoAccuseLastPerson = () => {
    if (!accusedPersonId) {
      const onlySuspect = GameService.GetOnlyRemainingSuspect(people);
      if (onlySuspect) setAccusedPersonId(onlySuspect.id);
    }
  };
  tryAutoAccuseLastPerson();

  const accuse = (personId: string) => {
    setAccusedPersonId(personId);
    if (status === GameStatus.InProgress) {
      if (personId === suspectId) {
        setGameData((prev) => ({ ...prev, roundsWon: prev.roundsWon + 1 }));
        startNewRound();
      } else onChangeStatus(GameStatus.GameOver);
    }
  };
  //#endregion

  //#region Component Construction
  const personElements = people.map((p) => (
    <Person
      key={p.id}
      person={p}
      disabled={accusedPersonId !== null}
      isAccused={accusedPersonId === p.id}
      onSelect={handleSelect}
    />
  ));
  //#endregion

  return (
    <div className="game-session">
      <div className="people-container">
        <div className="people">{personElements}</div>
      </div>
      <div className="control-panel-container">
        <p>Suspects found: {gameData.roundsWon}</p>
        <p>Game Status: {status}</p>
        <button onClick={handleQuit}>Back to Menu</button>
        <ControlPanel
          gameStatus={status}
          currentSelectionMode={currentSelectionMode}
          onSelectSelectionMode={handleSelectSelectionMode}
          suspect={getSuspect()}
        />
      </div>
    </div>
  );
}

export default Game;
