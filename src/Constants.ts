interface IConstants {
  VARIATION: { AMOUNTS: { [k: string]: number } };
  DIFFICULTY: {
    KEYS: { [k: string]: string };
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
    //TODO this should obviously be an enum
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
    MISSING_TEXTS_AS_KEYS: true,
    MOCK_MISSING_TEXTS: false,
  },
};

export default Constants;
