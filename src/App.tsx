import objectHash from "object-hash";
import { useState } from "react";
import Game from "./components/Game";
import MainMenu from "./components/menu/MainMenu";
import GameStatus from "./enum/GameStatus";
import GameSettingsT from "./types/GameSettingsT";

//TODO 1.0
//- Rebrand to "suspect"
//- Instructions on how to play & how to read hex
//- Rework accused/ruled out indication
//- Quit game confirm dialog
//- polish or remove ui placeholders
//- git branch

//TODO Post Release
//- FavIcon
//- Add "How to read hex colour codes to how-to-play"
//- Difficulty Options
//-- show colour triangle option
//-- show int values (0-255) option
//-- show percentages option
//- Main menu difficulty options
//- Polish how-to-play, add pictures (or the corresponding elements directly)
//- Random "wanted for _" text for each suspect
//- accuse hover zitter-animation (&Schweissperle?)
//- option: disable animations (&center pupils with css)
//- Rework collapse to increase people-container height as well
//- button to re-sort people by sussy status
//- Game mode "Tinder" - shows a person and colours and asks: Does this match?

function App() {
  const [status, setStatus] = useState<GameStatus>(GameStatus.Setup);
  const [settings, setSettings] = useState<GameSettingsT>({ crowdSize: 4 });

  const handleStartGame = () => {
    setStatus(GameStatus.InProgress);
  };

  return (
    <div className="app-wrapper">
      {status === GameStatus.Setup ? (
        <MainMenu
          settings={settings}
          onChangeSettings={setSettings}
          onStartGame={handleStartGame}
        />
      ) : (
        <Game
          key={objectHash(settings.crowdSize)}
          status={status}
          onChangeStatus={setStatus}
          settings={settings}
        />
      )}
    </div>
  );
}

export default App;
