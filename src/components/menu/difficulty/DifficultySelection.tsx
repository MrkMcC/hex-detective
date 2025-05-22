import { useState } from "react";
import DifficultyConfig from "../../../classes/DifficultyConfig";
import DifficultyPresets from "../../../helper/DifficultyPresets";
import ColourService from "../../../services/ColourService";
import DifficultySelectionOption from "./DifficultySelectionOption";

interface Props {
  value: DifficultyConfig;
  onSelect: (settings: DifficultyConfig) => void;
}

const DifficultySelection = ({ value, onSelect: onChangeSettings }: Props) => {
  const [customDifficulty, setCustomDifficulty] = useState(
    new DifficultyConfig({
      crowdSizeInitial: 5,
      crowdSizeIncrement: 5,
    })
  );

  const difficultyOptions = [...DifficultyPresets.Options, customDifficulty];

  const handleSelectDifficulty = (difficulty: DifficultyConfig) => {
    onChangeSettings(difficulty);
  };

  const optionElements = difficultyOptions.map((d) => (
    <DifficultySelectionOption
      key={d.key}
      isSelected={d.key === value.key}
      difficulty={d}
      onSelect={handleSelectDifficulty}
    />
  ));

  return (
    <div
      className="difficulty-selection ui-panel"
      style={ColourService.RandomBorderColourStyle()}
    >
      <h2 className="border-underline">Difficulty</h2>
      <div className="options">{optionElements}</div>
    </div>
  );
};

export default DifficultySelection;
