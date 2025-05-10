import { useState } from "react";
import GameStatus from "../../enum/GameStatus";
import SuspectSelectionMode from "../../enum/SuspectSelectionMode";
import PersonT from "../../types/PersonT";
import Collapsor from "./Collapsor";
import SelectionModeControl from "./SelectionModeControl";
import StatusText from "./StatusText";
import SuspectInfo from "./WitchInfo";

interface Props {
  suspect?: PersonT;
  gameStatus: GameStatus;
  currentSelectionMode: SuspectSelectionMode;
  onSelectSelectionMode: (mode: SuspectSelectionMode) => void;
}

const ControlPanel = ({
  suspect,
  gameStatus: gameState,
  currentSelectionMode,
  onSelectSelectionMode,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`control-panel ui-panel ${
        isCollapsed ? "collapsed" : "expanded"
      }`}
    >
      <div className="info">
        {!isCollapsed && <StatusText state={gameState} />}
        {suspect && (
          <SuspectInfo
            suspect={suspect}
            revealColours={gameState !== GameStatus.InProgress}
            compact={isCollapsed}
          />
        )}
      </div>
      <SelectionModeControl
        currentMode={currentSelectionMode}
        onSelect={onSelectSelectionMode}
        compact={isCollapsed}
      />
      <Collapsor isCollapsed={isCollapsed} onToggle={toggleCollapse} />
    </div>
  );
};

export default ControlPanel;
