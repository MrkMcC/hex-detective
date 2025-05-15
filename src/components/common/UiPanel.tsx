import { HTMLAttributes } from "react";
import ColourService from "../../services/ColourService";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const UiPanel = ({}: Props) => {
  return (
    <div
      className="hex-tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>The goal is to find people by the colour of their clothes.</p>
      <p>
        Read the description of the suspect, then click on the right person.
      </p>
    </div>
  );
};

export default UiPanel;
