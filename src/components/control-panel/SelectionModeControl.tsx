import SuspectSelectionMode from "../../enum/SuspectSelectionMode";

interface Props {
  currentMode: SuspectSelectionMode;
  onSelect: (mode: SuspectSelectionMode) => void;
  compact: boolean;
}

const SelectionModeControl = ({ currentMode, onSelect, compact }: Props) => {
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
          className={`rule-out ${
            currentMode === SuspectSelectionMode.RuleOut ? "active" : "inactive"
          }`}
          disabled={currentMode === SuspectSelectionMode.RuleOut}
          onClick={() => onSelect(SuspectSelectionMode.RuleOut)}
        >
          Rule out
        </button>
        <button
          role="button"
          className={`accuse ${
            currentMode === SuspectSelectionMode.Accuse ? "active" : "inactive"
          }`}
          disabled={currentMode === SuspectSelectionMode.Accuse}
          onClick={() => onSelect(SuspectSelectionMode.Accuse)}
        >
          ACCUSE
        </button>
      </div>
      {!compact && (
        <div className="description">
          <p className="rule-out">
            Click on people who DO NOT fit the description to rule them out
          </p>
          <p className="accuse">Found the suspect? Click on them!</p>
        </div>
      )}
    </div>
  );
};

export default SelectionModeControl;
