import DifficultyConfig from "../../../classes/DifficultyConfig";
import ArrayHelper from "../../../helper/ArrayHelper";
import PersonService from "../../../services/PersonService";
import FunkyPanel from "../../common/FunkyPanel";
import Localise from "../../common/Localise";
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

  //Move suspect to the center
  ArrayHelper.MoveElement(
    crowd.people,
    crowd.people.findIndex((p) => p.id === crowd.suspectId),
    Math.floor((crowd.people.length - 1) / 2)
  );

  const personElements = crowd.people.map((p) => (
    <Person
      key={p.id}
      person={p}
      isRevealedSuspect={crowd.suspectId === p.id}
    />
  ));

  return (
    <FunkyPanel className="difficulty-breakdown gap-v-1">
      {difficulty ? (
        <>
          <h2 className="border-underline">
            <Localise>DIFFICULTY/{difficulty.key}/NAME</Localise>
          </h2>
          <h3 className="text-center">
            <Localise>DIFFICULTY/{difficulty.key}/DESCRIPTION</Localise>
          </h3>
          <div className="">
            <div className="flex-row difficulty-preview">{personElements}</div>
          </div>
          <div className="settings gap-v-1 text-center">
            <div className="setting-hue">
              <Localise tooltips={true}>MAIN/BREAKDOWN/LBL_BIAS_HUE</Localise>{" "}
              <GradientRangeSlider
                className="grow"
                hsvProperty="hue"
                value={difficulty.parameters.colourGenerationBias.hue}
              />
            </div>
            <div className="setting-saturation">
              <Localise tooltips={true}>
                MAIN/BREAKDOWN/LBL_BIAS_SATURATION
              </Localise>
              <br />
              <GradientRangeSlider
                hsvProperty="saturation"
                value={difficulty.parameters.colourGenerationBias.saturation}
              />
            </div>
            <div>
              <Localise tooltips={true}>MAIN/BREAKDOWN/LBL_BIAS_VALUE</Localise>{" "}
              <br />
              <GradientRangeSlider
                hsvProperty="value"
                value={difficulty.parameters.colourGenerationBias.value}
              />
            </div>
            <p>
              <Localise tooltips={true}>
                MAIN/BREAKDOWN/LBL_CROWD_SIZE_INITIAL
              </Localise>
              <br />
              {difficulty.parameters.crowdSizeInitial}
            </p>
            <p>
              <Localise tooltips={true}>
                MAIN/BREAKDOWN/LBL_CROWD_SIZE_INCREMENT
              </Localise>
              <br />
              {difficulty.parameters.crowdSizeInitial}
            </p>
          </div>
        </>
      ) : (
        <>
          <h3>
            <Localise>MAIN/BREAKDOWN/DESCRIPTION_DRESS_CODE</Localise>
          </h3>
          <p>
            <Localise>MAIN/BREAKDOWN/P_SELECT_DRESS_CODE</Localise>
          </p>
        </>
      )}
    </FunkyPanel>
  );
};

export default DifficultyBreakdown;
