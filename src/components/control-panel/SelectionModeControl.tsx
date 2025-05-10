import WitchSelectionMode from "../../enum/WitchSelectionMode";

interface Props {
  currentMode: WitchSelectionMode;
  onSelect: (mode: WitchSelectionMode) => void;
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
            currentMode === WitchSelectionMode.RuleOut ? "active" : "inactive"
          }`}
          disabled={currentMode === WitchSelectionMode.RuleOut}
          onClick={() => onSelect(WitchSelectionMode.RuleOut)}
        >
          Rule out
        </button>
        <button
          role="button"
          className={`accuse ${
            currentMode === WitchSelectionMode.Accuse ? "active" : "inactive"
          }`}
          disabled={currentMode === WitchSelectionMode.Accuse}
          onClick={() => onSelect(WitchSelectionMode.Accuse)}
        >
          ACCUSE
        </button>
      </div>
      {!compact && (
        <div className="description">
          <p className="rule-out">
            Click on people who DO NOT fit the description to rule them out
          </p>
          <p className="accuse">Found the witch? Click on them!</p>
        </div>
      )}
    </div>
  );
};

export default SelectionModeControl;
