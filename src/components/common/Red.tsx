import { ReactNode } from "react";
import ColourPresets from "../../helper/ColourPresets";
import ColouredText from "./ColouredText";

interface Props {
  strong?: boolean;
  children: ReactNode;
}

const Red = ({ strong = true, children }: Props) => {
  return (
    <ColouredText colour={ColourPresets.Red} strong={strong}>
      {children}
    </ColouredText>
  );
};

export default Red;
