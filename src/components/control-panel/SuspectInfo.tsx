import { FaRedhat } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import PersonData from "../../classes/PersonData";
import ColourFlavour from "../../enum/ColourFlavour";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import HexCode from "../HexCode";

interface Props {
  suspect: PersonData;
  options?: SuspectInfoOptionsT;
}

const SuspectInfo = ({ suspect, options }: Props) => {
  options = {
    flavour: ColourFlavour.Hex,
    revealColours: false,
    compact: false,
    ...options,
  };

  return (
    <div className={`suspect-info ${options.compact ? "compact" : "extended"}`}>
      {options.compact ? (
        <p>
          <HexCode colour={suspect.colours.hat} reveal={options.revealColours}>
            <FaRedhat className="icon" />
          </HexCode>
          <HexCode
            colour={suspect.colours.shirt}
            reveal={options.revealColours}
          >
            <FaShirt className="icon" />
          </HexCode>
          <HexCode
            colour={suspect.colours.pants}
            reveal={options.revealColours}
          >
            <PiPantsFill className="icon" />
          </HexCode>
        </p>
      ) : (
        <>
          <p>
            <FaRedhat className="icon" />
            <HexCode
              colour={suspect.colours.hat}
              reveal={options.revealColours}
            >
              Their hat is
            </HexCode>
            <FaRedhat className="icon" />
          </p>
          <p>
            <FaShirt className="icon" />
            <HexCode
              colour={suspect.colours.shirt}
              reveal={options.revealColours}
            >
              Their shirt is
            </HexCode>
            <FaShirt className="icon" />
          </p>
          <p>
            <PiPantsFill className="icon" />
            <HexCode
              colour={suspect.colours.pants}
              reveal={options.revealColours}
            >
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
