import Colour from "../../classes/Colour";
import ColourFlavour from "../../enum/ColourFlavour";
import ColourMixOptionsT from "../../types/components/ColourMixOptionsT";

interface Props {
  colour: Colour;
  name?: string;
  options?: ColourMixOptionsT;
}

const ColourMix = ({
  colour,
  name = "",
  options = { flavour: ColourFlavour.Hex, showRGB: false },
}: Props) => {
  options = { flavour: ColourFlavour.Hex, showRGB: false, ...options };

  return (
    <div
      className="colour-mix"
      style={{
        border: `1px solid ${colour.toString()}`,
      }}
    >
      <div className="colour-text font-mono updog">
        {options.flavour === ColourFlavour.Hex && (
          <>
            <span>{colour.hex.red}</span>
            <span>{colour.hex.green}</span>
            <span>{colour.hex.blue}</span>
          </>
        )}
        {options.flavour === ColourFlavour.Int && (
          <>
            <span>{colour.int.red}</span>
            <span>{colour.int.green}</span>
            <span>{colour.int.blue}</span>
          </>
        )}
        {options.flavour === ColourFlavour.Percentage && (
          <>
            <span>{colour.percentage.red}</span>
            <span>{colour.percentage.green}</span>
            <span>{colour.percentage.blue}</span>
          </>
        )}
      </div>
      <div className="bars-container text-center">
        <div className="bars">
          <div
            className="bar bar-red"
            style={{
              height: colour.percentage.red,
              backgroundColor: `#${colour.hex.red}0000`,
            }}
          >
            <span className="colour-letter text-contrast">
              {options.showRGB && "R"}
            </span>
          </div>
          <div
            className="bar bar-green"
            style={{
              height: colour.percentage.green,
              backgroundColor: `#00${colour.hex.green}00`,
            }}
          >
            <span className="colour-letter text-contrast">
              {options.showRGB && "G"}
            </span>
          </div>
          <div
            className="bar bar-blue"
            style={{
              height: colour.percentage.blue,
              backgroundColor: `#0000${colour.hex.blue}`,
            }}
          >
            <span className="colour-letter text-contrast">
              {options.showRGB && "B"}
            </span>
          </div>
        </div>
      </div>
      <div className="result-container">
        <div
          className="result text-center text-contrast"
          style={{
            backgroundColor: colour.toString(),
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default ColourMix;
