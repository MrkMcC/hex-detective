import english from "./texts.en.json";

type LocalisationNodeT = {
  [key: string]: LocalisationNodeT | string;
};

type LocalisationSystemNodeT = LocalisationNodeT & {
  localisation_missing: string;
};

type LocalisationRootT = LocalisationNodeT & {
  system: LocalisationSystemNodeT;
};

const Texts: { [locale: string]: LocalisationRootT } = {
  EN: english,
};

export type { LocalisationNodeT };
export default Texts;
