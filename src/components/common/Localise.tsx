import { nanoid } from "nanoid";
import { ReactNode } from "react";
import LocalisationService from "../../services/LocalisationService";
import Tooltip from "./Tooltip";

interface Props {
  children: string | string[];
  fallback?: string;
  replacements?: ReactNode[];
  tooltips?: boolean;
}

const Localise = ({
  children,
  fallback,
  replacements,
  tooltips = false,
}: Props) => {
  if (typeof children !== "string") children = children.join("");

  const localisedText =
    LocalisationService.GetLocalisedText(children, !!fallback) ?? fallback;
  let result: ReactNode[] = [localisedText];

  const replaceTextWithElement = (
    nodes: ReactNode[],
    placeholder: string,
    replacer: () => ReactNode
  ) => {
    const modifiedNodes: ReactNode[] = [];
    nodes.forEach((element) => {
      if (typeof element === "string") {
        const splitText = element.split(placeholder);

        splitText.forEach((part, index) => {
          modifiedNodes.push(part);
          if (index < splitText.length - 1) {
            modifiedNodes.push(replacer());
          }
        });

        return;
      }

      modifiedNodes.push(element);
    });
    return modifiedNodes;
  };

  //#region indexed placeholders
  if (replacements) {
    for (
      let placeholderIndex = 0;
      placeholderIndex < replacements.length;
      placeholderIndex++
    ) {
      result = replaceTextWithElement(
        result,
        "${" + placeholderIndex + "}",
        () => replacements[placeholderIndex]
      );
    }
  }
  //#endregion

  //#region tooltips
  if (tooltips)
    result.forEach((element) => {
      if (typeof element === "string") {
        const matches = element.matchAll(/\|(.+?)\?\?(.+?)\|/g);
        let currentMatch = matches.next();

        while (!currentMatch.done) {
          result = replaceTextWithElement(result, currentMatch.value[0], () => (
            <Tooltip key={nanoid()} tooltipKey={currentMatch.value![2]}>
              {currentMatch.value![1]}
            </Tooltip>
          ));

          currentMatch = matches.next();
        }
      }
    });
  //#endregion

  return <>{result}</>;
};

export default Localise;
