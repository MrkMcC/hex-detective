import { useState } from "react";
import SuspectSelectionMode from "../../../../enum/SuspectSelectionMode";
import SelectionModeControl from "../../../control-panel/SelectionModeControl";
import SimulationFrame from "../SimulationFrame";
import TutorialTask from "../TutorialTask";

interface Props {}

const TutBasRuleOut = ({}: Props) => {
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [selectionMode, setSelectionMode] = useState(
    SuspectSelectionMode.Accuse
  );

  const handleSelectSelectionMode = (mode: SuspectSelectionMode) => {
    setSelectionMode(mode);
    setTaskCompleted(true);
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>It can be hard to keep track of all the colours in a large crowd.</p>
      <p>You can rule out people to make your target easier to spot.</p>
      <TutorialTask completed={taskCompleted}>
        Try clicking on "Rule out".
      </TutorialTask>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <SelectionModeControl
            currentMode={selectionMode}
            onSelect={handleSelectSelectionMode}
          />
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutBasRuleOut;
