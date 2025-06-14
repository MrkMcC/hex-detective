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
  BrighterGrey: new Colour(216, 216, 216, "brighter grey"),
  BrightGrey: new Colour(152, 152, 152, "bright grey"),
  Grey: new Colour(128, 128, 128, "grey"),
  DarkGrey: new Colour(39, 39, 39, "dark grey"),
  Black: new Colour(0, 0, 0, "black"),

  Tutorial: {
    RedPerc100: new Colour(255, 0, 0, "RedPerc100"),
    RedPerc50: new Colour(128, 0, 0, "RedPerc50"),
    RedPerc25: new Colour(64, 0, 0, "RedPerc25"),
    GreenPerc100: new Colour(0, 255, 0, "GreenPerc100"),
    GreenPerc50: new Colour(0, 128, 0, "GreenPerc50"),
    GreenPerc25: new Colour(0, 64, 0, "GreenPerc25"),
    BluePerc100: new Colour(0, 0, 255, "BluePerc100"),
    BluePerc50: new Colour(0, 0, 128, "BluePerc50"),
    BluePerc25: new Colour(0, 0, 64, "BluePerc25"),

    RedAndGreen: new Colour(255, 255, 0, "MIX_RED_GREEN"),
    GreenAndBlue: new Colour(0, 255, 255, "MIX_GREEN_BLUE"),
    BlueAndRed: new Colour(255, 0, 255, "MIX_BLUE_RED"),

    YellowPerc50: new Colour(128, 128, 0, "50% red, 50% green"),
    CyanPerc50: new Colour(0, 128, 128, "50% green, 50% blue"),
    MagentaPerc50: new Colour(128, 0, 128, "50% blue, 50% red"),

    LowSatRed: new Colour(179, 128, 128, "low saturated red"),
    LowSatGreen: new Colour(128, 179, 128, "low saturated green"),
    LowSatBlue: new Colour(128, 128, 179, "low saturated blue"),
    HighSatRed: new Colour(179, 64, 64, "high saturated red"),
    HighSatGreen: new Colour(64, 179, 64, "high saturated green"),
    HighSatBlue: new Colour(64, 64, 179, "high saturated blue"),

    Base16Grey: new Colour(85, 85, 85, "grey"),
    Base16LowSatRed: new Colour(85, 0, 0, "low saturated red"),
    Base16LowSatGreen: new Colour(0, 85, 0, "low saturated green"),
    Base16LowSatBlue: new Colour(0, 0, 85, "low saturated blue"),
    Base16LowSatYellow: new Colour(85, 85, 0, "low saturated yellow"),
    Base16LowSatCyan: new Colour(0, 85, 85, "low saturated cyan"),
    Base16LowSatMagenta: new Colour(85, 0, 85, "low saturated magenta"),
  },
};

export default ColourPresets;
