import SuspectSelectionMode from "../../enum/SuspectSelectionMode";

interface Props {
  currentMode: SuspectSelectionMode;
  onChange: (mode: SuspectSelectionMode) => void;
  compact?: boolean;
}

const SelectionModeControl = ({
  currentMode,
  onChange,
  compact = false,
}: Props) => {
  return (
    <div
      className={`selection-mode ${currentMode} ${
        compact ? "compact" : "extended"
      }`}
    >
      {!compact && <p>Selection Mode</p>}
      <div className="button-group large">
        <button
          role="button"
          className={`rule-out large ${
            currentMode === SuspectSelectionMode.RuleOut ? "active" : "inactive"
          }`}
          disabled={currentMode === SuspectSelectionMode.RuleOut}
          onClick={() => onChange(SuspectSelectionMode.RuleOut)}
        >
          Rule out
        </button>
        <button
          role="button"
          className={`accuse large ${
            currentMode === SuspectSelectionMode.Accuse ? "active" : "inactive"
          }`}
          disabled={currentMode === SuspectSelectionMode.Accuse}
          onClick={() => onChange(SuspectSelectionMode.Accuse)}
        >
          ACCUSE
        </button>
      </div>
    </div>
  );
};

export default SelectionModeControl;
