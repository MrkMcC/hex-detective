import SuspectSelectionMode from "../../enum/SuspectSelectionMode";

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
      {!compact && <label>Selection Mode</label>}
      <div className="button-group large">
        <button
          role="button"
          className={`rule-out large ${
            currentMode === SuspectSelectionMode.RuleOut ? "active" : "inactive"
          } ${disabled ? "disabled" : "enabled"}`}
          disabled={disabled || currentMode === SuspectSelectionMode.RuleOut}
          onClick={() => onChange(SuspectSelectionMode.RuleOut)}
        >
          Rule out
        </button>
        <button
          role="button"
          className={`accuse large ${
            currentMode === SuspectSelectionMode.Accuse ? "active" : "inactive"
          } ${disabled ? "disabled" : "enabled"}`}
          disabled={disabled || currentMode === SuspectSelectionMode.Accuse}
          onClick={() => onChange(SuspectSelectionMode.Accuse)}
        >
          ACCUSE
        </button>
      </div>
    </div>
  );
};

export default SelectionModeControl;
