import { ChangeEvent } from "react";
import DifficultyConfig from "../../../classes/DifficultyConfig";
import ColourService from "../../../services/ColourService";

interface Props {
  difficulty: DifficultyConfig;
  onChangeSettings: (settings: DifficultyConfig) => void;
}

const CustomDifficultySettings = ({ difficulty, onChangeSettings }: Props) => {
  return (
    <div
      className="difficulty-settings ui-panel"
      style={ColourService.RandomBorderColourStyle()}
    >
      <div className="custom-difficulty">
        <h1>Difficulty Settings</h1>
        <div className="settings">
          <div className="setting">
            <label>Crowd size - initial</label>
            <input
              className="cool"
              type="number"
              value={difficulty.parameters.crowdSizeInitial}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeSettings(
                  new DifficultyConfig({
                    ...difficulty.parameters,
                    crowdSizeInitial: Number(e.target.value),
                  })
                )
              }
            />
          </div>
          <div className="setting">
            <label>Crowd size - increment</label>
            <input
              className="cool"
              type="number"
              value={difficulty.parameters.crowdSizeIncrement}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeSettings(
                  new DifficultyConfig({
                    ...difficulty.parameters,
                    crowdSizeIncrement: Number(e.target.value),
                  })
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDifficultySettings;
