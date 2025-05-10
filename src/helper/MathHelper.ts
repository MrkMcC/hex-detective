const getRandomNumber = (max: number) => {
  return Math.ceil(Math.random() * max);
};

const MathHelper = {
  /** Returns an integer from 1 to the specified maximum. */
  GetRandomNumber: getRandomNumber,
};

export default MathHelper;
