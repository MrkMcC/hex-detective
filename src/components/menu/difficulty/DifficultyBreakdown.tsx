import DifficultyConfig from "../../../classes/DifficultyConfig";
import Localise from "../../../services/Localise";
import PersonService from "../../../services/PersonService";
import FunkyPanel from "../../common/FunkyPanel";
import Person from "../../Person";
import GradientRangeSlider from "./common/GradientRangeSlider";

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
    <FunkyPanel className="difficulty-breakdown gap-v-1">
      {difficulty ? (
        <>
          <h2 className="border-underline">
            {Localise.Text(`DIFFICULTY/${difficulty.key}`)}
          </h2>
          <h3 className="text-center">
            {Localise.Text(`DIFFICULTY/DESCRIPTION/${difficulty.key}`)}
          </h3>
          <div className="">
            <div className="flex-row difficulty-preview">{personElements}</div>
          </div>
          <div className="settings gap-v-1 text-center">
            <div className="setting-hue">
              Hue Bias: <br />
              <GradientRangeSlider
                className="grow"
                hsvProperty="hue"
                value={difficulty.parameters.colourGenerationBias.hue}
              />
            </div>
            <div className="setting-saturation">
              Saturation Range: <br />
              <GradientRangeSlider
                hsvProperty="saturation"
                value={difficulty.parameters.colourGenerationBias.saturation}
              />
            </div>
            <div>
              Value Range: <br />
              <GradientRangeSlider
                hsvProperty="value"
                value={difficulty.parameters.colourGenerationBias.value}
              />
            </div>
            <p>
              Crowd Size - initial: <br />
              {difficulty.parameters.crowdSizeInitial}
            </p>
            <p>
              Crowd Size - Increase per round: <br />
              {difficulty.parameters.crowdSizeInitial}
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
