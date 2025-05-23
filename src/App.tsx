import objectHash from "object-hash";
import { useEffect, useState } from "react";
import UserSettings from "./classes/UserSettings";
import Game from "./components/Game";
import MainMenu from "./components/menu/MainMenu";
import Modal from "./components/modal/Modal";
import GameStatus from "./enum/GameStatus";
import HexDetectiveEvent from "./enum/HexDetectiveEvent";
import DifficultyPresets from "./helper/DifficultyPresets";
import EventService from "./services/EventService";
import LogService from "./services/LogService";

//#region development notes

//Difficulty Update notes

//-'How to Play' might be obsolete
//-Other names for difficulty 'easy', as that is subjective
//-Difficulty options should have borders that reflect their colour bias
//-Re-integrate custom difficulty
//-Main Menu Title - Saturation-Bias setzen

//Easy
//-Bias: colours have a minimum distance to the suspect

//Normal
//-Bias: None

//Hard:
//-Bias: Colours have a maximum distance to the suspect

//Harder modes: maybe, after testing hard mode

//-show colour triangle option
//-show int values (0-255) option
//-show percentages option
//-Welcome message to make sure the users has an unbiased colour view (no forced dark mode, no sunlight on the screen etc.)

//Mobile Update notes
//-Rework collapse to increase people-container height as well
//#region maybe

//Tutorial Improvements
//-Make it clear that the tutorial expects you to make mistakes, and that failing is part of learning.
//-the main menu text 'Accuse the wrong person and it's game over.' primes the player poorly for the tutorial
//-on first success and first fail show a message referring to the summary and continue-button
//-make it clear that ruling out can be undone and has no consequences -> the rule out tutorial modal should have a task for rule out & rule back in each
//-Improve tutorial modal to show tutorial progress
//-Allow navigating to a specific tutorial stage (maybe near the Back to menu button)
//-Update Basics Tutorial to explain ~all UI elements, hiding the unexplained ones and piece by piece unhiding them
//-Disable/hide auto-continue completely
//-Mixing Colours 2/2 - 'You don't need to remember the names' can be misunderstood. Make it clear that you DO need to remember the secondary colours.
//-Saturation 2/2 make it more obvious that saturation refers to the difference between the first and third value, ignoring the middle, maybe add a TutorialTask
//-show stage progess in place of score or lives (e.g. three dots, or three arrow-shaped bars)
//-once easy-difficulty colour help exists

//UI Improvements
//-a correct guess should be more obvious and more rewarding
//-number inputs show a bright +/- Element (on hover in Chrome, always in Firefox) - remove that and replace with pretty +/- buttons
//-make continue-button more obvious, maybe move it to the center

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

//#region other 1.0 requirements
//-Add a note on accessibility
//-Add credits
//--ask playtesters what name to use
//---playtesters: ambi, inot, jankins
//#endregion
//#endregion
//#endregion

function App() {
  const [status, setStatus] = useState(GameStatus.Setup);
  const [settings, setSettings] = useState(new UserSettings());
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    DifficultyPresets.Default
  );
  const [isTutorial, setIsTutorial] = useState(false);

  const handleHexDetectiveEvent = (event: HexDetectiveEvent) => {
    if (event === HexDetectiveEvent.BackToMenu) setStatus(GameStatus.Setup);
  };

  useEffect(() => {
    LogService.Warn(
      "Thank you for playing #HexDetective!",
      "Game lagging? Try closing the dev tools."
    );
    EventService.AddListener(handleHexDetectiveEvent);
    return () => EventService.RemoveListener(handleHexDetectiveEvent);
  }, []);

  const handleStartGame = () => {
    setIsTutorial(false);
    setStatus(GameStatus.InProgress);
  };

  const handleStartTutorial = () => {
    setIsTutorial(true);
    setStatus(GameStatus.InProgress);
  };

  return (
    <div className="app-wrapper">
      <Modal />
      {status === GameStatus.Setup ? (
        <MainMenu
          difficulty={selectedDifficulty}
          onChangeDifficulty={setSelectedDifficulty}
          onStartGame={handleStartGame}
          onStartTutorial={handleStartTutorial}
        />
      ) : (
        <Game
          key={objectHash(selectedDifficulty.parameters.crowdSizeInitial)}
          status={status}
          onChangeStatus={setStatus}
          difficulty={
            isTutorial ? DifficultyPresets.Tutorial : selectedDifficulty
          }
          settings={settings}
          onChangeSettings={setSettings}
        />
      )}
    </div>
  );
}

export default App;
