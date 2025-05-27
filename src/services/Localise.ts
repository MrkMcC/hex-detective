import Constants from "../Constants";

const text = (key: string) => {
  switch (key) {
    case `difficulty_${Constants.DIFFICULTY.KEYS.EASIEST}`:
      return "Neon";
    case `difficulty_${Constants.DIFFICULTY.KEYS.EASY}`:
      return "Fruity";
    case `difficulty_${Constants.DIFFICULTY.KEYS.NORMAL}`:
      return "Casual";
    case `difficulty_${Constants.DIFFICULTY.KEYS.HARD}`:
      return "Uniform";
    case `difficulty_${Constants.DIFFICULTY.KEYS.HARDEST}`:
      return "Dystopian";
    case `difficulty_${Constants.DIFFICULTY.KEYS.CUSTOM}`:
      return "Custom";
    case `difficulty-description_${Constants.DIFFICULTY.KEYS.EASIEST}`:
      return "strongly biased in your favour - the suspect should stand out";
    case `difficulty-description_${Constants.DIFFICULTY.KEYS.EASY}`:
      return "biased in your favour - brighter, more colourful, more distinct";
    case `difficulty-description_${Constants.DIFFICULTY.KEYS.NORMAL}`:
      return "baseline difficulty - completely random";
    case `difficulty-description_${Constants.DIFFICULTY.KEYS.HARD}`:
      return "Oh no, they all dressed alike!";
    case `difficulty-description_${Constants.DIFFICULTY.KEYS.HARDEST}`:
      return "They all look suspicious if you ask me.";
    case `difficulty-description_${Constants.DIFFICULTY.KEYS.CUSTOM}`:
      return "Mix and match";
    default:
      return "___LOCALISATION-MISSING___";
  }
};

/**A placeholder for possible upcoming localisation */
const Localise = {
  Text: text,
};

export default Localise;
