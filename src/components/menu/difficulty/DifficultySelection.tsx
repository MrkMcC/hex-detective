import DifficultyConfig from "../../../classes/DifficultyConfig";
import DifficultyPresets from "../../../helper/DifficultyPresets";
import ColourService from "../../../services/ColourService";
import Localise from "../../common/Localise";
import DifficultySelectionOption from "./common/DifficultySelectionOption";

interface Props {
  value?: DifficultyConfig;
  onSelect: (settings: DifficultyConfig) => void;
}

const DifficultySelection = ({ value, onSelect: onChangeSettings }: Props) => {
  const difficultyOptions = [...DifficultyPresets.Options];

  const handleSelectDifficulty = (difficulty: DifficultyConfig) => {
    onChangeSettings(difficulty);
  };

  const optionElements = difficultyOptions.map((d, index) => (
    <DifficultySelectionOption
      key={d.key}
      isSelected={d.key === value?.key}
      difficulty={d}
      index={index + 1}
      onSelect={handleSelectDifficulty}
    />
  ));

  return (
    <div
      className="difficulty-selection ui-panel"
      style={ColourService.RandomBorderColourStyle()}
    >
      <h2 className="border-underline">
        <Localise>MAIN/NAVIGATION/HEADER_DRESS_CODE</Localise>
      </h2>
      <div className="options flex-col">{optionElements}</div>
    </div>
  );
};

export default DifficultySelection;
