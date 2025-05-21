import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import ClassHelper from "../../helper/ClassHelper";

interface Props {
  isCollapsed: boolean;
  onChange: (collapsed: boolean) => void;
  corner?: "top-right";
  label?: string;
}

const Collapsor = ({ isCollapsed, onChange, corner, label }: Props) => {
  const handleClick = () => {
    onChange(!isCollapsed);
  };

  const className = ClassHelper.Join(
    "collapsor",
    corner,
    isCollapsed ? "collapsed" : "expanded"
  );

  return (
    <div
      className={className}
      onClick={handleClick}
      title={isCollapsed ? "expand this panel" : "collapse this panel"}
    >
      {label && <span>{label}</span>}
      {isCollapsed ? (
        <FaCaretUp className="icon" />
      ) : (
        <FaCaretDown className="icon" />
      )}
    </div>
  );
};

export default Collapsor;
