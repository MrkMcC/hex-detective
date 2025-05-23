import { CSSProperties } from "react";
import Colour from "../classes/Colour";
import ColourGenerationBias from "../classes/ColourGenerationBias";
import HueDifferenceBias from "../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../enum/colour-generation-bias/SaturationBias";
import ValueBias from "../enum/colour-generation-bias/ValueBias";
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

/**Scale everything up so that all values fit withing the intended saturation / value scale. */
const applySaturationAndValueBias = (
  colour: Colour,
  minSaturation: number,
  minValue: number
) => {
  const rgb = [colour.int.red, colour.int.green, colour.int.blue];
  const iMin = rgb.indexOf(Math.min(...rgb));
  const iMax = rgb.indexOf(Math.max(...rgb));
  const iMed = rgb.findIndex((_v, i) => i !== iMin && i !== iMax);

  const initialMin = rgb[iMin];
  const initialMax = rgb[iMax];
  const initialMed = rgb[iMed];
  const initialRange = initialMax - initialMin;
  const initialSaturation = initialRange / initialMax;
  const initialValue = initialMax / 255;

  const targetSaturation =
    initialSaturation + (1 - initialSaturation) * minSaturation;
  const saturationFactor = targetSaturation / initialSaturation;

  const targetValue = initialValue + (1 - initialValue) * minValue;
  const valueFactor = targetValue / initialValue;

  //Saturation
  rgb[iMin] = initialMax - initialRange * saturationFactor;
  const newRange = rgb[iMax] - rgb[iMin];
  rgb[iMed] = rgb[iMin] + ((initialMed - initialMin) / initialRange) * newRange;

  //Value
  rgb[iMax] *= valueFactor;
  rgb[iMin] *= valueFactor;
  rgb[iMed] *= valueFactor;

  return new Colour(Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2]));
};

const randomColour = (
  colourGenerationBias: ColourGenerationBias = new ColourGenerationBias(
    IncrementBias.None,
    SaturationBias.None,
    HueDifferenceBias.None,
    ValueBias.None
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

  let minValue = 0;
  switch (colourGenerationBias.valueBias) {
    case ValueBias.Subtle:
      minValue = 0.1;
      break;
    case ValueBias.Strong:
      minValue = 0.25;
      break;
    case ValueBias.Extreme:
      minValue = 1;
      break;
  }

  let minSaturation = 0;
  switch (colourGenerationBias.saturationBias) {
    case SaturationBias.Subtle:
      minSaturation = 0.1;
      break;
    case SaturationBias.Strong:
      minSaturation = 0.5;
      break;
    case SaturationBias.Extreme:
      minSaturation = 1;
      break;
  }

  result = applySaturationAndValueBias(result, minSaturation, minValue);

  //Saturation and Value correction might undo the hue bias, i think -> because it's not actually a hue bias. if it was, they wouldn't.
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
