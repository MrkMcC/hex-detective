import { FaRedhat } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import PersonData from "../../classes/PersonData";
import ColourFlavour from "../../enum/ColourFlavour";
import SuspectInfoOptionsT from "../../types/components/SuspectInfoOptionsT";
import SuspectInfoColour from "./SuspectInfoColour";

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
          <SuspectInfoColour
            flavour={options.flavour!}
            colour={suspect.colours.hat}
            reveal={options.revealColours}
          >
            <FaRedhat className="icon" />
          </SuspectInfoColour>
          <SuspectInfoColour
            flavour={options.flavour!}
            colour={suspect.colours.shirt}
            reveal={options.revealColours}
          >
            <FaShirt className="icon" />
          </SuspectInfoColour>
          <SuspectInfoColour
            flavour={options.flavour!}
            colour={suspect.colours.pants}
            reveal={options.revealColours}
          >
            <PiPantsFill className="icon" />
          </SuspectInfoColour>
        </p>
      ) : (
        <>
          <p>
            <FaRedhat className="icon" />
            <SuspectInfoColour
              flavour={options.flavour!}
              colour={suspect.colours.hat}
              reveal={options.revealColours}
            >
              Their hat is
            </SuspectInfoColour>
            <FaRedhat className="icon" />
          </p>
          <p>
            <FaShirt className="icon" />
            <SuspectInfoColour
              flavour={options.flavour!}
              colour={suspect.colours.shirt}
              reveal={options.revealColours}
            >
              Their shirt is
            </SuspectInfoColour>
            <FaShirt className="icon" />
          </p>
          <p>
            <PiPantsFill className="icon" />
            <SuspectInfoColour
              flavour={options.flavour!}
              colour={suspect.colours.pants}
              reveal={options.revealColours}
            >
              Their pants are
            </SuspectInfoColour>
            <PiPantsFill className="icon" />
          </p>
        </>
      )}
    </div>
  );
};

export default SuspectInfo;
