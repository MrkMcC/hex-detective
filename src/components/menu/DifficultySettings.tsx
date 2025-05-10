import { ChangeEvent } from "react";
import GameSettingsT from "../../types/GameSettingsT";

interface Props {
  settings: GameSettingsT;
  onChangeSettings: (settings: GameSettingsT) => void;
}

const DifficultySettings = ({ settings, onChangeSettings }: Props) => {
  return (
    <div className="difficulty-settings ui-panel">
      <div className="custom-difficulty">
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
  );
};

export default DifficultySettings;
