import objectHash from "object-hash";
import { useState } from "react";
import Game from "./components/Game";
import MainMenu from "./components/menu/MainMenu";
import Modal from "./components/modal/Modal";
import GameStatus from "./enum/GameStatus";
import GameSettingsT from "./types/GameSettingsT";

//#region development notes
//Tutorial Update notes
//-Add Hex code tutorial
//-Improve tutorial modal to show tutorial progress

//Difficulty Update notes
//-show colour triangle option
//-show int values (0-255) option
//-show percentages option

//UI Update notes
//-Rework collapse to increase people-container height as well

//#region maybe
//Ultimate Immersion Update notes
//-Random name generation for suspect (example: Man-fred Bau-knecht, Hel-ga Rosen-stein, Phi-lipp Kurz-bach, Hel-lipp Bau-stein)
//-Random "wanted for _" text for each suspect

//Animation Update notes
//-option: disable animations (&center pupils with css)
//-People shiver and sweat on accuse hover

//Other game modes
//- Game mode "Tinder" - shows a person and colours and asks: Does this match?
//#endregion
//#endregion

function App() {
  const [status, setStatus] = useState<GameStatus>(GameStatus.Setup);
  const [settings, setSettings] = useState<GameSettingsT>({
    tutorial: false,
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
  });

  const handleStartGame = () => {
    setSettings((prev) => ({ ...prev, tutorial: false }));
    setStatus(GameStatus.InProgress);
  };

  const handleStartTutorial = () => {
    setSettings((prev) => ({ ...prev, tutorial: true }));
    setStatus(GameStatus.InProgress);
  };

  return (
    <div className="app-wrapper">
      <Modal />
      {status === GameStatus.Setup ? (
        <MainMenu
          settings={settings}
          onChangeSettings={setSettings}
          onStartGame={handleStartGame}
          onStartTutorial={handleStartTutorial}
        />
      ) : (
        <Game
          key={objectHash(settings.crowdSizeInitial)}
          status={status}
          onChangeStatus={setStatus}
          settings={settings}
        />
      )}
    </div>
  );
}

export default App;
