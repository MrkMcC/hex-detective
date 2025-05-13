import { CSSProperties } from "react";
import Colour from "../classes/Colour";

const intToHex = (colour: number) => {
  let result = colour.toString(16);
  if (result.length === 1) {
    result = `0${result}`;
  }
  return result;
};

const randomIntColorValue = () => {
  return Math.floor(Math.random() * 256);
};

const randomColour = () => {
  return new Colour(
    randomIntColorValue(),
    randomIntColorValue(),
    randomIntColorValue()
  );
};

const randomBorderColourStyle = (): CSSProperties => {
  return {
    borderTopColor: ColourService.RandomColour().hex.toString(),
    borderRightColor: ColourService.RandomColour().hex.toString(),
    borderBottomColor: ColourService.RandomColour().hex.toString(),
    borderLeftColor: ColourService.RandomColour().hex.toString(),
  };
};

const ColourService = {
  RandomColour: randomColour,
  RandomBorderColourStyle: randomBorderColourStyle,
  IntToHex: intToHex,
};

export default ColourService;
