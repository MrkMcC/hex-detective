import Colour from "../../../../classes/Colour";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourPresets from "../../../../helper/ColourPresets";
import BarChart from "../../../common/colour/BarChart";
import Localise from "../../../common/Localise";

const TutColPercNotation = () => {
  const percentageOptions = {
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/COLOURS/PERCNOTATION/PAGE_1/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/PERCNOTATION/PAGE_1/P_2</Localise>
      </p>
      <div className="flex-row justify-center">
        <BarChart colour={ColourPresets.Blue} options={percentageOptions} />
      </div>
      <p>
        <Localise>TUTORIAL/COLOURS/PERCNOTATION/PAGE_1/P_3</Localise>
      </p>
      <div className="flex-row justify-center">
        <BarChart
          colour={new Colour(128, 128, 0)}
          options={percentageOptions}
        />
      </div>
      <p>
        <Localise>TUTORIAL/COLOURS/PERCNOTATION/PAGE_1/P_4</Localise>
      </p>
    </div>
  );
};

export default TutColPercNotation;
