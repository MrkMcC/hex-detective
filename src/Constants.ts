interface IConstants {
  VARIATION: { AMOUNTS: { [k: string]: number } };
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

  /**These should be false in production. */
  DEBUG: {
    REVEAL_SOLUTION: false,
    UNLIMIT_DIFFICULTY_SETTINGS: false,
    MISSING_TEXTS_AS_KEYS: false,
    MOCK_MISSING_TEXTS: false,
  },
};

export default Constants;
