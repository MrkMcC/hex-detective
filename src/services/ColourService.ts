import { CSSProperties } from "react";
import Colour from "../classes/Colour";
import ColourGenerationBias from "../classes/ColourGenerationBias";
import HueDifferenceBias from "../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../enum/colour-generation-bias/SaturationBias";
import ArrayHelper from "../helper/ArrayHelper";
import MathHelper from "../helper/MathHelper";

const intToHex = (colour: number) => {
  let result = colour.toString(16);
  if (result.length === 1) {
    result = `0${result}`;
  }
  return result;
};

const randomRgbValueWithinDistance = (
  reference: number,
  minDistance: number,
  maxDistance: number
) =>
  MathHelper.GetRandomIntegerWithinDistance(
    0,
    255,
    reference,
    minDistance,
    maxDistance
  );

const randomColourWithinDistance = (
  reference: Colour,
  minDistance: number,
  maxDistance: number
) => {
  return new Colour(
    randomRgbValueWithinDistance(reference.int.red, minDistance, maxDistance),
    randomRgbValueWithinDistance(reference.int.green, minDistance, maxDistance),
    randomRgbValueWithinDistance(reference.int.blue, minDistance, maxDistance)
  );
};

const applySaturationBias = (colour: Colour, minSaturation: number) => {
  let rgb = [colour.int.red, colour.int.green, colour.int.blue];
  const indexOfMax = rgb.indexOf(Math.max(...rgb));
  const indexOfMin = rgb.indexOf(Math.min(...rgb));

  const saturation = (rgb[indexOfMax] - rgb[indexOfMin]) / rgb[indexOfMax];
  debugger;
  if (saturation < minSaturation) {
    const previousMinimum = rgb[indexOfMin];
    const previousRange = rgb[indexOfMax] - previousMinimum;
    rgb[indexOfMin] = rgb[indexOfMax] - rgb[indexOfMax] * minSaturation;
    const newRange = rgb[indexOfMax] - rgb[indexOfMin];
    rgb = rgb.map((v, index) =>
      index !== indexOfMin && index !== indexOfMax
        ? rgb[indexOfMin] + ((v - previousMinimum) / previousRange) * newRange
        : v
    );
    return new Colour(
      Math.round(rgb[0]),
      Math.round(rgb[1]),
      Math.round(rgb[2])
    );
  } else return colour;
};

const randomColour = (
  colourGenerationBias: ColourGenerationBias = new ColourGenerationBias(
    IncrementBias.None,
    SaturationBias.None,
    HueDifferenceBias.None
  ),
  reference?: Colour
) => {
  let result: Colour;

  if (reference) {
    switch (colourGenerationBias.hueDifferenceBias) {
      case HueDifferenceBias.MinDifferenceStrong:
        result = randomColourWithinDistance(reference, 32, 255);
        break;
      case HueDifferenceBias.MinDifferenceSome:
        result = randomColourWithinDistance(reference, 16, 255);
        break;
      case HueDifferenceBias.MaxDifferenceSome:
        result = randomColourWithinDistance(reference, 16, 120);
        break;
      case HueDifferenceBias.MaxDifferenceStrong:
        result = randomColourWithinDistance(reference, 16, 80);
        break;
      default:
        result = new Colour(
          MathHelper.GetRandomNumber(0, 255),
          MathHelper.GetRandomNumber(0, 255),
          MathHelper.GetRandomNumber(0, 255)
        );
    }
  } else
    result = new Colour(
      MathHelper.GetRandomNumber(0, 255),
      MathHelper.GetRandomNumber(0, 255),
      MathHelper.GetRandomNumber(0, 255)
    );

  switch (colourGenerationBias.saturationBias) {
    case SaturationBias.Subtle:
      result = applySaturationBias(result, 0);
      break;
    case SaturationBias.Strong:
      result = applySaturationBias(result, 1);
      break;
    case SaturationBias.Extreme:
      result = applySaturationBias(result, 1);
      break;
  }

  return result;
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
