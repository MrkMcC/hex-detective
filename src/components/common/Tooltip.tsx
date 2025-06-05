import { useState } from "react";
import { createPortal } from "react-dom";
import Localise from "./Localise";

interface Props {
  children: string;
  tooltipKey: string;
}

const Tooltip = ({ children, tooltipKey }: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className="tooltip"
      onMouseOver={() => setShowTooltip(true)}
      onMouseOut={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip &&
        createPortal(
          <div className="tooltip-overlay">
            <div className="tooltip-text respect-linebreaks">
              <h3>
                <Localise>TOOLTIP/{tooltipKey}/TITLE</Localise>
              </h3>
              <Localise>TOOLTIP/{tooltipKey}/CONTENT</Localise>
            </div>
          </div>,
          document.body
        )}
    </span>
  );
};

export default Tooltip;
