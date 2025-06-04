import { FaCaretLeft } from "react-icons/fa6";
import DifficultyConfig from "../../../classes/DifficultyConfig";
import MainMenuNavigation from "../../../enum/MainMenuNavigation";
import Localise from "../../common/Localise";
import DifficultyBreakdown from "../difficulty/DifficultyBreakdown";
import DifficultySelection from "../difficulty/DifficultySelection";
import MainMenuScreen from "./MainMenuScreen";

interface Props {
  onNavigate: (destination: MainMenuNavigation) => void;
  difficulty?: DifficultyConfig;
  onChangeDifficulty: (settings: DifficultyConfig) => void;
}

const NewGame = ({ onNavigate, difficulty, onChangeDifficulty }: Props) => {
  const difficultyBreakdown = <DifficultyBreakdown difficulty={difficulty} />;

  return (
    <MainMenuScreen
      className="screen-new-game"
      rightColumn={difficultyBreakdown}
    >
      <DifficultySelection value={difficulty} onSelect={onChangeDifficulty} />
      <div className="btn-group-navigation">
        <button
          className="large flex-row align-center"
          onClick={() => onNavigate(MainMenuNavigation.Index)}
        >
          <FaCaretLeft className="icon" /> <span></span>
          <Localise>MAIN/NAVIGATION/BTN_BACK</Localise>
        </button>
        <button
          className="large"
          onClick={() => onNavigate(MainMenuNavigation.Start)}
          disabled={!difficulty || !difficulty.valid()}
        >
          <Localise>MAIN/NAVIGATION/BTN_START</Localise>
        </button>
      </div>
    </MainMenuScreen>
  );
};

export default NewGame;
