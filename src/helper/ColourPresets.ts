import Colour from "../classes/Colour";

const ColourPresets = {
  Red: new Colour(255, 0, 0, "red"),
  RedPerc100: new Colour(255, 0, 0, "100% red"),
  RedPerc50: new Colour(128, 0, 0, "50% red"),
  RedPerc25: new Colour(64, 0, 0, "25% red"),
  Green: new Colour(0, 255, 0, "green"),
  GreenPerc100: new Colour(0, 255, 0, "100% green"),
  GreenPerc50: new Colour(0, 128, 0, "50% green"),
  GreenPerc25: new Colour(0, 64, 0, "25% green"),
  Blue: new Colour(0, 0, 255, "blue"),
  BluePerc100: new Colour(0, 0, 255, "100% blue"),
  BluePerc50: new Colour(0, 0, 128, "50% blue"),
  BluePerc25: new Colour(0, 0, 64, "25% blue"),
  Grey: new Colour(128, 128, 128, "grey"),
};

export default ColourPresets;
