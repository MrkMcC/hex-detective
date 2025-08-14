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
import Localise from "../common/Localise";
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
            <Localise>CONTROLBAR/NAVIGATION/BTN_QUIT</Localise>
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
          <StatusText compact={isSummaryCollapsed} state={gameStatus} />
          {(gameStatus === GameStatus.Scored ||
            gameStatus === GameStatus.Failed ||
            gameStatus === GameStatus.GameOver) && (
            <RoundSummary
              difficulty={difficulty}
              gameStatus={gameStatus}
              settings={settings}
              sessionData={sessionData}
              roundData={roundData}
              onChangeSettings={onChangeSettings}
              onControlAction={onControlAction}
              isCollapsed={isSummaryCollapsed}
              suspectInfoOptions={suspectInfoOptions}
            />
          )}
          {suspect && (
            <SuspectInfo suspect={suspect} options={suspectInfoOptions} />
          )}
          <Collapsor
            isCollapsed={isSummaryCollapsed}
            onChange={setIsSummaryCollapsed}
            corner="top-right"
            label={isSummaryCollapsed ? "compare" : undefined}
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
    </div>
  );
};

export default ControlBar;
