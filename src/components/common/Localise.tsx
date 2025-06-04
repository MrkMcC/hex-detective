import { ReactNode } from "react";
import LocalisationService from "../../services/LocalisationService";

interface Props {
  children: string | string[];
  placeholders?: ReactNode[];
}

const Localise = ({ children, placeholders }: Props) => {
  if (typeof children !== "string") children = children.join("");

  const localisedText = LocalisationService.GetLocalisedText(children);

  if (placeholders) {
    let result: ReactNode[] = [localisedText];

    for (
      let placeholderIndex = 0;
      placeholderIndex < placeholders.length;
      placeholderIndex++
    ) {
      const modifiedResult: ReactNode[] = [];
      result.forEach((element) => {
        if (typeof element === "string") {
          const splitText = element.split("${" + placeholderIndex + "}");

          splitText.forEach((part, index) => {
            modifiedResult.push(part);
            if (index < splitText.length - 1) {
              modifiedResult.push(placeholders[placeholderIndex]);
            }
          });

          return;
        }

        modifiedResult.push(element);
      });
      result = modifiedResult;
    }

    return <>{result}</>;
  }

  return localisedText;
};

export default Localise;
