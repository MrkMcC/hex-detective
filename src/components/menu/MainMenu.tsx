import GameSettingsT from "../../types/GameSettingsT";
import DifficultySettings from "./DifficultySettings";
import HowToPlay from "./HowToPlay";

interface Props {
  settings: GameSettingsT;
  onChangeSettings: (settings: GameSettingsT) => void;
  onStartGame: () => void;
}

const MainMenu = ({ settings, onChangeSettings, onStartGame }: Props) => {
  return (
    <div className="main-menu">
      <div className="column column-left">
        <HowToPlay />
      </div>
      <div className="column column-center">
        <h1>#HexaDetective</h1>
        <DifficultySettings
          settings={settings}
          onChangeSettings={onChangeSettings}
        />
        <div className="new-game-container">
          <button className="large" onClick={onStartGame}>
            New Game
          </button>
        </div>
      </div>
      <div className="column column-right">
        <div className="context-info"></div>
      </div>
    </div>
  );
};

export default MainMenu;
