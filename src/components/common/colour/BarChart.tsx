import Colour from "../../../classes/Colour";
import CustomFlavour from "../../../classes/CustomFlavour";
import ColourFlavour from "../../../enum/ColourFlavour";
import BarChartOptionsT from "../../../types/components/BarChartOptionsT";
import Localise from "../Localise";
import Slider from "../Slider";
import InteractIcon from "./InteractIcon";

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

  const convertToCustomScale = (value: number) => {
    if (options.editing?.customIntScale)
      return Math.round((value / 255) * options.editing?.customIntScale);
    else return value;
  };

  const convertFromCustomScale = (value: number) => {
    if (options.editing?.customIntScale)
      return Math.round((value / options.editing?.customIntScale) * 255);
    else return value;
  };

  const handleRedChange = (value: number) => {
    if (onChange)
      onChange(
        new Colour(
          Math.round(convertFromCustomScale(value)),
          colour.int.green,
          colour.int.blue
        )
      );
  };
  const handleGreenChange = (value: number) => {
    if (onChange)
      onChange(
        new Colour(
          colour.int.red,
          Math.round(convertFromCustomScale(value)),
          colour.int.blue
        )
      );
  };
  const handleBlueChange = (value: number) => {
    if (onChange)
      onChange(
        new Colour(
          colour.int.red,
          colour.int.green,
          Math.round(convertFromCustomScale(value))
        )
      );
  };

  return (
    <div
      className="bar-chart"
      style={{
        border: `1px solid ${colour.toString()}`,
      }}
    >
      {options.flavour !== ColourFlavour.Hidden && (
        <div className="colour-text font-mono">
          {options.flavour === ColourFlavour.Hex ? (
            <>
              <span className="updog">{colour.hex.red}</span>
              <span className="updog">{colour.hex.green}</span>
              <span className="updog">{colour.hex.blue}</span>
            </>
          ) : options.flavour === ColourFlavour.Int ? (
            <>
              <span>{convertToCustomScale(colour.int.red)}</span>
              <span>{convertToCustomScale(colour.int.green)}</span>
              <span>{convertToCustomScale(colour.int.blue)}</span>
            </>
          ) : options.flavour === ColourFlavour.Percentage ? (
            <>
              <span>{colour.percentage.red}</span>
              <span>{colour.percentage.green}</span>
              <span>{colour.percentage.blue}</span>
            </>
          ) : options.flavour === ColourFlavour.Name ? (
            <>
              <span>
                <Localise fallback={colour.name}>
                  COLOURS/{colour.name ?? ""}
                </Localise>
              </span>
            </>
          ) : (
            <>
              <span>
                {(options.flavour as CustomFlavour).transformValue(
                  colour.int.red
                )}
              </span>
              <span>
                {(options.flavour as CustomFlavour).transformValue(
                  colour.int.green
                )}
              </span>
              <span>
                {(options.flavour as CustomFlavour).transformValue(
                  colour.int.blue
                )}
              </span>
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
            {options.editing?.enabled && <InteractIcon />}
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
            {options.editing?.enabled && <InteractIcon />}
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
            {options.editing?.enabled && <InteractIcon />}
            <span className="colour-letter text-contrast">
              {options.showLetterB && "B"}
            </span>
          </div>
          {options.editing?.enabled && (
            <>
              <Slider
                className="slider-red"
                value={convertToCustomScale(colour.int.red)}
                onChange={handleRedChange}
                max={options.editing.customIntScale ?? 255}
                step={options.editing?.step}
              />
              <Slider
                className="slider-green"
                value={convertToCustomScale(colour.int.green)}
                onChange={handleGreenChange}
                max={options.editing.customIntScale ?? 255}
                step={options.editing?.step}
              />
              <Slider
                className="slider-blue"
                value={convertToCustomScale(colour.int.blue)}
                onChange={handleBlueChange}
                max={options.editing.customIntScale ?? 255}
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
