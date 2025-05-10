import objectHash from "object-hash";
import { useState } from "react";
import Game from "./components/Game";
import MainMenu from "./components/menu/MainMenu";
import GameStatus from "./enum/GameStatus";
import GameSettingsT from "./types/GameSettingsT";

//TODO 1.0
//- Rework accused/ruled out indication
//- polish or remove ui placeholders

//TODO Post Release
//- Add "How to read hex colour codes" to how-to-play
//- Difficulty Options
//-- show colour triangle option
//-- show int values (0-255) option
//-- show percentages option
//- Main menu difficulty options
//- Polish how-to-play, add pictures (or the corresponding elements directly)
//- Random name generation for suspect (example: Man-fred Bau-knecht, Hel-ga Rosen-stein, Phi-lipp Kurz-bach, Hel-lipp Bau-stein)
//- Random "wanted for _" text for each suspect
//- accuse hover zitter-animation (&Schweissperle?)
//- option: disable animations (&center pupils with css)
//- Rework collapse to increase people-container height as well
//- button to re-sort people by sussy status
//- Game mode "Tinder" - shows a person and colours and asks: Does this match?

function App() {
  const [status, setStatus] = useState<GameStatus>(GameStatus.Setup);
  const [settings, setSettings] = useState<GameSettingsT>({
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
  });

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
