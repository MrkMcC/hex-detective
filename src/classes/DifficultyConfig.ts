import Constants from "../Constants";

type DifficultyStateT = {
  crowdSizeInitial: number;
  crowdSizeIncrement: number;
};

/**Can be changed before starting the game, but not during it. */
class DifficultyConfig {
  key: string;
  parameters: DifficultyStateT;
  isTutorial = false;

  valid() {
    const valid_crowdSizeInitial =
      this.parameters.crowdSizeInitial > 1 &&
      this.parameters.crowdSizeInitial < 101;
    const valid_crowdSizeIncrement =
      this.parameters.crowdSizeIncrement >= 0 &&
      this.parameters.crowdSizeIncrement < 26;

    return valid_crowdSizeInitial && valid_crowdSizeIncrement;
  }

  constructor(
    params: DifficultyStateT,
    key: string = Constants.DIFFICULTY_KEY_CUSTOM
  ) {
    this.key = key;
    this.parameters = params;
    this.isTutorial = key === Constants.DIFFICULTY_KEY_TUTORIAL;
  }
}

export default DifficultyConfig;
