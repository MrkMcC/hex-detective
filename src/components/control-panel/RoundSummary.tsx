import PersonData from "../../classes/PersonData";
import ColourFlavour from "../../enum/ColourFlavour";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import BarChart from "../common/colour/BarChart";
import Person from "../Person";
import Collapsor from "./Collapsor";

interface Props {
  isCollapsed: boolean;
  onChangeCollapsed: (collapsed: boolean) => void;
  suspect: PersonData;
  accused: PersonData;
  suspectInfoOptions: SuspectInfoOptionsT;
}

const RoundSummary = ({
  isCollapsed,
  onChangeCollapsed,
  suspect,
  accused,
  suspectInfoOptions,
}: Props) => {
  const barChartOptions = {
    flavour: suspectInfoOptions.flavour ?? ColourFlavour.Hex,
  };

  const isCorrect = suspect.id === accused.id;

  return (
    <div
      className={`round-summary ui-panel flex-col align-center ${
        isCollapsed ? "collapsed" : "expanded"
      } ${isCorrect ? "border-green" : "border-red"}`}
    >
      <div className="flex-row justify-between align-center">
        {accused && !isCorrect && (
          <div className="accused-breakdown flex-row align-center">
            <div className="flex-col align-center">
              <Person person={accused} />
              <p className="person-role text-contrast mb-0">accused</p>
            </div>
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
          </div>
        )}
        <div className="suspect-breakdown flex-row align-center">
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
          <div className="flex-col align-center">
            <Person person={suspect} />
            <p className="person-role text-contrast mb-0">suspect</p>
          </div>
        </div>
      </div>
      <Collapsor
        isCollapsed={isCollapsed}
        onChange={onChangeCollapsed}
        corner="top-right"
      />
    </div>
  );
};

export default RoundSummary;
