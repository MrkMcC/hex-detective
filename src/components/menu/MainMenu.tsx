import DifficultyConfig from "../../classes/DifficultyConfig";
import HowToPlay from "../help/HowToPlay";
import DifficultySelection from "./difficulty/DifficultySelection";
import Title from "./Title";

interface Props {
  difficulty: DifficultyConfig;
  onChangeDifficulty: (settings: DifficultyConfig) => void;
  onStartGame: () => void;
  onStartTutorial: () => void;
}

const MainMenu = ({
  difficulty,
  onChangeDifficulty,
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
        <DifficultySelection value={difficulty} onSelect={onChangeDifficulty} />
        <div className="new-game-container">
          <div className="flex-col gap-1">
            <button
              className="large"
              onClick={onStartGame}
              disabled={!difficulty.valid()}
            >
              New Game
            </button>
            <button className="large" onClick={onStartTutorial}>
              Tutorial
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
