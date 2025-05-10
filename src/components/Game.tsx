import { useState } from "react";
import GameSettingsT from "../types/GameSettingsT";
import GameStatus from "./../enum/GameStatus";
import WitchSelectionMode from "./../enum/WitchSelectionMode";
import ArrayHelper from "./../helper/ArrayHelper";
import GameService from "./../services/GameService";
import PersonService from "./../services/PersonService";
import GameDataT from "./../types/GameDataT";
import PersonT from "./../types/PersonT";
import Person from "./Person";
import WitchControlPanel from "./control-panel/WitchControlPanel";

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
  const [witchId, setWitchId] = useState<string>();
  const [currentSelectionMode, setCurrentSelectionMode] = useState(
    WitchSelectionMode.Accuse
  );
  const [accusedPersonId, setAccusedPersonId] = useState<string | null>(null);

  const getWitch = () => PersonService.FindPersonById(people, witchId);

  //#region Event Handling
  const handleSelect = (personId: string) => {
    switch (currentSelectionMode) {
      case WitchSelectionMode.RuleOut:
        setPeople((prevPeople) =>
          prevPeople.map((p) =>
            p.id === personId ? { ...p, ruledOut: !p.ruledOut } : p
          )
        );
        break;
      case WitchSelectionMode.Accuse:
        accuse(personId);
        // setAccusedPersonId(personId);
        break;
    }
  };

  const handleSelectSelectionMode = (mode: WitchSelectionMode) => {
    setCurrentSelectionMode(mode);
  };

  const handleQuit = () => {
    onChangeStatus(GameStatus.Setup);
  };
  //#endregion

  //#region Game State
  const startNewRound = () => {
    const newPeople = PersonService.GeneratePeople(settings.crowdSize);
    const witch = ArrayHelper.RandomElement(newPeople);
    setAccusedPersonId(null);
    setPeople(newPeople);
    setWitchId(witch.id);
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
      if (accusedPersonId === witchId) {
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
        <p>Witches found: {gameData.roundsWon}</p>
        <p>Game Status: {status}</p>
        <button onClick={handleQuit}>Back to Menu</button>
        <WitchControlPanel
          gameStatus={status}
          currentSelectionMode={currentSelectionMode}
          onSelectSelectionMode={handleSelectSelectionMode}
          witch={getWitch()}
        />
      </div>
    </div>
  );
}

export default Game;
