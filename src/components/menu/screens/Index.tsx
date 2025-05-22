import MainMenuNavigation from "../../../enum/MainMenuNavigation";
import MainMenuScreen from "./MainMenuScreen";

interface Props {
  onNavigate: (destination: MainMenuNavigation) => void;
}

const Index = ({ onNavigate }: Props) => {
  return (
    <MainMenuScreen className="screen-index">
      <div className="new-game-container">
        <div className="flex-col gap-1">
          <button
            className="large"
            onClick={() => onNavigate(MainMenuNavigation.NewGame)}
          >
            New Game
          </button>
          <button
            className="large"
            onClick={() => onNavigate(MainMenuNavigation.Tutorial)}
          >
            Tutorial
          </button>
        </div>
      </div>
    </MainMenuScreen>
  );
};

export default Index;
