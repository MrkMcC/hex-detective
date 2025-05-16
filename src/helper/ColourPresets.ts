import Colour from "../classes/Colour";

const ColourPresets = {
  Red: new Colour(255, 0, 0, "red"),
  Orange: new Colour(255, 128, 0, "orange"),
  Yellow: new Colour(255, 255, 0, "yellow"),
  SpringGreen: new Colour(128, 255, 0, "spring green"),
  Green: new Colour(0, 255, 0, "green"),
  OceanGreen: new Colour(0, 255, 128, "ocean green"),
  Cyan: new Colour(0, 255, 255, "cyan"),
  SkyBlue: new Colour(0, 128, 255, "sky blue"),
  Blue: new Colour(0, 0, 255, "blue"),
  Purple: new Colour(128, 0, 255, "purple"),
  Magenta: new Colour(255, 0, 255, "magenta"),
  Crimson: new Colour(255, 0, 128, "crimson"),
  White: new Colour(255, 255, 255, "white"),
  Grey: new Colour(128, 128, 128, "grey"),
  Black: new Colour(0, 0, 0, "black"),

  Tutorial: {
    RedPerc100: new Colour(255, 0, 0, "100% red"),
    RedPerc50: new Colour(128, 0, 0, "50% red"),
    RedPerc25: new Colour(64, 0, 0, "25% red"),
    GreenPerc100: new Colour(0, 255, 0, "100% green"),
    GreenPerc50: new Colour(0, 128, 0, "50% green"),
    GreenPerc25: new Colour(0, 64, 0, "25% green"),
    BluePerc100: new Colour(0, 0, 255, "100% blue"),
    BluePerc50: new Colour(0, 0, 128, "50% blue"),
    BluePerc25: new Colour(0, 0, 64, "25% blue"),

    RedAndGreen: new Colour(255, 255, 0, "a mix of red and green"),
    GreenAndBlue: new Colour(0, 255, 255, "a mix of green and blue"),
    BlueAndRed: new Colour(255, 0, 255, "a mix of blue and red"),
  },
};

export default ColourPresets;
