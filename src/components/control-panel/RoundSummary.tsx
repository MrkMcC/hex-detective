import { BsIncognito } from "react-icons/bs";
import { FaEyeSlash, FaXmark } from "react-icons/fa6";
import PersonData from "../../classes/PersonData";
import ColourFlavour from "../../enum/ColourFlavour";
import LocalisationService from "../../services/LocalisationService";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import BarChart from "../common/colour/BarChart";
import Localise from "../common/Localise";
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
          <div className="person-breakdown accused-breakdown">
            <div className="role-breakdown">
              <div className="role-header flex-col align-center">
                <FaXmark className="icon color-red" />
                <div className="person-role">
                  <Localise>CONTROLBAR/ROUNDSUMMARY/LBL_ACCUSED</Localise>
                </div>
              </div>
              <Person person={accused} />
              <div className="tag-breakdown" />
            </div>
            <div className="breakdown-charts flex-col gap-1">
              <BarChart
                name={LocalisationService.GetLocalisedText("PERSON/HAT")}
                colour={accused.colours.hat}
                options={barChartOptions}
              />
              <BarChart
                name={LocalisationService.GetLocalisedText("PERSON/SHIRT")}
                colour={accused.colours.shirt}
                options={barChartOptions}
              />
              <BarChart
                name={LocalisationService.GetLocalisedText("PERSON/PANTS")}
                colour={accused.colours.pants}
                options={barChartOptions}
              />
            </div>
          </div>
        )}
        <div className="person-breakdown suspect-breakdown">
          <div className="breakdown-charts flex-col gap-1">
            <BarChart
              name={LocalisationService.GetLocalisedText("PERSON/HAT")}
              colour={suspect.colours.hat}
              options={barChartOptions}
            />
            <BarChart
              name={LocalisationService.GetLocalisedText("PERSON/SHIRT")}
              colour={suspect.colours.shirt}
              options={barChartOptions}
            />
            <BarChart
              name={LocalisationService.GetLocalisedText("PERSON/PANTS")}
              colour={suspect.colours.pants}
              options={barChartOptions}
            />
          </div>
          <div className="role-breakdown">
            <div className="role-header flex-col align-center">
              <BsIncognito className="icon color-grey" />
              <div className="person-role text-center">
                <Localise>CONTROLBAR/ROUNDSUMMARY/LBL_SUSPECT</Localise>
              </div>
            </div>
            <Person person={{ ...suspect, ruledOut: false, hidden: false }} />
            <div className="tag-breakdown color-grey">
              {suspect.hidden ? (
                <>
                  <FaEyeSlash className="icon" />
                  <span>
                    <Localise>CONTROLBAR/ROUNDSUMMARY/LBL_HIDDEN</Localise>
                  </span>
                </>
              ) : (
                suspect.ruledOut && (
                  <>
                    <FaXmark className="icon" />
                    <span>
                      <Localise>CONTROLBAR/ROUNDSUMMARY/LBL_RULED_OUT</Localise>
                    </span>
                  </>
                )
              )}
            </div>
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
