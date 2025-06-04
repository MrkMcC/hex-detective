import texts, { LocalisationNodeT } from "../assets/localisation/Texts";
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

const text = (key: string) => {
  const keyParts = key.split("/");
  let currentNode: LocalisationNodeT = activeLocalisation;

  for (let index = 0; index < keyParts.length; index++) {
    const identifier = keyParts[index];
    const targetChild = getPropertyCaseInsensitive(currentNode, identifier);
    if (targetChild === undefined) {
      break;
    }

    if (index === keyParts.length - 1) return targetChild as string;
    else currentNode = targetChild as LocalisationNodeT;
  }

  LogService.Error(
    LOG_SUBJECT,
    `Text not found: ${key.toUpperCase()} (locale: ${currentLocale})`
  );
  return activeLocalisation.system.localisation_missing;
};

/**A placeholder for possible upcoming localisation */
const Localise = {
  Text: text,
};

export default Localise;
