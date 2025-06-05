import Localise from "./Localise";

interface Props {
  children: string;
  tooltipKey: string;
}

const Tooltip = ({ children, tooltipKey }: Props) => {
  return (
    <span className="tooltip">
      {children}
      <span className="tooltiptext top">
        <Localise>TOOLTIP/{tooltipKey}</Localise>
      </span>
    </span>
  );
};

export default Tooltip;
