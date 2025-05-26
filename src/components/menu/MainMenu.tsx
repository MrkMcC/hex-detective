import { useState } from "react";
import DifficultyConfig from "../../classes/DifficultyConfig";
import MainMenuNavigation from "../../enum/MainMenuNavigation";
import Index from "./screens/Index";
import NewGame from "./screens/NewGame";

interface Props {
  difficulty?: DifficultyConfig;
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
  const [currentNavigation, setCurrentNavigation] = useState(
    MainMenuNavigation.Index
  );

  const handleNavigation = (destination: MainMenuNavigation) => {
    switch (destination) {
      case MainMenuNavigation.Start:
        onStartGame();
        break;
      case MainMenuNavigation.Tutorial:
        onStartTutorial();
        break;
      default:
        setCurrentNavigation(destination);
    }
  };

  switch (currentNavigation) {
    case MainMenuNavigation.NewGame:
      return (
        <NewGame
          onNavigate={handleNavigation}
          difficulty={difficulty}
          onChangeDifficulty={onChangeDifficulty}
        />
      );
    default:
      return <Index onNavigate={handleNavigation} />;
  }
};

export default MainMenu;
