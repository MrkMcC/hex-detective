import { FaCheck, FaXmark } from "react-icons/fa6";
import PersonData from "../../classes/PersonData";
import ColourFlavour from "../../enum/ColourFlavour";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import BarChart from "../common/colour/BarChart";
import Person from "../Person";

interface Props {
  suspect: PersonData;
  accused: PersonData;
  suspectInfoOptions: SuspectInfoOptionsT;
}

const RoundSummary = ({ suspect, accused, suspectInfoOptions }: Props) => {
  const barChartOptions = {
    flavour: suspectInfoOptions.flavour ?? ColourFlavour.Hex,
  };

  const isCorrect = suspect.id === accused.id;

  return (
    <div className="grow round-summary flex-col align-center m-1">
      {isCorrect ? (
        <h2 className="m-0">
          <FaCheck className="icon color-green" /> Correct
        </h2>
      ) : (
        <h2 className="m-0">
          <FaXmark className="icon color-red" />
          Incorrect
        </h2>
      )}
      <div className="flex-row justify-between align-center">
        <div className="suspect-breakdown flex-row align-center">
          <div className="flex-col align-center">
            <Person person={suspect} />
            <p className="person-role mb-0">Suspect</p>
          </div>
          <div className="breakdown-charts flex-col gap-1">
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
        </div>
        {accused && !isCorrect && (
          <div className="accused-breakdown flex-row align-center">
            <div className="breakdown-charts flex-col gap-1">
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
              <p className="person-role mb-0">Accused</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoundSummary;
