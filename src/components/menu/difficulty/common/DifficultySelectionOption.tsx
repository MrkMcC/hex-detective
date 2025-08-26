import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import DifficultyConfig from "../../../../classes/DifficultyConfig";
import Localise from "../../../common/Localise";

interface Props {
  isSelected: boolean;
  difficulty: DifficultyConfig;
  index: number;
  onSelect: (difficulty: DifficultyConfig) => void;
}

const DifficultySelectionOption = ({
  isSelected,
  difficulty,
  index,
  onSelect,
}: Props) => {
  return (
    <div
      className={`difficulty-selection-option ps-1 ${difficulty.key}${
        isSelected ? " selected" : ""
      }`}
    >
      <FaCaretRight className="icon left color-grey" />
      <button
        className="show-m for-l w-100-m"
        onClick={() => onSelect(difficulty)}
      >
        <Localise>DIFFICULTY/{difficulty.key}/NAME</Localise>
      </button>
      <button className="hide-m" onClick={() => onSelect(difficulty)}>
        {index}
      </button>
      <FaCaretLeft className="icon right color-grey" />
    </div>
  );
};

export default DifficultySelectionOption;
