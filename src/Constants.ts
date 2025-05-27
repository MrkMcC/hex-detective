import HueDifferenceBias from "./enum/colour-generation-bias/HueDifferenceBias";

interface IConstants {
  VARIATION: { AMOUNTS: { [k: string]: number } };
  DIFFICULTY: {
    KEYS: { [k: string]: string };
    HUE_BIAS: {
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
  },

  /**These should be false in production. */
  DEBUG: {
    REVEAL_SOLUTION: true,
    UNLIMIT_DIFFICULTY_SETTINGS: true,
  },
};

export default Constants;
