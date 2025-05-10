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
        <input
          type="number"
          value={settings.crowdSize}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeSettings({ ...settings, crowdSize: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
};

export default DifficultySettings;
