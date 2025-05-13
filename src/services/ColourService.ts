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

const randomHexColorValue = () => {
  return intToHex(randomIntColorValue());
};

// const randomColor = () => {
//   const result = `#${randomHexColorValue()}${randomHexColorValue()}${randomHexColorValue()}`;
//   return result;
// };
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

const colourFromHex = (hexColour: string): Colour => {
  if (hexColour.startsWith("#")) hexColour = hexColour.split("#")[1];
  return new Colour(
    Number(`0x${hexColour.slice(0, 2)}`),
    Number(`0x${hexColour.slice(2, 4)}`),
    Number(`0x${hexColour.slice(4, 6)}`)
  );
};

const ColourService = {
  RandomColour: randomColour,
  RandomBorderColourStyle: randomBorderColourStyle,
  ColourFromHex: colourFromHex,
  IntToHex: intToHex,
};

export default ColourService;
