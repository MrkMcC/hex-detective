import ColourGenerationBias from "../classes/ColourGenerationBias";
import DifficultyConfig from "../classes/DifficultyConfig";
import Constants from "../Constants";
import HueDifferenceBias from "../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../enum/colour-generation-bias/SaturationBias";
import ValueBias from "../enum/colour-generation-bias/ValueBias";

const tutorial = new DifficultyConfig(
  {
    crowdSizeInitial: 17,
    crowdSizeIncrement: 17,
    colourGenerationBias: new ColourGenerationBias(
      IncrementBias.None,
      SaturationBias.None,
      HueDifferenceBias.None,
      ValueBias.None
    ),
  },
  Constants.DIFFICULTY_KEY_TUTORIAL
);
const easiest = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      IncrementBias.HexPairs,
      SaturationBias.Extreme,
      HueDifferenceBias.MinDifferenceStrong,
      ValueBias.Extreme
    ),
  },
  Constants.DIFFICULTY_KEY_EASIEST
);
const easy = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      IncrementBias.HexPairs,
      SaturationBias.None,
      HueDifferenceBias.None,
      ValueBias.Strong
    ),
  },
  Constants.DIFFICULTY_KEY_EASY
);
const normal = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      IncrementBias.None,
      SaturationBias.None,
      HueDifferenceBias.None,
      ValueBias.Subtle
    ),
  },
  Constants.DIFFICULTY_KEY_NORMAL
);
const hard = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      IncrementBias.None,
      SaturationBias.None,
      HueDifferenceBias.MaxDifferenceSome,
      ValueBias.None
    ),
  },
  Constants.DIFFICULTY_KEY_HARD
);
const hardest = new DifficultyConfig(
  {
    crowdSizeInitial: 80,
    crowdSizeIncrement: 5,
    colourGenerationBias: new ColourGenerationBias(
      IncrementBias.None,
      SaturationBias.None,
      HueDifferenceBias.MaxDifferenceStrong,
      ValueBias.None
    ),
  },
  Constants.DIFFICULTY_KEY_HARDEST
);

const DifficultyPresets = {
  /**All difficulties except tutorial */
  Options: [easiest, easy, normal, hard, hardest],
  Default: normal,
  Tutorial: tutorial,
};

export default DifficultyPresets;
