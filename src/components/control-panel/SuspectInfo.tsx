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
          <ColourText
            label="HAT"
            code={suspect.colours.hat}
            reveal={revealColours}
          />
          <ColourText
            label="SHIRT"
            code={suspect.colours.shirt}
            reveal={revealColours}
          />
          <ColourText
            label="PANTS"
            code={suspect.colours.pants}
            reveal={revealColours}
          />
        </p>
      ) : (
        <>
          <p>
            <ColourText
              label="Their hat is"
              code={suspect.colours.hat}
              reveal={revealColours}
            />
          </p>
          <p>
            <ColourText
              label="Their shirt is"
              code={suspect.colours.shirt}
              reveal={revealColours}
            />
          </p>
          <p>
            <ColourText
              label="Their pants are"
              code={suspect.colours.pants}
              reveal={revealColours}
            />
          </p>
        </>
      )}
    </div>
  );
};

export default SuspectInfo;
