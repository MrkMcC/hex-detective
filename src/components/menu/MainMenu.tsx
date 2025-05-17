import GameSettings from "../../classes/GameSettings";
import HowToPlay from "../help/HowToPlay";
import DifficultySettings from "./DifficultySettings";
import Title from "./Title";

interface Props {
  settings: GameSettings;
  onChangeSettings: (settings: GameSettings) => void;
  onStartGame: () => void;
  onStartTutorial: () => void;
}

const MainMenu = ({
  settings,
  onChangeSettings,
  onStartGame,
  onStartTutorial,
}: Props) => {
  return (
    <div className="main-menu">
      <div className="column column-left">
        <HowToPlay />
      </div>
      <div className="column column-center">
        <Title />
        <DifficultySettings
          settings={settings}
          onChangeSettings={onChangeSettings}
        />
        <div className="new-game-container">
          <div className="flex-col gap-1">
            <button
              className="large"
              onClick={onStartGame}
              disabled={!settings.valid()}
            >
              New Game
            </button>
            <button className="large" onClick={onStartTutorial}>
              Tutorial (beta)
            </button>
          </div>
        </div>
      </div>
      <div className="column column-right">
        <div className="context-info"></div>
      </div>
    </div>
  );
};

export default MainMenu;
