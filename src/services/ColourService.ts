import { CSSProperties } from "react";
import Colour from "../classes/Colour";
import ColourGenerationBias from "../classes/ColourGenerationBias";
import HueDifferenceBias from "../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../enum/colour-generation-bias/SaturationBias";
import ValueBias from "../enum/colour-generation-bias/ValueBias";
import ArrayHelper from "../helper/ArrayHelper";
import MathHelper from "../helper/MathHelper";
import HsvT from "../types/helper/HsvT";

const unbiasedRandomRgbColour = () =>
  new Colour(
    MathHelper.GetRandomNumber(0, 255),
    MathHelper.GetRandomNumber(0, 255),
    MathHelper.GetRandomNumber(0, 255)
  );

// out: h in [0,360) and s,v in [0,1]
function toHsv(colour: Colour): HsvT {
  const [r, g, b] = [
    colour.int.red / 255,
    colour.int.green / 255,
    colour.int.blue / 255,
  ];
  let v = Math.max(r, g, b),
    c = v - Math.min(r, g, b);
  let h =
    c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
  return { hue: 60 * (h < 0 ? h + 6 : h), saturation: v && c / v, value: v };
}

// input: h in [0,360] and s,v in [0,1]
function toColour(hsv: HsvT) {
  let f = (n: number, k = (n + hsv.hue / 60) % 6) =>
    hsv.value - hsv.value * hsv.saturation * Math.max(Math.min(k, 4 - k, 1), 0);
  return new Colour(
    Math.round(f(5) * 255),
    Math.round(f(3) * 255),
    Math.round(f(1) * 255)
  );
}

const intToHex = (colour: number) => {
  let result = colour.toString(16);
  if (result.length === 1) {
    result = `0${result}`;
  }
  return result;
};

/**@obsolete replaced by actual hue bias */
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

/**@obsolete replaced by actual hue bias */
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

const randomiseHue = (
  subject: Colour,
  reference: Colour,
  minDistance: number,
  maxDistance?: number
) => {
  const subjectHsv = toHsv(subject);
  const referenceHsv = toHsv(reference);
  subjectHsv.hue = MathHelper.GetRandomAngleWithRangeBias(
    referenceHsv.hue,
    minDistance,
    maxDistance
  );

  return toColour(subjectHsv);
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
  let result = unbiasedRandomRgbColour();

  if (reference) {
    switch (colourGenerationBias.hueDifferenceBias) {
      case HueDifferenceBias.MinDifferenceStrong:
        result = randomiseHue(result, reference, 20);
        break;
      case HueDifferenceBias.MinDifferenceSome:
        result = randomiseHue(result, reference, 10);
        break;
      case HueDifferenceBias.MaxDifferenceSome:
        result = randomiseHue(result, reference, 1, 60);
        break;
      case HueDifferenceBias.MaxDifferenceStrong:
        result = randomiseHue(result, reference, 1, 30);
        break;
      default:
        result = randomiseHue(result, reference, 1);
    }
  }

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
