import { FaEye, FaEyeSlash, FaRepeat } from "react-icons/fa6";
import ControlAction from "../../enum/ControlAction";
import RoundDataT from "../../types/RoundDataT";

interface Props {
  roundData: RoundDataT;
  disableAll?: boolean;
  onControlAction: (action: ControlAction) => void;
}

const RuleOutControls = ({ roundData, disableAll, onControlAction }: Props) => {
  const handleResetRuledOut = () => {
    if (confirm("Rule everyone back in?"))
      onControlAction(ControlAction.ResetRuledOut);
  };

  return (
    <div className="btn-group-ruled-out flex-row gap-mini">
      <button
        onClick={() => onControlAction(ControlAction.HideRuledOut)}
        disabled={
          disableAll ||
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
        disabled={disableAll || roundData.crowd?.people.every((p) => !p.hidden)}
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
          disableAll || roundData.crowd?.people.every((p) => !p.ruledOut)
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
  );
};

export default RuleOutControls;
