import { ReactNode } from "react";
import ColourPresets from "../../../../helper/ColourPresets";
import ColouredText from "./ColouredText";

interface Props {
  strong?: boolean;
  children: ReactNode;
}

const Blue = ({ strong = true, children }: Props) => {
  return (
    <ColouredText colour={ColourPresets.Blue} strong={strong}>
      {children}
    </ColouredText>
  );
};

export default Blue;
