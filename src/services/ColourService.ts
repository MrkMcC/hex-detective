import { CSSProperties } from "react";
import Colour from "../classes/Colour";
import SaturationBias from "../enum/colour-generation-bias/SaturationBias";
import ArrayHelper from "../helper/ArrayHelper";

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

const ensureDistance = (
  targetDistance: number,
  ...values: number[]
): number[] => {
  values.sort((a, b) => a - b);
  let lowest = values[0];
  let highest = values[values.length - 1];
  const distance = highest - lowest;
  if (distance < targetDistance) {
    lowest -= distance / 2;
    highest += distance / 2;

    if (lowest < 0) highest += Math.abs(lowest);
    if (highest > 255) lowest -= highest;

    values[0] = Math.max(Math.floor(lowest), 0);
    values[values.length - 1] = Math.min(Math.ceil(highest), 255);
  }

  return values;
};

const randomColour = (saturationBias: SaturationBias = SaturationBias.None) => {
  let rgbValues = [
    randomIntColorValue(),
    randomIntColorValue(),
    randomIntColorValue(),
  ];

  switch (saturationBias) {
    case SaturationBias.Subtle:
      rgbValues = ensureDistance(50, ...rgbValues);
      break;
    case SaturationBias.Strong:
      rgbValues = ensureDistance(150, ...rgbValues);
      break;
    case SaturationBias.Extreme:
      rgbValues = ensureDistance(200, ...rgbValues);
      break;
  }

  return generateColour(rgbValues[0], rgbValues[1], rgbValues[2]);
};

const generateColour = (
  first: number | (() => number),
  second?: number | (() => number),
  third?: number | (() => number),
  randomiseOrder: boolean = true
) => {
  const getNumber = (numberSrc: number | (() => number)) =>
    typeof numberSrc === "number" ? numberSrc : numberSrc();

  const firstVal = getNumber(first);
  const secondVal = second !== undefined ? getNumber(second) : getNumber(first);
  const thirdVal =
    third !== undefined
      ? getNumber(third)
      : second !== undefined
      ? getNumber(second)
      : getNumber(first);

  const rgb = ArrayHelper.Shuffle([firstVal, secondVal, thirdVal]);

  if (randomiseOrder) return new Colour(rgb[0], rgb[1], rgb[2]);
  else return new Colour(firstVal, secondVal, thirdVal);
};

const randomBorderColourStyle = (): CSSProperties => {
  return {
    borderTopColor: ColourService.RandomColour().hex.toString(),
    borderRightColor: ColourService.RandomColour().hex.toString(),
    borderBottomColor: ColourService.RandomColour().hex.toString(),
    borderLeftColor: ColourService.RandomColour().hex.toString(),
  };
};

const randomColourStyle = (): CSSProperties => {
  return {
    color: ColourService.RandomColour().hex.toString(),
  };
};

const colourFromHex = (code: string) => {
  return new Colour(
    Number(`0x${code.slice(0, 2)}`),
    Number(`0x${code.slice(2, 4)}`),
    Number(`0x${code.slice(4, 6)}`)
  );
};

const ColourService = {
  RandomColour: randomColour,
  GenerateColour: generateColour,
  RandomBorderColourStyle: randomBorderColourStyle,
  RandomColourStyle: randomColourStyle,
  IntToHex: intToHex,
  ColourFromHex: colourFromHex,
};

export default ColourService;
