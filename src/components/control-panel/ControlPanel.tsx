import { useState } from "react";
import { MdRefresh } from "react-icons/md";
import GameStatus from "../../enum/GameStatus";
import SuspectSelectionMode from "../../enum/SuspectSelectionMode";
import GameDataT from "../../types/GameDataT";
import PersonT from "../../types/PersonT";
import Collapsor from "./Collapsor";
import HighScore from "./HighScore";
import SelectionModeControl from "./SelectionModeControl";
import StatusText from "./StatusText";
import SuspectInfo from "./SuspectInfo";

interface Props {
  suspect?: PersonT;
  gameData: GameDataT;
  gameStatus: GameStatus;
  currentSelectionMode: SuspectSelectionMode;
  onSelectSelectionMode: (mode: SuspectSelectionMode) => void;
  onReset: () => void;
}

const ControlPanel = ({
  suspect,
  gameData,
  gameStatus,
  currentSelectionMode,
  onSelectSelectionMode,
  onReset,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="control-panel-container">
      <div className="btn-restart-container">
        {gameStatus === GameStatus.GameOver && (
          <button className="btn-restart large" onClick={onReset}>
            <MdRefresh className="icon" /> Play again
          </button>
        )}
      </div>
      <div
        className={`control-panel ui-panel ${
          isCollapsed ? "collapsed" : "expanded"
        }`}
      >
        <div className="info">
          {!isCollapsed && <StatusText state={gameStatus} />}
          {suspect && (
            <SuspectInfo
              suspect={suspect}
              revealColours={gameStatus !== GameStatus.InProgress}
              compact={isCollapsed}
            />
          )}
        </div>
        {gameStatus === GameStatus.InProgress && (
          <SelectionModeControl
            currentMode={currentSelectionMode}
            onSelect={onSelectSelectionMode}
            compact={isCollapsed}
          />
        )}
        {gameStatus === GameStatus.GameOver && (
          <HighScore gameData={gameData} />
        )}
        <Collapsor isCollapsed={isCollapsed} onToggle={toggleCollapse} />
      </div>
    </div>
  );
};

export default ControlPanel;
