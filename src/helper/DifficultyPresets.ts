import ColourBiasAngle from "../classes/ColourBiasAngle";
import ColourBiasPercentage from "../classes/ColourBiasPercentage";
import ColourGenerationBias from "../classes/ColourGenerationBias";
import DifficultyConfig from "../classes/DifficultyConfig";
import Difficulty from "../enum/Difficulty";

const tutorial = new DifficultyConfig(
  {
    crowdSizeInitial: 17,
    crowdSizeIncrement: 17,
    colourGenerationBias: new ColourGenerationBias(),
    lives: 1,
  },
  Difficulty.Tutorial
);
const easiest = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBiasAngle(25),
      new ColourBiasPercentage(1),
      new ColourBiasPercentage(1)
    ),
    lives: 3,
  },
  Difficulty.Easiest
);
const easy = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBiasAngle(15),
      new ColourBiasPercentage(0.5),
      new ColourBiasPercentage(0.25)
    ),
    lives: 3,
  },
  Difficulty.Easy
);
const normal = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBiasAngle(1),
      new ColourBiasPercentage(),
      new ColourBiasPercentage()
    ),
    lives: 3,
  },
  Difficulty.Normal
);
const hard = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBiasAngle(1, 60),
      new ColourBiasPercentage(undefined, 0.9),
      new ColourBiasPercentage(undefined, 0.9)
    ),
    lives: 3,
  },
  Difficulty.Hard
);
const hardest = new DifficultyConfig(
  {
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      new ColourBiasAngle(1, 30),
      new ColourBiasPercentage(undefined, 0.8),
      new ColourBiasPercentage(undefined, 0.8)
    ),
    lives: 3,
  },
  Difficulty.Hardest
);

const DifficultyPresets = {
  /**All difficulties except tutorial */
  Options: [easiest, easy, normal, hard, hardest],
  Tutorial: tutorial,
};

export default DifficultyPresets;
