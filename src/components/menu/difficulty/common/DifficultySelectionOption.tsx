import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import DifficultyConfig from "../../../../classes/DifficultyConfig";
import Localise from "../../../common/Localise";

interface Props {
  isSelected: boolean;
  difficulty: DifficultyConfig;
  onSelect: (difficulty: DifficultyConfig) => void;
}

const DifficultySelectionOption = ({
  isSelected,
  difficulty,
  onSelect,
}: Props) => {
  return (
    <div
      className={`difficulty-selection-option ${difficulty.key}${
        isSelected ? " selected" : ""
      }`}
    >
      <FaCaretRight className="icon color-grey" />
      <button onClick={() => onSelect(difficulty)}>
        <Localise>DIFFICULTY/{difficulty.key}/NAME</Localise>
      </button>
      <FaCaretLeft className="icon color-grey" />
    </div>
  );
};

export default DifficultySelectionOption;
