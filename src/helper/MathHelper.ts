const getRandomNumber = (
  min: number,
  max: number,
  toInteger: boolean = true
) => {
  const range = max - min;

  if (toInteger) return min + Math.floor(Math.random() * (range + 1));
  else return min + Math.random() * range;
};

const getRandomNumberSliced = (min: number, max: number, slices: number) => {
  const range = max - min;
  const sliceAmount = range / (slices - 1);
  const sliceMultiplier = Math.floor(Math.random() * slices);
  return min + sliceAmount * sliceMultiplier;
};

const ensureDistance = (
  targetDistance: number,
  min: number,
  max: number,
  ...values: number[]
): number[] => {
  values.sort((a, b) => a - b);
  let lowest = values[0];
  let highest = values[values.length - 1];
  const distance = highest - lowest;
  if (distance < targetDistance) {
    lowest -= distance / 2;
    highest += distance / 2;

    if (lowest < min) highest += Math.abs(lowest);
    if (highest > max) lowest -= highest;

    values[0] = Math.max(Math.floor(lowest), 0);
    values[values.length - 1] = Math.min(Math.ceil(highest), 255);
  }

  return values;
};

const clamp = (value: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, value));
};

const getRandomIntegerWithinDistance = (
  min: number,
  max: number,
  reference: number,
  minDistance: number,
  maxDistance: number
): number => {
  min = Math.max(min, reference - maxDistance);
  max = Math.min(max, reference + maxDistance);

  if (minDistance > 0) {
    const forbiddenFrom = Math.max(min, reference - minDistance + 1);
    const forbiddenTo = Math.min(max, reference + minDistance - 1);
    const forbiddenRange = forbiddenTo - forbiddenFrom + 1;

    let randomNumber = getRandomNumber(min, max - forbiddenRange);
    if (randomNumber >= forbiddenFrom) randomNumber += forbiddenRange;
    return randomNumber;
  } else return getRandomNumber(min, max);
};

const getRandomAngleWithRangeBias = (
  reference: number,
  minDistance: number,
  maxDistance?: number
): number => {
  maxDistance = maxDistance || 180;
  const min = Math.max(reference - 180, reference - maxDistance);
  const max = Math.min(reference + 180, reference + maxDistance);

  if (minDistance > 0) {
    const allowedTo = reference - minDistance;
    const allowedFrom = reference + minDistance;
    const forbiddenRange = allowedFrom - allowedTo;

    let randomNumber = getRandomNumber(min, max - forbiddenRange);
    if (randomNumber > allowedTo) randomNumber += forbiddenRange;

    return (randomNumber + 360) % 360;
  } else return (getRandomNumber(min, max) + 360) % 360;
};

const MathHelper = {
  Clamp: clamp,
  /**Ensures a certain distance between the highest and lowest value, by trying to equally increase/decrease them, while respecting min and max limits. The result is sorted.
   * @deprecated this was the old way of ensuring saturation bias
   */
  EnsureDistance: ensureDistance,
  GetRandomAngleWithRangeBias: getRandomAngleWithRangeBias,
  /** Returns an integer between the specified minimum (inclusive) and maximum (inclusive). */
  GetRandomNumber: getRandomNumber,
  /** Returns a number from min (inclusive) to max (inclusive) in increments determined by the number of slices.
   * Example: (0,100,5) => 0, 25, 50, 75 or 100
   */
  GetRandomNumberSliced: getRandomNumberSliced,
  /**Returns a random integer within a range that has a certain minimum/maximum distance to the reference number.*/
  GetRandomIntegerWithinDistance: getRandomIntegerWithinDistance,
};

export default MathHelper;
