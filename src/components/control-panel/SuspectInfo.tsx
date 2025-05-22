import { FaRedhat } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import PersonData from "../../classes/PersonData";
import Constants from "../../Constants";
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

  if (Constants.DEBUG.REVEAL_SOLUTION) options.revealColours = true;

  return (
    <div
      className={`suspect-info font-mono ${
        options.compact ? "compact" : "extended"
      }`}
    >
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
          <div className="flex-row justify-between">
            <span className="grow flex-row justify-between">
              <span className="description-text hat">their hat is </span>
              <SuspectInfoColour
                flavour={options.flavour!}
                colour={suspect.colours.hat}
                reveal={options.revealColours}
              />
            </span>
            <FaRedhat className="icon" />
          </div>
          <div className="flex-row justify-between">
            <span className="grow flex-row justify-between">
              <span className="description-text shirt">their shirt is </span>
              <SuspectInfoColour
                flavour={options.flavour!}
                colour={suspect.colours.shirt}
                reveal={options.revealColours}
              />
            </span>
            <FaShirt className="icon" />
          </div>
          <div className="flex-row justify-between">
            <span className="grow flex-row justify-between">
              <span className="description-text pants">their pants are </span>
              <SuspectInfoColour
                flavour={options.flavour!}
                colour={suspect.colours.pants}
                reveal={options.revealColours}
              />
            </span>
            <PiPantsFill className="icon" />
          </div>
        </>
      )}
    </div>
  );
};

export default SuspectInfo;
