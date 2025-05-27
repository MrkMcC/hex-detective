import { CSSProperties } from "react";
import Colour from "../classes/Colour";
import ColourBias from "../classes/ColourBiasPercentage";
import ColourGenerationBias from "../classes/ColourGenerationBias";
import ArrayHelper from "../helper/ArrayHelper";
import MathHelper from "../helper/MathHelper";
import HsvT from "../types/helper/HsvT";
import LogService from "./LogService";

const LOG_SUBJECT = "ColourService";

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
  const v = Math.max(r, g, b),
    c = v - Math.min(r, g, b);
  const h =
    c && (v == r ? (g - b) / c : v == g ? 2 + (b - r) / c : 4 + (r - g) / c);
  return { hue: 60 * (h < 0 ? h + 6 : h), saturation: v && c / v, value: v };
}

// input: h in [0,360] and s,v in [0,1]
function toColour(hsv: HsvT) {
  const f = (n: number, k = (n + hsv.hue / 60) % 6) =>
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

const randomiseHue = (
  subject: Colour,
  reference: Colour,
  minDistance: number = 1,
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
  saturationBias: ColourBias,
  valueBias: ColourBias
) => {
  if (
    !MathHelper.IsWithinRange(saturationBias.minimum, 0, 1) ||
    !MathHelper.IsWithinRange(saturationBias.maximum, 0, 1) ||
    !MathHelper.IsWithinRange(valueBias.minimum, 0, 1) ||
    !MathHelper.IsWithinRange(valueBias.maximum, 0, 1)
  )
    throw LogService.Error(
      LOG_SUBJECT,
      `Invalid argument. Expected numbers in range 0 to 1.`,
      saturationBias.minimum,
      saturationBias.maximum,
      valueBias.minimum,
      valueBias.maximum
    );
  if (
    saturationBias.minimum > saturationBias.maximum ||
    valueBias.minimum > valueBias.maximum
  )
    throw LogService.Error(
      LOG_SUBJECT,
      `Invalid argument. Minimum can't exceed maximum.`,
      saturationBias.minimum,
      saturationBias.maximum,
      valueBias.minimum,
      valueBias.maximum
    );

  const applyBias = (subject: number, newMin: number, newMax: number) => {
    if (newMin > 0 || newMax < 1) {
      const initialSubject = subject;
      const minMaxDifference = newMax - newMin;
      const weightOfMin = newMin / (newMin + (1 - newMax));
      const weightedCenter = newMin + minMaxDifference * weightOfMin;

      if (initialSubject < weightedCenter) {
        const differenceFactor = (weightedCenter - newMin) / weightedCenter;
        const initialDifference = weightedCenter - initialSubject;
        return weightedCenter - initialDifference * differenceFactor;
      } else if (initialSubject > weightedCenter) {
        const differenceFactor =
          (newMax - weightedCenter) / (1 - weightedCenter);
        const initialDifference = initialSubject - weightedCenter;
        return weightedCenter + initialDifference * differenceFactor;
      }
    }
    return subject;
  };

  const hsv = toHsv(colour);
  hsv.saturation = applyBias(
    hsv.saturation,
    saturationBias.minimum,
    saturationBias.maximum
  );
  hsv.value = applyBias(hsv.value, valueBias.minimum, valueBias.maximum);
  return toColour(hsv);
};

const randomColour = (
  colourGenerationBias: ColourGenerationBias = new ColourGenerationBias(),
  reference?: Colour
) => {
  let result = unbiasedRandomRgbColour();

  if (reference) {
    result = randomiseHue(
      result,
      reference,
      colourGenerationBias.hue.minimum,
      colourGenerationBias.hue.maximum
    );
  }

  return applySaturationAndValueBias(
    result,
    colourGenerationBias.saturation,
    colourGenerationBias.value
  );
};

const shiftHue = (colour: Colour, angle: number = 0) => {
  const hsv = toHsv(colour);
  hsv.hue += angle;
  return toColour(hsv);
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
  ApplySaturationAndValueBias: applySaturationAndValueBias,
  ColourFromHex: colourFromHex,
  GenerateColour: generateColour,
  IntToHex: intToHex,
  RandomColour: randomColour,
  RandomColourStyle: randomColourStyle,
  RandomBorderColourStyle: randomBorderColourStyle,
  ShiftHue: shiftHue,
};

export default ColourService;
