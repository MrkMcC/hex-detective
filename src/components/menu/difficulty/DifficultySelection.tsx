// import { useState } from "react";
// import ColourGenerationBias from "../../../classes/ColourGenerationBias";
// import HueDifferenceBias from "../../../enum/colour-generation-bias/HueDifferenceBias";
// import IncrementBias from "../../../enum/colour-generation-bias/IncrementBias";
// import SaturationBias from "../../../enum/colour-generation-bias/SaturationBias";
import DifficultyConfig from "../../../classes/DifficultyConfig";
import DifficultyPresets from "../../../helper/DifficultyPresets";
import ColourService from "../../../services/ColourService";
import DifficultySelectionOption from "./common/DifficultySelectionOption";

interface Props {
  value?: DifficultyConfig;
  onSelect: (settings: DifficultyConfig) => void;
}

const DifficultySelection = ({ value, onSelect: onChangeSettings }: Props) => {
  // const [customDifficulty, setCustomDifficulty] = useState(
  //   new DifficultyConfig({
  //     crowdSizeInitial: 5,
  //     crowdSizeIncrement: 5,
  //     colourGenerationBias: new ColourGenerationBias(
  //       IncrementBias.None,
  //       SaturationBias.None,
  //       HueDifferenceBias.None
  //     ),
  //   })
  // );

  const difficultyOptions = [...DifficultyPresets.Options];

  const handleSelectDifficulty = (difficulty: DifficultyConfig) => {
    onChangeSettings(difficulty);
  };

  const optionElements = difficultyOptions.map((d) => (
    <DifficultySelectionOption
      key={d.key}
      isSelected={d.key === value?.key}
      difficulty={d}
      onSelect={handleSelectDifficulty}
    />
  ));

  return (
    <div
      className="difficulty-selection ui-panel"
      style={ColourService.RandomBorderColourStyle()}
    >
      <h2 className="border-underline">Dress Code</h2>
      <div className="options">{optionElements}</div>
    </div>
  );
};

export default DifficultySelection;
