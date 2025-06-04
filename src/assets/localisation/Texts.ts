import english from "./texts.en.json";

type LocalisationNodeT = {
  [key: string]: LocalisationNodeT | string;
};

type LocalisationSystemNodeT = LocalisationNodeT & {
  LOCALISATION_MISSING: string;
};

type LocalisationRootT = LocalisationNodeT & {
  SYSTEM: LocalisationSystemNodeT;
};

const Texts: { [locale: string]: LocalisationRootT } = {
  EN: english,
};

export type { LocalisationNodeT };
export default Texts;
