import { ChangeEvent } from "react";
import ColourService from "../../services/ColourService";
import GameSettingsT from "../../types/GameSettingsT";

interface Props {
  settings: GameSettingsT;
  onChangeSettings: (settings: GameSettingsT) => void;
}

const DifficultySettings = ({ settings, onChangeSettings }: Props) => {
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
              value={settings.crowdSizeInitial}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeSettings({
                  ...settings,
                  crowdSizeInitial: Number(e.target.value),
                })
              }
            />
          </div>
          <div className="setting">
            <label>Crowd size - increment</label>
            <input
              className="cool"
              type="number"
              value={settings.crowdSizeIncrement}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeSettings({
                  ...settings,
                  crowdSizeIncrement: Number(e.target.value),
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultySettings;
