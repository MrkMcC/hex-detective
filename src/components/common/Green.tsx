import { ReactNode } from "react";
import ColourPresets from "../../helper/ColourPresets";
import ColouredText from "./ColouredText";

interface Props {
  strong?: boolean;
  children: ReactNode;
}

const Green = ({ strong = true, children }: Props) => {
  return (
    <ColouredText colour={ColourPresets.Green} strong={strong}>
      {children}
    </ColouredText>
  );
};

export default Green;
