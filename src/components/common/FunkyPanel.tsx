import { HTMLAttributes } from "react";
import ClassHelper from "../../helper/ClassHelper";
import ColourService from "../../services/ColourService";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FunkyPanel = ({ className, children, ...defaultprops }: Props) => {
  return (
    <div
      className={ClassHelper.Join(className, "ui-panel")}
      style={ColourService.RandomBorderColourStyle()}
      {...defaultprops}
    >
      {children}
    </div>
  );
};

export default FunkyPanel;
