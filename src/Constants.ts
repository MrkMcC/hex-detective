import HueDifferenceBias from "./enum/colour-generation-bias/HueDifferenceBias";
import SaturationBias from "./enum/colour-generation-bias/SaturationBias";
import ValueBias from "./enum/colour-generation-bias/ValueBias";

interface IConstants {
  VARIATION: { AMOUNTS: { [k: string]: number } };
  DIFFICULTY: {
    KEYS: { [k: string]: string };
    HUE_BIAS: {
      [k: number]: { MIN: number | undefined; MAX: number | undefined };
    };
    SATURATION_BIAS: {
      [k: number]: number;
    };
    VALUE_BIAS: {
      [k: number]: number;
    };
  };
  DEBUG: { [k: string]: boolean };
}

const Constants: IConstants = {
  VARIATION: {
    AMOUNTS: {
      HAT: 9,
      EYES: 3,
      MOUTH: 10,
      SHIRT: 5,
      PANTS: 4,
    },
  },

  DIFFICULTY: {
    KEYS: {
      TUTORIAL: "tutorial",
      EASIEST: "easiest",
      EASY: "easy",
      NORMAL: "normal",
      HARD: "hard",
      HARDEST: "hardest",
      CUSTOM: "custom",
    },

    HUE_BIAS: {
      [HueDifferenceBias.MinDifferenceStrong]: { MIN: 25, MAX: undefined },
      [HueDifferenceBias.MinDifferenceSome]: { MIN: 15, MAX: undefined },
      [HueDifferenceBias.None]: { MIN: 1, MAX: undefined },
      [HueDifferenceBias.MaxDifferenceSome]: { MIN: 1, MAX: 60 },
      [HueDifferenceBias.MaxDifferenceStrong]: { MIN: 1, MAX: 30 },
    },

    SATURATION_BIAS: {
      [SaturationBias.None]: 0,
      [SaturationBias.Subtle]: 0.1,
      [SaturationBias.Strong]: 0.5,
      [SaturationBias.Extreme]: 1,
    },

    VALUE_BIAS: {
      [ValueBias.None]: 0,
      [ValueBias.Subtle]: 0.1,
      [ValueBias.Strong]: 0.25,
      [ValueBias.Extreme]: 1,
    },
  },

  /**These should be false in production. */
  DEBUG: {
    REVEAL_SOLUTION: true,
    UNLIMIT_DIFFICULTY_SETTINGS: true,
  },
};

export default Constants;
