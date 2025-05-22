import DifficultyConfig from "../classes/DifficultyConfig";
import Constants from "../Constants";

const tutorial = new DifficultyConfig(
  {
    crowdSizeInitial: 17,
    crowdSizeIncrement: 17,
  },
  Constants.DIFFICULTY_KEY_TUTORIAL
);
const easy = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
  },
  Constants.DIFFICULTY_KEY_EASY
);
const normal = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
  },
  Constants.DIFFICULTY_KEY_NORMAL
);
const hard = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
  },
  Constants.DIFFICULTY_KEY_HARD
);

const DifficultyPresets = {
  /**All difficulties except tutorial */
  Options: [easy, normal, hard],
  Default: normal,
  Tutorial: tutorial,
};

export default DifficultyPresets;
