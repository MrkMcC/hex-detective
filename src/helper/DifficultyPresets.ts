import ColourBias from "../classes/ColourBiasPercentage";
import ColourGenerationBias from "../classes/ColourGenerationBias";
import DifficultyConfig from "../classes/DifficultyConfig";
import Constants from "../Constants";

const tutorial = new DifficultyConfig(
  {
    crowdSizeInitial: 17,
    crowdSizeIncrement: 17,
    colourGenerationBias: new ColourGenerationBias(),
  },
  Constants.DIFFICULTY.KEYS.TUTORIAL
);
const easiest = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBias(25),
      new ColourBias(1),
      new ColourBias(1)
    ),
  },
  Constants.DIFFICULTY.KEYS.EASIEST
);
const easy = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBias(15),
      new ColourBias(0.5),
      new ColourBias(0.25)
    ),
  },
  Constants.DIFFICULTY.KEYS.EASY
);
const normal = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBias(1),
      new ColourBias(),
      new ColourBias()
    ),
  },
  Constants.DIFFICULTY.KEYS.NORMAL
);
const hard = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBias(1, 60),
      new ColourBias(undefined, 0.9),
      new ColourBias(undefined, 0.9)
    ),
  },
  Constants.DIFFICULTY.KEYS.HARD
);
const hardest = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBias(1, 30),
      new ColourBias(undefined, 0.8),
      new ColourBias(undefined, 0.8)
    ),
  },
  Constants.DIFFICULTY.KEYS.HARDEST
);

const DifficultyPresets = {
  /**All difficulties except tutorial */
  Options: [easiest, easy, normal, hard, hardest],
  Tutorial: tutorial,
};

export default DifficultyPresets;
