import LocalisationService from "../../services/LocalisationService";

interface Props {
  children: string | string[];
}

const Localise = ({ children }: Props) => {
  if (typeof children !== "string") children = children.join("");
  return LocalisationService.GetLocalisedText(children);
};

export default Localise;
