import HueDifferenceBias from "./enum/colour-generation-bias/HueDifferenceBias";

const Constants = {
  VARIATION: {
    AMOUNTS: {
      HAT: 9,
      EYES: 3,
      MOUTH: 10,
      SHIRT: 5,
      PANTS: 4,
    },
  },

  //TODO group as object
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
      [HueDifferenceBias.MinDifferenceStrong]: [20, undefined],
      [HueDifferenceBias.MinDifferenceSome]: [10, undefined],
      [HueDifferenceBias.None]: [1, undefined],
      [HueDifferenceBias.MaxDifferenceSome]: [1, 60],
      [HueDifferenceBias.MaxDifferenceStrong]: [1, 30],
    },
  },

  /**These should be false in production. */
  DEBUG: {
    REVEAL_SOLUTION: true,
    UNLIMIT_DIFFICULTY_SETTINGS: true,
  },
};

export default Constants;
