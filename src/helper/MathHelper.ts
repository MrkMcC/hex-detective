const getRandomNumber = (max: number) => {
  return Math.ceil(Math.random() * max);
};

const getRandomNumberSliced = (min: number, max: number, slices: number) => {
  const range = max - min;
  const sliceAmount = range / (slices - 1);
  const sliceMultiplier = Math.floor(Math.random() * slices);
  return min + sliceAmount * sliceMultiplier;
};

const MathHelper = {
  /** Returns an integer from 1 to the specified maximum. */
  GetRandomNumber: getRandomNumber,
  /** Returns a number from min (inclusive) to max (inclusive) in increments determined by the number of slices.
   * Example: (0,100,5) => 0, 25, 50, 75 or 100
   */
  GetRandomNumberSliced: getRandomNumberSliced,
};

export default MathHelper;
