import { FaCheck, FaXmark } from "react-icons/fa6";
import PersonData from "../../../classes/PersonData";
import ColourFlavour from "../../../enum/ColourFlavour";
import SuspectInfoOptionsT from "../../../types/components/SuspectInfoOptionsT";
import BarChart from "../../colour/BarChart";
import Person from "../../Person";

interface Props {
  suspect: PersonData;
  accused: PersonData;
  suspectInfoOptions: SuspectInfoOptionsT;
}

const RoundSummary = ({ suspect, accused, suspectInfoOptions }: Props) => {
  const barChartOptions = {
    flavour: suspectInfoOptions.flavour ?? ColourFlavour.Hex,
  };

  return (
    <div className="flex-col align-center">
      {suspect.id === accused.id ? (
        <h2>
          <FaCheck className="icon color-green" /> Correct
        </h2>
      ) : (
        <h2>
          <FaXmark className="icon color-red" />
          Incorrect
        </h2>
      )}
      <div className="flex-row  align-center">
        <div className="flex-col align-center">
          <Person person={suspect} />
          <p>Suspect</p>
        </div>
        <div className="flex-col gap-1">
          <BarChart
            name="hat"
            colour={suspect.colours.hat}
            options={barChartOptions}
          />
          <BarChart
            name="shirt"
            colour={suspect.colours.shirt}
            options={barChartOptions}
          />
          <BarChart
            name="pants"
            colour={suspect.colours.pants}
            options={barChartOptions}
          />
        </div>
        {accused && (
          <>
            <div className="flex-col gap-1">
              <BarChart
                name="hat"
                colour={accused.colours.hat}
                options={barChartOptions}
              />
              <BarChart
                name="shirt"
                colour={accused.colours.shirt}
                options={barChartOptions}
              />
              <BarChart
                name="pants"
                colour={accused.colours.pants}
                options={barChartOptions}
              />
            </div>
            <div className="flex-col align-center">
              <Person person={accused} />
              <p>Accused</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RoundSummary;
