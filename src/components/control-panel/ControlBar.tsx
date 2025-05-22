import { useState } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import DifficultyConfig from "../../classes/DifficultyConfig";
import UserSettings from "../../classes/UserSettings";
import ControlAction from "../../enum/ControlAction";
import GameStatus from "../../enum/GameStatus";
import SuspectSelectionMode from "../../enum/SuspectSelectionMode";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import RoundDataT from "../../types/RoundDataT";
import SessionDataT from "../../types/SessionDataT";
import Collapsor from "./Collapsor";
import RoundNavigation from "./RoundNavigation";
import RoundSummary from "./RoundSummary";
import RuleOutControls from "./RuleOutControls";
import SelectionModeControl from "./SelectionModeControl";
import SessionInfo from "./SessionInfo";
import StatusText from "./StatusText";
import SuspectInfo from "./SuspectInfo";

interface Props {
  gameStatus: GameStatus;
  settings: UserSettings;
  difficulty: DifficultyConfig;
  sessionData: SessionDataT;
  roundData: RoundDataT;
  suspectInfoOptions: SuspectInfoOptionsT;
  onControlAction: (action: ControlAction) => void;
  onChangeSettings: (data: UserSettings) => void;
  onChangeRoundData: (data: RoundDataT) => void;
}

const ControlBar = ({
  gameStatus,
  settings,
  difficulty,
  sessionData,
  roundData,
  suspectInfoOptions,
  onControlAction,
  onChangeSettings,
  onChangeRoundData,
}: Props) => {
  const [isSummaryCollapsed, setIsSummaryCollapsed] = useState(false);

  //#region Shorthand Variables
  const suspect = roundData.crowd?.getSuspect();
  //#endregion

  //#region Event Handling
  const handleQuit = () => {
    if (
      gameStatus === GameStatus.Failed ||
      confirm(
        "You are about to quit the game. Your current progress will be lost."
      )
    )
      onControlAction(ControlAction.QuitSession);
  };

  const handleChangeSelectionMode = (mode: SuspectSelectionMode) => {
    onChangeRoundData({ ...roundData, selectionMode: mode });
  };
  //#endregion

  return (
    <div className="control-bar flex-row justify-between">
      <div className="area-left">
        <div className="area-menu">
          {/* there's nothing to set yet */}
          <button className="hidden">Settings</button>
          <button className="btn-main-menu" onClick={handleQuit}>
            <FaCaretLeft className="icon" />
            Back to Menu
          </button>
        </div>
        <div className="area-session-data">
          <SessionInfo
            difficulty={difficulty}
            sessionData={sessionData}
            roundData={roundData}
          />
        </div>
      </div>
      <div className="area-center">
        <div
          className={`area-suspect-info ui-panel ${
            gameStatus === GameStatus.Scored ? "border-green" : "border-red"
          }`}
        >
          <StatusText state={gameStatus} />
          {suspect && (
            <SuspectInfo suspect={suspect} options={suspectInfoOptions} />
          )}
          <Collapsor
            isCollapsed={isSummaryCollapsed}
            onChange={setIsSummaryCollapsed}
            corner="top-right"
            label="compare"
          />
        </div>
      </div>
      <div className="area-right">
        <div className="area-rule-out">
          <SelectionModeControl
            currentMode={roundData.selectionMode}
            onChange={handleChangeSelectionMode}
            disabled={gameStatus !== GameStatus.InProgress}
          />
          <RuleOutControls
            gameStatus={gameStatus}
            roundData={roundData}
            onControlAction={onControlAction}
          />
        </div>
        <div className="area-round-navigation">
          <div className="round-navigation">
            <RoundNavigation
              gameStatus={gameStatus}
              settings={settings}
              sessionData={sessionData}
              onChangeSettings={onChangeSettings}
              onControlAction={onControlAction}
            />
          </div>
        </div>
      </div>
      {(gameStatus === GameStatus.Scored ||
        gameStatus === GameStatus.Failed) && (
        <RoundSummary
          isCollapsed={isSummaryCollapsed}
          onChangeCollapsed={setIsSummaryCollapsed}
          suspect={roundData.crowd!.getSuspect()!}
          accused={roundData.crowd?.getPersonById(roundData.accusedPersonId)!}
          suspectInfoOptions={suspectInfoOptions}
        />
      )}
    </div>
  );
};

export default ControlBar;
