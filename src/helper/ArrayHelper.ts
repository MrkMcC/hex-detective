function randomElement<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

const ArrayHelper = {
  RandomElement: randomElement,
};

export default ArrayHelper;
