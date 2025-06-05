import { FaArrowRightLong } from "react-icons/fa6";
import ColourFlavour from "../../../../enum/ColourFlavour";
import ColourService from "../../../../services/ColourService";
import BarChart from "../../../common/colour/BarChart";
import Blue from "../../../common/colour/text/Blue";
import ColouredText from "../../../common/colour/text/ColouredText";
import Green from "../../../common/colour/text/Green";
import Red from "../../../common/colour/text/Red";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutColComplementary1 = () => {
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
        <Localise
          replacements={[
            <Red key="red">
              <Localise>COLOURS/RED</Localise>
            </Red>,
            <Green key="green">
              <Localise>COLOURS/GREEN</Localise>
            </Green>,
            <Blue key="blue">
              <Localise>COLOURS/BLUE</Localise>
            </Blue>,
            <>
              <Red>R</Red>
              <Green>G</Green>
              <Blue>B</Blue>
            </>,
          ]}
        >
          TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/P_1_RGB
        </Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/P_2</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/P_3</Localise>
      </p>
      <div className="flex-row justify-center">
        <SimulationFrame>
          <div className="tutorial-chart-legend flex-col justify-between align-end">
            <p>
              <Localise>
                TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/LBL_AMOUNTS
              </Localise>
              <FaArrowRightLong className="icon" />
            </p>
            <p>
              <Localise>
                TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/LBL_BAR_CHART
              </Localise>
              <FaArrowRightLong className="icon" />
            </p>
            <p>
              <Localise>
                TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/LBL_RESULT
              </Localise>
              <FaArrowRightLong className="icon" />
            </p>
          </div>
          <BarChart colour={exampleColour} options={legendOptions} />
        </SimulationFrame>
      </div>
      <p>
        <Localise
          replacements={[
            <ColouredText colour={exampleColour} strong={true}>
              greenish
            </ColouredText>,
            <Green>
              <Localise>COLOURS/GREEN</Localise>
            </Green>,
            <Red>
              <Localise>COLOURS/Red</Localise>
            </Red>,
            <Blue>
              <Localise>COLOURS/Blue</Localise>
            </Blue>,
          ]}
        >
          TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/P_4_GREENISH
        </Localise>
      </p>
      <p>
        <Localise>TUTORIAL/COLOURS/COMPLEMENTARY/PAGE_1/P_5</Localise>
      </p>
    </div>
  );
};

export default TutColComplementary1;
