import { FaRedhat } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import PersonT from "../../types/PersonT";
import HexCode from "../ColourText";

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
          <HexCode colour={suspect.colours.hat} reveal={revealColours}>
            <FaRedhat className="icon" />
          </HexCode>
          <HexCode colour={suspect.colours.shirt} reveal={revealColours}>
            <FaShirt className="icon" />
          </HexCode>
          <HexCode colour={suspect.colours.pants} reveal={revealColours}>
            <PiPantsFill className="icon" />
          </HexCode>
        </p>
      ) : (
        <>
          <p>
            <FaRedhat className="icon" />
            <HexCode colour={suspect.colours.hat} reveal={revealColours}>
              Their hat is
            </HexCode>
            <FaRedhat className="icon" />
          </p>
          <p>
            <FaShirt className="icon" />
            <HexCode colour={suspect.colours.shirt} reveal={revealColours}>
              Their shirt is
            </HexCode>
            <FaShirt className="icon" />
          </p>
          <p>
            <PiPantsFill className="icon" />
            <HexCode colour={suspect.colours.pants} reveal={revealColours}>
              Their pants are
            </HexCode>
            <PiPantsFill className="icon" />
          </p>
        </>
      )}
    </div>
  );
};

export default SuspectInfo;
