import DifficultyTemplate from "../enum/DifficultyTemplate";

/**Settings that can be changed before the game, but not during it. */
type GameSettingsT = {
  template: DifficultyTemplate;
  crowdSizeInitial: number;
  crowdSizeIncrement: number;
};

export default GameSettingsT;
