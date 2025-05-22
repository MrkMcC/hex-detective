import Constants from "../Constants";

const text = (key: string) => {
  switch (key) {
    case `difficulty_${Constants.DIFFICULTY_KEY_EASIEST}`:
      return "Neon";
    case `difficulty_${Constants.DIFFICULTY_KEY_EASY}`:
      return "Fruity";
    case `difficulty_${Constants.DIFFICULTY_KEY_NORMAL}`:
      return "Casual";
    case `difficulty_${Constants.DIFFICULTY_KEY_HARD}`:
      return "Uniform";
    case `difficulty_${Constants.DIFFICULTY_KEY_HARDEST}`:
      return "Dystopian";
    case `difficulty_${Constants.DIFFICULTY_KEY_CUSTOM}`:
      return "Custom";
    case `difficulty-description_${Constants.DIFFICULTY_KEY_EASIEST}`:
      return "strongly biased in your favour - the suspect should stand out";
    case `difficulty-description_${Constants.DIFFICULTY_KEY_EASY}`:
      return "biased in your favour - brighter, more colourful, more distinct";
    case `difficulty-description_${Constants.DIFFICULTY_KEY_NORMAL}`:
      return "baseline difficulty - completely random";
    case `difficulty-description_${Constants.DIFFICULTY_KEY_HARD}`:
      return "oh no, they all dressed alike!";
    case `difficulty-description_${Constants.DIFFICULTY_KEY_HARDEST}`:
      return "they all look suspicious if you ask me";
    case `difficulty-description_${Constants.DIFFICULTY_KEY_CUSTOM}`:
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
