import { ChangeEvent } from "react";
import GameSettings from "../../classes/GameSettings";
import ColourService from "../../services/ColourService";

interface Props {
  settings: GameSettings;
  onChangeSettings: (settings: GameSettings) => void;
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
              value={settings.parameters.crowdSizeInitial}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeSettings(
                  new GameSettings({
                    ...settings.parameters,
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
              value={settings.parameters.crowdSizeIncrement}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChangeSettings(
                  new GameSettings({
                    ...settings.parameters,
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

export default DifficultySettings;
