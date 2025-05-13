import { FaRedhat } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import PersonT from "../../types/PersonT";
import ColourText from "../ColourText";

interface Props {
  suspect: PersonT;
  revealColours: boolean;
  compact: boolean;
}

const SuspectInfo = ({ suspect, revealColours, compact }: Props) => {
  return (
    <div className={`suspect-info ${compact ? "compact" : "extended"}`}>
      {compact ? (
        <p>
          <ColourText colour={suspect.colours.hat} reveal={revealColours}>
            <FaRedhat className="icon" />
          </ColourText>
          <ColourText colour={suspect.colours.shirt} reveal={revealColours}>
            <FaShirt className="icon" />
          </ColourText>
          <ColourText colour={suspect.colours.pants} reveal={revealColours}>
            <PiPantsFill className="icon" />
          </ColourText>
        </p>
      ) : (
        <>
          <p>
            <FaRedhat className="icon" />
            <ColourText colour={suspect.colours.hat} reveal={revealColours}>
              Their hat is
            </ColourText>
            <FaRedhat className="icon" />
          </p>
          <p>
            <FaShirt className="icon" />
            <ColourText colour={suspect.colours.shirt} reveal={revealColours}>
              Their shirt is
            </ColourText>
            <FaShirt className="icon" />
          </p>
          <p>
            <PiPantsFill className="icon" />
            <ColourText colour={suspect.colours.pants} reveal={revealColours}>
              Their pants are
            </ColourText>
            <PiPantsFill className="icon" />
          </p>
        </>
      )}
    </div>
  );
};

export default SuspectInfo;
