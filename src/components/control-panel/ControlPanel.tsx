import { useState } from "react";
import PersonData from "../../classes/PersonData";
import GameStatus from "../../enum/GameStatus";
import SuspectSelectionMode from "../../enum/SuspectSelectionMode";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import Collapsor from "./Collapsor";
import RoundSummary from "./RoundSummary";
import SelectionModeControl from "./SelectionModeControl";
import StatusText from "./StatusText";
import SuspectInfo from "./SuspectInfo";

interface Props {
  suspect?: PersonData;
  accused?: PersonData;
  gameStatus: GameStatus;
  suspectInfoOptions: SuspectInfoOptionsT;
  currentSelectionMode: SuspectSelectionMode;
  onSelectSelectionMode: (mode: SuspectSelectionMode) => void;
}

const ControlPanel = ({
  suspect,
  accused,
  gameStatus,
  suspectInfoOptions,
  currentSelectionMode,
  onSelectSelectionMode,
}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="control-panel-container">
      <div
        className={`control-panel ui-panel ${gameStatus} ${
          isCollapsed ? "collapsed" : "expanded"
        }`}
      >
        {gameStatus === GameStatus.InProgress ? (
          <>
            <div className="info">
              {!isCollapsed && <StatusText state={gameStatus} />}
              {suspect && (
                <SuspectInfo
                  suspect={suspect}
                  options={{
                    compact: isCollapsed,
                    revealColours: gameStatus !== GameStatus.InProgress,
                    ...suspectInfoOptions,
                  }}
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
          </>
        ) : (
          <RoundSummary
            suspect={suspect!}
            accused={accused!}
            suspectInfoOptions={suspectInfoOptions}
          />
        )}
        <Collapsor isCollapsed={isCollapsed} onToggle={toggleCollapse} />
      </div>
    </div>
  );
};

export default ControlPanel;
