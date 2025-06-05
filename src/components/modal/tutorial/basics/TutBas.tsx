import { useState } from "react";
import PersonData from "../../../../classes/PersonData";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourPresets from "../../../../helper/ColourPresets";
import Localise from "../../../common/Localise";
import SuspectInfo from "../../../control-panel/SuspectInfo";
import Person from "../../../Person";
import SimulationFrame from "../SimulationFrame";
import TutorialTask from "../TutorialTask";

const suspect = new PersonData(
  ColourPresets.Red,
  ColourPresets.Green,
  ColourPresets.Blue,
  ColourPresets.Grey
);
suspect.variations = { hat: 1, eyes: 3, mouth: 9, shirt: 1, pants: 1 };

const TutBasScoring = () => {
  const [hasSelectedSuspect, setHasSelectedSuspect] = useState(false);

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise tooltips={true}>
          TUTORIAL/BASICS/SCORING/PAGE_1/P_1_GOAL
        </Localise>
      </p>
      <TutorialTask completed={hasSelectedSuspect}>
        <Localise>TUTORIAL/BASICS/SCORING/PAGE_1/P_2_TASK</Localise>
      </TutorialTask>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <SuspectInfo
            suspect={suspect}
            options={{ flavour: ColourFlavour.Name }}
          />
          <Person
            person={suspect}
            onSelect={() => setHasSelectedSuspect(true)}
          />
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutBasScoring;
