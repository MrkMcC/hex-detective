import { useState } from "react";
import SuspectSelectionMode from "../../../../enum/SuspectSelectionMode";
import Localise from "../../../common/Localise";
import SelectionModeControl from "../../../control-panel/SelectionModeControl";
import SimulationFrame from "../SimulationFrame";
import TutorialTask from "../TutorialTask";

const TutBasRuleOut = () => {
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
      <p>
        <Localise>TUTORIAL/BASICS/RULEOUT/PAGE_1/P_1</Localise>
      </p>
      <p>
        <Localise tooltips={true}>TUTORIAL/BASICS/RULEOUT/PAGE_1/P_2</Localise>
      </p>
      <TutorialTask completed={taskCompleted}>
        <Localise>TUTORIAL/BASICS/RULEOUT/PAGE_1/P_3_TASK</Localise>
      </TutorialTask>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <SelectionModeControl
            currentMode={selectionMode}
            onChange={handleSelectSelectionMode}
          />
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutBasRuleOut;
