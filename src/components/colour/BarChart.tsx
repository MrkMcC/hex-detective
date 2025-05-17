import Colour from "../../classes/Colour";
import ColourFlavour from "../../enum/ColourFlavour";
import BarChartOptionsT from "../../types/components/BarChartOptionsT";
import Slider from "../common/Slider";

interface Props {
  colour: Colour;
  name?: string;
  options?: BarChartOptionsT;
  onChange?: (colour: Colour) => void;
}

const BarChart = ({ colour, name = "", options, onChange }: Props) => {
  options! = {
    flavour: ColourFlavour.Hex,
    showLetterR: false,
    showLetterG: false,
    showLetterB: false,
    editing: { enabled: false, step: 1 },
    ...options,
  };

  const handleRedChange = (value: number) => {
    if (onChange)
      onChange(
        new Colour(Math.round(value), colour.int.green, colour.int.blue)
      );
  };
  const handleGreenChange = (value: number) => {
    if (onChange)
      onChange(new Colour(colour.int.red, Math.round(value), colour.int.blue));
  };
  const handleBlueChange = (value: number) => {
    if (onChange)
      onChange(new Colour(colour.int.red, colour.int.green, Math.round(value)));
  };

  return (
    <div
      className="colour-mix"
      style={{
        border: `1px solid ${colour.toString()}`,
      }}
    >
      {options.flavour !== ColourFlavour.Hidden && (
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
      )}
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
              {options.showLetterR && "R"}
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
              {options.showLetterG && "G"}
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
              {options.showLetterB && "B"}
            </span>
          </div>
          {options.editing?.enabled && (
            <>
              <Slider
                className="red"
                value={colour.int.red}
                onChange={handleRedChange}
                max={255}
                step={options.editing?.step}
              />
              <Slider
                className="green"
                value={colour.int.green}
                onChange={handleGreenChange}
                max={255}
                step={options.editing?.step}
              />
              <Slider
                className="blue"
                value={colour.int.blue}
                onChange={handleBlueChange}
                max={255}
                step={options.editing?.step}
              />
            </>
          )}
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

export default BarChart;
