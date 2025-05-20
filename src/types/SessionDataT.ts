import TutorialProgress from "./TutorialProgress";

/**Information relating to the current play session. Initialised on new game, never used in the main menu.*/
type SessionDataT = {
  roundsWon: number;
  tutorialProgress: TutorialProgress | null;
};

export default SessionDataT;
