import { FaArrowRightLong } from "react-icons/fa6";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";
import Blue from "../../../common/colour/text/Blue";
import ColouredText from "../../../common/colour/text/ColouredText";
import Green from "../../../common/colour/text/Green";
import Red from "../../../common/colour/text/Red";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutColComplementary1 = ({}: Props) => {
  const exampleColour = ColourService.ColourFromHex("80e565");

  const legendOptions = {
    showLetterR: true,
    showLetterG: true,
    showLetterB: true,
    flavour: ColourFlavour.Percentage,
  };

  return (
    <div
      className="tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>
        The human eye can only see <Red>Red</Red>, <Green>Green</Green> and{" "}
        <Blue>Blue</Blue>, or <Red>R</Red>
        <Green>G</Green>
        <Blue>B</Blue> for short.
      </p>
      <p>All other colours are a mix of these primary colours.</p>
      <p>#HexDetective uses this RGB chart to visualise colour mixing:</p>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <div className="tutorial-chart-legend flex-col justify-between align-end">
            <p>
              Amount of R/G/B <FaArrowRightLong className="icon" />
            </p>
            <p>
              Bar chart
              <FaArrowRightLong className="icon" />
            </p>
            <p>
              Resulting Colour <FaArrowRightLong className="icon" />
            </p>
          </div>
          <BarChart colour={exampleColour} options={legendOptions} />
        </SimulationFrame>
      </div>
      <p>
        This colour looks{" "}
        <ColouredText colour={exampleColour} strong={true}>
          greenish
        </ColouredText>
        , because it has a lot more <Green>green</Green> in it than{" "}
        <Red>red</Red> or <Blue>blue</Blue>.
      </p>
      <p>
        Take a moment to familiarise yourself with the chart. You'll see it a
        lot.
      </p>
    </div>
  );
};

export default TutColComplementary1;
