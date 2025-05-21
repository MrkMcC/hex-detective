import objectHash from "object-hash";
import { useEffect, useState } from "react";
import DifficultyConfig from "./classes/DifficultyConfig";
import UserSettings from "./classes/UserSettings";
import Game from "./components/Game";
import MainMenu from "./components/menu/MainMenu";
import Modal from "./components/modal/Modal";
import GameStatus from "./enum/GameStatus";
import HexDetectiveEvent from "./enum/HexDetectiveEvent";
import EventService from "./services/EventService";

//#region development notes

//Difficulty Update notes
//-show colour triangle option
//-show int values (0-255) option
//-show percentages option
//-Welcome message to make sure the users has an unbiased colour view (no forced dark mode, no sunlight on the screen etc.)

//Mobile Update notes
//-Rework collapse to increase people-container height as well
//#region maybe

//Tutorial Improvements
//-Improve tutorial modal to show tutorial progress
//-Allow navigating to a specific tutorial stage (maybe near the Back to menu button)
//-Update Basics Tutorial to explain ~all UI elements, hiding the unexplained ones and piece by piece unhiding them
//-Disable/hide auto-continue completely

//Hover Texts
//-Include an explanation on RGB vs. CMYK somewhere?
//-RGB, primary colour, secondary colour, hue, saturation, brightness
//-for fun:
//--greek: Ancient Greek was spoken by Ancient Greeks. They are known for thinking very hard. Just like us!
//--latin: Latin was spoken by Ancient Romans. They are known for counting weirdly. Just like us!

//Ultimate Immersion Update notes
//-Random name generation for suspect (example: Man-fred Bau-knecht, Hel-ga Rosen-stein, Phi-lipp Kurz-bach, Hel-lipp Bau-stein)
//-Random "wanted for _" text for each suspect

//Animation Update notes
//-animation for scoring
//-option: disable animations (&center pupils with css)
//-People shiver and sweat on accuse hover

//Other game modes
//- Game mode "Tinder" - shows a person and colours and asks: Does this match?
//#endregion
//#endregion

function App() {
  const [status, setStatus] = useState<GameStatus>(GameStatus.Setup);
  const [settings, setSettings] = useState<UserSettings>(new UserSettings());
  const [difficulty, setDifficulty] = useState<DifficultyConfig>(
    new DifficultyConfig()
  );

  const handleHexDetectiveEvent = (event: HexDetectiveEvent) => {
    if (event === HexDetectiveEvent.BackToMenu) setStatus(GameStatus.Setup);
  };

  useEffect(() => {
    EventService.AddListener(handleHexDetectiveEvent);
    return () => EventService.RemoveListener(handleHexDetectiveEvent);
  }, []);

  const handleStartGame = () => {
    setDifficulty(
      (prev) => new DifficultyConfig({ ...prev.parameters, tutorial: false })
    );
    setStatus(GameStatus.InProgress);
  };

  const handleStartTutorial = () => {
    setDifficulty(
      (prev) => new DifficultyConfig({ ...prev.parameters, tutorial: true })
    );
    setStatus(GameStatus.InProgress);
  };

  return (
    <div className="app-wrapper">
      <Modal />
      {status === GameStatus.Setup ? (
        <MainMenu
          settings={difficulty}
          onChangeSettings={setDifficulty}
          onStartGame={handleStartGame}
          onStartTutorial={handleStartTutorial}
        />
      ) : (
        <Game
          key={objectHash(difficulty.parameters.crowdSizeInitial)}
          status={status}
          onChangeStatus={setStatus}
          difficulty={difficulty}
          settings={settings}
          onChangeSettings={setSettings}
        />
      )}
    </div>
  );
}

export default App;
