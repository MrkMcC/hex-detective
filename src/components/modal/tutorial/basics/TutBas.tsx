import { useState } from "react";
import PersonData from "../../../../classes/PersonData";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourPresets from "../../../../helper/ColourPresets";
import SuspectInfo from "../../../control-panel/SuspectInfo";
import Person from "../../../Person";
import SimulationFrame from "../SimulationFrame";
import TutorialTask from "../TutorialTask";

interface Props {}

const suspect = new PersonData(
  ColourPresets.Red,
  ColourPresets.Green,
  ColourPresets.Blue,
  ColourPresets.Grey
);
suspect.variations = { hat: 1, eyes: 3, mouth: 9, shirt: 1, pants: 1 };

const TutBasScoring = ({}: Props) => {
  const [hasSelectedSuspect, setHasSelectedSuspect] = useState(false);

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>The goal is to find people by the colour of their clothes.</p>
      <TutorialTask completed={hasSelectedSuspect}>
        Read the description of the suspect, then click on them.
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
