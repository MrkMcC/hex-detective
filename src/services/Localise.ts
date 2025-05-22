import Constants from "../Constants";

const text = (key: string) => {
  switch (key) {
    case `difficulty_${Constants.DIFFICULTY_KEY_EASIEST}`:
      return "Easiest";
    case `difficulty_${Constants.DIFFICULTY_KEY_EASY}`:
      return "Easy";
    case `difficulty_${Constants.DIFFICULTY_KEY_NORMAL}`:
      return "Normal";
    case `difficulty_${Constants.DIFFICULTY_KEY_HARD}`:
      return "Hard";
    case `difficulty_${Constants.DIFFICULTY_KEY_HARDEST}`:
      return "Hardest";
    case `difficulty_${Constants.DIFFICULTY_KEY_CUSTOM}`:
      return "Custom";
    default:
      return "___LOCALISATION-MISSING___";
  }
};

/**A placeholder for possible upcoming localisation */
const Localise = {
  Text: text,
};

export default Localise;
