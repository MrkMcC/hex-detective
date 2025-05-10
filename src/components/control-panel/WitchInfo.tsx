import PersonT from "../../types/PersonT";
import ColourText from "../ColourText";

interface Props {
  witch: PersonT;
  revealColours: boolean;
  compact: boolean;
}

const WitchInfo = ({ witch, revealColours, compact }: Props) => {
  return (
    <div className={`witch-info ${compact ? "compact" : "extended"}`}>
      {compact ? (
        <p>
          <ColourText
            label="HAT"
            code={witch.colours.hat}
            reveal={revealColours}
          />
          <ColourText
            label="SHIRT"
            code={witch.colours.shirt}
            reveal={revealColours}
          />
          <ColourText
            label="PANTS"
            code={witch.colours.pants}
            reveal={revealColours}
          />
        </p>
      ) : (
        <>
          <p>
            <ColourText
              label="Their hat is"
              code={witch.colours.hat}
              reveal={revealColours}
            />
          </p>
          <p>
            <ColourText
              label="Their shirt is"
              code={witch.colours.shirt}
              reveal={revealColours}
            />
          </p>
          <p>
            <ColourText
              label="Their pants are"
              code={witch.colours.pants}
              reveal={revealColours}
            />
          </p>
        </>
      )}
    </div>
  );
};

export default WitchInfo;
