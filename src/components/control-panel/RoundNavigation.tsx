import { nanoid } from "nanoid";
import { FaCircleArrowRight, FaRepeat } from "react-icons/fa6";
import UserSettings from "../../classes/UserSettings";
import ControlAction from "../../enum/ControlAction";
import GameStatus from "../../enum/GameStatus";
import SessionDataT from "../../types/SessionDataT";
import AutoButton from "../common/AutoButton";
import Switch from "../common/Switch";

interface Props {
  gameStatus: GameStatus;
  settings: UserSettings;
  sessionData: SessionDataT;
  onChangeSettings: (settings: UserSettings) => void;
  onControlAction: (action: ControlAction) => void;
}

const RoundNavigation = ({
  gameStatus,
  settings,
  sessionData,
  onChangeSettings,
  onControlAction,
}: Props) => {
  const switchId = nanoid();

  const handleChangeAutoContinue = (value: boolean) => {
    onChangeSettings(
      new UserSettings({ ...settings.parameters, autoContinue: value })
    );
  };

  return (
    <div className="round-navigation">
      <button
        className={`btn-restart large ${
          gameStatus === GameStatus.Failed ? "shown" : "hidden"
        }`}
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
      <AutoButton
        className={`btn-next-round large ${
          gameStatus === GameStatus.Scored ? "shown" : "hidden"
        }`}
        onClick={() => onControlAction(ControlAction.NextRound)}
        disabled={gameStatus !== GameStatus.Scored}
        autoClickMs={settings.parameters.autoContinue ? 2000 : undefined}
      >
        Continue <FaCircleArrowRight className="icon" />
      </AutoButton>

      <div className="area-auto-continue">
        <Switch
          id={switchId}
          value={settings.parameters.autoContinue}
          onChange={handleChangeAutoContinue}
        />
        <label htmlFor={switchId}>auto continue</label>
      </div>
    </div>
  );
};

export default RoundNavigation;
