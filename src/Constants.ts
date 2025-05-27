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
  },

  /**These should be false in production. */
  DEBUG: {
    REVEAL_SOLUTION: true,
    UNLIMIT_DIFFICULTY_SETTINGS: true,
  },
};

export default Constants;
