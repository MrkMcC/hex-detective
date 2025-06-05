import texts, { LocalisationNodeT } from "../assets/localisation/Texts";
import Constants from "../Constants";
import LogService from "./LogService";

const LOG_SUBJECT = "Localisation";
const currentLocale = "en";
const activeLocalisation = texts[currentLocale.toUpperCase()];

const getPropertyCaseInsensitive = (node: LocalisationNodeT, prop: string) => {
  const identifier = Object.keys(node).find(
    (key) => key.toUpperCase() === prop.toUpperCase()
  );
  if (!identifier) return undefined;
  return node[identifier];
};

const getLocalisedText = (key: string, acceptUndefined = false) => {
  key = key.toUpperCase();
  const keyParts = key.split("/");
  let currentNode: LocalisationNodeT = activeLocalisation;

  for (let index = 0; index < keyParts.length; index++) {
    if (Constants.DEBUG.MOCK_MISSING_TEXTS) break;
    const identifier = keyParts[index];
    const nextNode = getPropertyCaseInsensitive(currentNode, identifier);
    if (nextNode === undefined) {
      break;
    }

    if (index === keyParts.length - 1) {
      {
        const localisedText = nextNode as string;
        if (typeof localisedText !== "string") break;
        return nextNode as string;
      }
    } else currentNode = nextNode as LocalisationNodeT;
  }

  LogService.Error(
    LOG_SUBJECT,
    `Text not found: ${key} (locale: ${currentLocale})`
  );
  if (Constants.DEBUG.MISSING_TEXTS_AS_KEYS)
    return keyParts[keyParts.length - 1];
  return acceptUndefined
    ? undefined
    : activeLocalisation.SYSTEM.LOCALISATION_MISSING;
};

/**A placeholder for possible upcoming localisation */
const LocalisationService = {
  GetLocalisedText: getLocalisedText,
};

export default LocalisationService;
