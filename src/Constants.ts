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
      [k: number]: { MIN: number | undefined; MAX: number | undefined };
    };
    VALUE_BIAS: {
      [k: number]: { MIN: number | undefined; MAX: number | undefined };
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
      [SaturationBias.Extreme]: { MIN: 1, MAX: undefined },
      [SaturationBias.Strong]: { MIN: 0.5, MAX: undefined },
      [SaturationBias.Subtle]: { MIN: 0.1, MAX: undefined },
      [SaturationBias.None]: { MIN: 0, MAX: undefined },
    },

    VALUE_BIAS: {
      [ValueBias.Extreme]: { MIN: 1, MAX: undefined },
      [ValueBias.Strong]: { MIN: 0.25, MAX: undefined },
      [ValueBias.Subtle]: { MIN: 0.1, MAX: undefined },
      [ValueBias.None]: { MIN: undefined, MAX: undefined },
    },
  },

  /**These should be false in production. */
  DEBUG: {
    REVEAL_SOLUTION: true,
    UNLIMIT_DIFFICULTY_SETTINGS: true,
  },
};

export default Constants;
