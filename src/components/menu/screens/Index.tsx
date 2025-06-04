import MainMenuNavigation from "../../../enum/MainMenuNavigation";
import Localise from "../../common/Localise";
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
            <Localise>MAIN/NAVIGATION/BTN_NEW_GAME</Localise>
          </button>
          <button
            className="large"
            onClick={() => onNavigate(MainMenuNavigation.Tutorial)}
          >
            <Localise>MAIN/NAVIGATION/BTN_TUTORIAL</Localise>
          </button>
        </div>
      </div>
    </MainMenuScreen>
  );
};

export default Index;
