import {
  FaCaretLeft,
  FaCircleArrowRight,
  FaEye,
  FaEyeSlash,
  FaRepeat,
} from "react-icons/fa6";
import UserSettings from "../../classes/UserSettings";
import ControlAction from "../../enum/ControlAction";
import GameStatus from "../../enum/GameStatus";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import RoundDataT from "../../types/RoundDataT";
import SessionDataT from "../../types/SessionDataT";
import AutoButton from "../common/AutoButton";
import Switch from "../common/Switch";
import ControlPanel from "./ControlPanel";
import HighScore from "./HighScore";

interface Props {
  gameStatus: GameStatus;
  settings: UserSettings;
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
  sessionData,
  roundData,
  suspectInfoOptions,
  onControlAction,
  onChangeSettings,
  onChangeRoundData,
}: Props) => {
  //#region Shorthand Variables
  const isRoundInProgress = gameStatus === GameStatus.InProgress;
  //#endregion

  //#region Event Handling
  const handleQuit = () => {
    if (
      gameStatus === GameStatus.InProgress ||
      gameStatus === GameStatus.Scored ||
      confirm(
        "You are about to quit the game. Your current progress will be lost."
      )
    )
      onControlAction(ControlAction.QuitSession);
  };

  const handleResetRuledOut = () => {
    if (confirm("Rule everyone back in?"))
      onControlAction(ControlAction.ResetRuledOut);
  };
  //#endregion

  return (
    <div className="control-bar flex-row justify-between">
      <div className="bottom-left flex-row justify-between align-start">
        <button className="btn-main-menu" onClick={handleQuit}>
          <FaCaretLeft className="icon" />
          Back to Menu
        </button>
        <HighScore sessionData={sessionData} />
      </div>
      <ControlPanel
        gameStatus={gameStatus}
        suspectInfoOptions={suspectInfoOptions}
        currentSelectionMode={roundData.selectionMode}
        onChangeSelectionMode={(mode) =>
          onChangeRoundData({ ...roundData, selectionMode: mode })
        }
        suspect={roundData.crowd?.getSuspect()}
        accused={roundData.crowd?.getPersonById(roundData.accusedPersonId)}
      />
      <div className="bottom-right flex-row justify-start">
        <div className="flex-col justify-center align-stretch">
          <div className="btn-group-ruled-out flex-row gap-mini">
            <button
              onClick={() => onControlAction(ControlAction.HideRuledOut)}
              disabled={
                !isRoundInProgress ||
                roundData.crowd?.people.every((p) => !p.ruledOut || p.hidden)
              }
            >
              <FaEyeSlash className="icon" />
              <span>
                Hide
                <br />
                ruled out
              </span>
            </button>
            <button
              onClick={() => onControlAction(ControlAction.UnhideAll)}
              disabled={
                !isRoundInProgress ||
                roundData.crowd?.people.every((p) => !p.hidden)
              }
            >
              <FaEye className="icon" />
              <span>
                Unhide
                <br />
                ruled out
              </span>
            </button>
            <button
              onClick={handleResetRuledOut}
              disabled={
                !isRoundInProgress ||
                roundData.crowd?.people.every((p) => !p.ruledOut)
              }
            >
              <FaRepeat className="icon" />
              <span>
                Reset
                <br />
                ruled out
              </span>
            </button>
          </div>
        </div>
        <div className="flex-col justify-center">
          {gameStatus === GameStatus.Scored && (
            <AutoButton
              className="btn-next-round large"
              onClick={() => onControlAction(ControlAction.NextRound)}
              autoClickMs={settings.parameters.autoContinue ? 2000 : undefined}
            >
              Continue <FaCircleArrowRight className="icon" />
            </AutoButton>
          )}
          <Switch
            value={settings.parameters.autoContinue}
            onChange={(value) =>
              onChangeSettings(
                new UserSettings({
                  ...settings.parameters,
                  autoContinue: value,
                })
              )
            }
          />
          <label>Auto-continue</label>
          {gameStatus === GameStatus.Failed && (
            <button
              className="large"
              onClick={() => onControlAction(ControlAction.Restart)}
            >
              {sessionData.tutorialProgress === null ? (
                <>
                  Play again <FaRepeat className="icon" />
                </>
              ) : (
                <>
                  Continue <FaCircleArrowRight className="icon" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
