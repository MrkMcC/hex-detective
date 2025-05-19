import objectHash from "object-hash";
import { useEffect, useState } from "react";
import GameSettings from "./classes/GameSettings";
import Game from "./components/Game";
import MainMenu from "./components/menu/MainMenu";
import Modal from "./components/modal/Modal";
import GameStatus from "./enum/GameStatus";
import HexDetectiveEvent from "./enum/HexDetectiveEvent";
import EventService from "./services/EventService";

//#region development notes

//UI Update notes
//-Welcome message to make sure the users has an unbiased colour view (no forced dark mode, no sunlight on the screen etc.)
//-Ruled out people can be removed entirely (can be undone)
//-Help texts to explain details, e.g. the fact that skirts are pants ;)
//-visually separate modal heading from content somehow (underline?)
//-Rework collapse to increase people-container height as well
//-Custom "Game over" message for the tutorial that is extra encouraging i.e. "Don't worry, making mistakes is part of learning."
//-improve interactive bar chart ui

//Difficulty Update notes
//-show colour triangle option
//-show int values (0-255) option
//-show percentages option

//#region maybe

//Tutorial Improvements
//-Improve tutorial modal to show tutorial progress
//-Allow navigating to a specific tutorial stage (maybe near the Back to menu button)

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
//-option: disable animations (&center pupils with css)
//-People shiver and sweat on accuse hover

//Other game modes
//- Game mode "Tinder" - shows a person and colours and asks: Does this match?
//#endregion
//#endregion

function App() {
  const [status, setStatus] = useState<GameStatus>(GameStatus.Setup);
  const [settings, setSettings] = useState<GameSettings>(new GameSettings());

  const handleHexDetectiveEvent = (event: HexDetectiveEvent) => {
    if (event === HexDetectiveEvent.BackToMenu) setStatus(GameStatus.Setup);
  };

  useEffect(() => {
    EventService.AddListener(handleHexDetectiveEvent);
    return () => EventService.RemoveListener(handleHexDetectiveEvent);
  }, []);

  const handleStartGame = () => {
    setSettings(
      (prev) => new GameSettings({ ...prev.parameters, tutorial: false })
    );
    setStatus(GameStatus.InProgress);
  };

  const handleStartTutorial = () => {
    setSettings(
      (prev) => new GameSettings({ ...prev.parameters, tutorial: true })
    );
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
          key={objectHash(settings.parameters.crowdSizeInitial)}
          status={status}
          onChangeStatus={setStatus}
          settings={settings}
        />
      )}
    </div>
  );
}

export default App;
