import { FaEye, FaEyeSlash, FaRepeat } from "react-icons/fa6";
import ControlAction from "../../enum/ControlAction";
import GameStatus from "../../enum/GameStatus";
import RoundDataT from "../../types/RoundDataT";
import Localise from "../common/Localise";

interface Props {
  gameStatus: GameStatus;
  roundData: RoundDataT;
  onControlAction: (action: ControlAction) => void;
}

const RuleOutControls = ({ gameStatus, roundData, onControlAction }: Props) => {
  const handleResetRuledOut = () => {
    if (confirm("Rule everyone back in?"))
      onControlAction(ControlAction.ResetRuledOut);
  };

  return (
    <div className="btn-group-ruled-out flex-row gap-mini">
      <button
        onClick={() => onControlAction(ControlAction.HideRuledOut)}
        disabled={roundData.crowd?.people.every((p) => !p.ruledOut || p.hidden)}
      >
        <FaEyeSlash className="icon" />
        <span>
          <Localise>CONTROLBAR/RULEOUT/BTN_HIDE</Localise>
        </span>
      </button>
      <button
        onClick={() => onControlAction(ControlAction.UnhideAll)}
        disabled={roundData.crowd?.people.every((p) => !p.hidden)}
      >
        <FaEye className="icon" />
        <span>
          <Localise>CONTROLBAR/RULEOUT/BTN_UNHIDE</Localise>
        </span>
      </button>
      <button
        onClick={handleResetRuledOut}
        disabled={
          gameStatus !== GameStatus.InProgress ||
          roundData.crowd?.people.every((p) => !p.ruledOut)
        }
      >
        <FaRepeat className="icon" />
        <span>
          <Localise>CONTROLBAR/RULEOUT/BTN_RESET</Localise>
        </span>
      </button>
    </div>
  );
};

export default RuleOutControls;
