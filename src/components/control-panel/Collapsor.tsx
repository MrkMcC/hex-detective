import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface Props {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Collapsor = ({ isCollapsed, onToggle }: Props) => {
  return (
    <div
      // its broken atm, therefore hidden. will be fixed in the mobile update.
      className="collapsor hidden"
      onClick={onToggle}
      title={isCollapsed ? "expand this panel" : "collapse this panel"}
    >
      {isCollapsed ? (
        <FaCaretUp className="icon" />
      ) : (
        <FaCaretDown className="icon" />
      )}
    </div>
  );
};

export default Collapsor;
