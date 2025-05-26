import DifficultyConfig from "../../../classes/DifficultyConfig";
import IncrementBias from "../../../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../../../enum/colour-generation-bias/SaturationBias";
import ValueBias from "../../../enum/colour-generation-bias/ValueBias";
import Localise from "../../../services/Localise";
import PersonService from "../../../services/PersonService";
import FunkyPanel from "../../common/FunkyPanel";
import Person from "../../Person";
import HueBiasOptions from "./HueBiasOptions";

interface Props {
  difficulty?: DifficultyConfig;
}

const DifficultyBreakdown = ({ difficulty }: Props) => {
  const crowd = PersonService.RandomCrowd(
    5,
    difficulty?.parameters.colourGenerationBias
  );
  const personElements = crowd.people.map((p) => (
    <Person key={p.id} person={p} />
  ));

  return (
    <FunkyPanel className="difficulty-breakdown">
      {difficulty ? (
        <>
          <h2 className="border-underline">
            {Localise.Text(`difficulty_${difficulty.key}`)}
          </h2>
          <h3 className="text-center">
            {Localise.Text(`difficulty-description_${difficulty.key}`)}
          </h3>
          <div className="">
            <div className="flex-row difficulty-preview">{personElements}</div>
          </div>
          <div className="text-center">
            <div>
              Hue Bias: <br />
              <HueBiasOptions
                value={
                  difficulty.parameters.colourGenerationBias.hueDifferenceBias
                }
              />
            </div>
            <p>
              Saturation Bias: <br />
              {
                Object.values(SaturationBias)[
                  difficulty.parameters.colourGenerationBias.saturationBias
                ]
              }
            </p>
            <p>
              Value Bias: <br />
              {
                Object.values(ValueBias)[
                  difficulty.parameters.colourGenerationBias.valueBias
                ]
              }
            </p>
            <p>
              Crowd Size - initial: <br />
              {difficulty.parameters.crowdSizeInitial}
            </p>
            <p>
              Crowd Size - Increase per round: <br />
              {difficulty.parameters.crowdSizeInitial}
            </p>
            <p>
              Increment: <br />
              {
                Object.values(IncrementBias)[
                  difficulty.parameters.colourGenerationBias.incrementBias
                ]
              }
            </p>
          </div>
        </>
      ) : (
        <>
          <h3>The dress code determines the game's difficulty.</h3>
          <p>Select one to see more information.</p>
        </>
      )}
    </FunkyPanel>
  );
};

export default DifficultyBreakdown;
