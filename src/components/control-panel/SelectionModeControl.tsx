import SuspectSelectionMode from "../../enum/SuspectSelectionMode";
import Localise from "../common/Localise";

interface Props {
  currentMode: SuspectSelectionMode;
  onChange: (mode: SuspectSelectionMode) => void;
  disabled?: boolean;
  compact?: boolean;
}

const SelectionModeControl = ({
  currentMode,
  onChange,
  disabled = false,
  compact = false,
}: Props) => {
  return (
    <div
      className={`selection-mode ${currentMode} ${
        compact ? "compact" : "extended"
      } ${disabled ? "disabled" : "enabled"}`}
    >
      {!compact && (
        <label>
          <Localise>CONTROLBAR/RULEOUT/LBL_SELECTION_MODE</Localise>
        </label>
      )}
      <div className="button-group large">
        <button
          role="button"
          className={`rule-out large ${
            currentMode === SuspectSelectionMode.RuleOut ? "active" : "inactive"
          } ${disabled ? "disabled" : "enabled"}`}
          disabled={disabled || currentMode === SuspectSelectionMode.RuleOut}
          onClick={() => onChange(SuspectSelectionMode.RuleOut)}
        >
          <Localise>CONTROLBAR/RULEOUT/BTN_RULE_OUT</Localise>
        </button>
        <button
          role="button"
          className={`accuse large ${
            currentMode === SuspectSelectionMode.Accuse ? "active" : "inactive"
          } ${disabled ? "disabled" : "enabled"}`}
          disabled={disabled || currentMode === SuspectSelectionMode.Accuse}
          onClick={() => onChange(SuspectSelectionMode.Accuse)}
        >
          <Localise>CONTROLBAR/RULEOUT/BTN_ACCUSE</Localise>
        </button>
      </div>
    </div>
  );
};

export default SelectionModeControl;
