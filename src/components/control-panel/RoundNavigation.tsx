import { nanoid } from "nanoid";
import { FaCircleArrowRight, FaRepeat } from "react-icons/fa6";
import UserSettings from "../../classes/UserSettings";
import ControlAction from "../../enum/ControlAction";
import GameStatus from "../../enum/GameStatus";
import SessionDataT from "../../types/SessionDataT";
import AutoButton from "../common/AutoButton";
import Localise from "../common/Localise";
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
          gameStatus === GameStatus.GameOver ? "shown" : "hidden"
        }`}
        onClick={() => onControlAction(ControlAction.Restart)}
      >
        {sessionData.tutorialProgress === null ? (
          <Localise>CONTROLBAR/NAVIGATION/BTN_PLAY_AGAIN</Localise>
        ) : (
          <Localise>CONTROLBAR/NAVIGATION/BTN_TRY_AGAIN</Localise>
        )}{" "}
        <FaRepeat className="icon" />
      </button>
      <AutoButton
        className={`btn-next-round large ${
          gameStatus !== GameStatus.InProgress &&
          gameStatus !== GameStatus.GameOver
            ? "shown"
            : "hidden"
        }`}
        onClick={() => onControlAction(ControlAction.NextRound)}
        disabled={gameStatus === GameStatus.GameOver}
        autoClickMs={
          gameStatus === GameStatus.Scored && settings.parameters.autoContinue
            ? 2000
            : undefined
        }
      >
        <Localise>CONTROLBAR/NAVIGATION/BTN_CONTINUE</Localise>{" "}
        <FaCircleArrowRight className="icon" />
      </AutoButton>

      <div className="area-auto-continue">
        <Switch
          id={switchId}
          value={settings.parameters.autoContinue}
          onChange={handleChangeAutoContinue}
        />
        <label htmlFor={switchId}>
          <Localise>CONTROLBAR/NAVIGATION/LBL_AUTO_CONTINUE</Localise>
        </label>
      </div>
    </div>
  );
};

export default RoundNavigation;
