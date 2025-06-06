import objectHash from "object-hash";
import { useEffect, useState } from "react";
import DifficultyConfig from "./classes/DifficultyConfig";
import UserSettings from "./classes/UserSettings";
import Game from "./components/Game";
import MainMenu from "./components/menu/MainMenu";
import Modal from "./components/modal/Modal";
import GameStatus from "./enum/GameStatus";
import HexDetectiveEvent from "./enum/HexDetectiveEvent";
import DifficultyPresets from "./helper/DifficultyPresets";
import EventService from "./services/EventService";
import LogService from "./services/LogService";
import ModalService from "./services/ModalService";

//#region development notes

//Difficulty Update notes
//-show colour triangle option (or circle? or both?)
//-show int values (0-255) option
//-show percentages option

//'Secret' Update
//-allow changing the DEBUG-variables via console
//-show something like "Debug mode" in the corner if sv_cheats === 1; make it disappear on mouse over so it can't interfere with the game

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
//-better, more distinct DifficultySelection with custom icons or smth
//-Welcome message & test image to ensure an unbiased colour view (no forced dark mode, no sunlight on the screen etc.)

//Difficulty Improvements
//-Implement custom difficulty
//-Add a mode that automatically increases the difficulty
//-Maybe add random round modifiers like "Night Round - Max value reduced for this round" (or "Fog Round" for saturation etc; modifiers could also be "positive")

//Cookie Notes
//-Save debug mode variables in cookies as well

//Hover Texts
//-Include an explanation on RGB vs. CMYK somewhere?
//-RGB, primary colour, secondary colour, hue, saturation, brightness

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
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyConfig>();
  const [isTutorial, setIsTutorial] = useState(false);

  const difficulty = isTutorial
    ? DifficultyPresets.Tutorial
    : selectedDifficulty;

  const handleHexDetectiveEvent = (event: HexDetectiveEvent) => {
    switch (event) {
      case HexDetectiveEvent.BackToMenu:
        setStatus(GameStatus.Setup);
        break;
      case HexDetectiveEvent.CloseModal:
        ModalService.CloseModal();
        break;
    }
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
    <div className="app-wrapper respect-linebreaks">
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
          key={objectHash(difficulty!.parameters.crowdSizeInitial)}
          status={status}
          onChangeStatus={setStatus}
          difficulty={difficulty!}
          settings={settings}
          onChangeSettings={setSettings}
        />
      )}
    </div>
  );
}

export default App;
