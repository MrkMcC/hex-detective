import { useState } from "react";
import GameStatus from "../../enum/GameStatus";
import WitchSelectionMode from "../../enum/WitchSelectionMode";
import PersonT from "../../types/PersonT";
import Collapsor from "./Collapsor";
import SelectionModeControl from "./SelectionModeControl";
import StatusText from "./StatusText";
import WitchInfo from "./WitchInfo";

interface Props {
  witch?: PersonT;
  gameStatus: GameStatus;
  currentSelectionMode: WitchSelectionMode;
  onSelectSelectionMode: (mode: WitchSelectionMode) => void;
}

const WitchControlPanel = ({
  witch,
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
        {witch && (
          <WitchInfo
            witch={witch}
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

export default WitchControlPanel;
