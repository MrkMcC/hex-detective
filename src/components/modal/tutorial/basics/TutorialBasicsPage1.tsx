import PersonData from "../../../../classes/PersonData";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourPresets from "../../../../helper/ColourPresets";
import SuspectInfo from "../../../control-panel/SuspectInfo";
import Person from "../../../Person";

interface Props {}

const TutorialBasicsPage1 = ({}: Props) => {
  const suspect = new PersonData(
    ColourPresets.Red,
    ColourPresets.Green,
    ColourPresets.Blue,
    ColourPresets.Grey
  );

  suspect.variations = { hat: 1, eyes: 3, mouth: 9, shirt: 1, pants: 1 };

  return (
    <div className="hex-tutorial font-sans-serif text-center">
      <p>The goal is to find people by the colour of their clothes.</p>
      <p>
        Read the description of the suspect, then click on the right person.
      </p>
      <div className="flex-row justify-center">
        <div className="flex-row justify-center border p-1">
          <SuspectInfo
            suspect={suspect}
            options={{ flavour: ColourFlavour.Name }}
          />
          <Person person={suspect} />
        </div>
      </div>
    </div>
  );
};

export default TutorialBasicsPage1;
