function randomElement<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const ArrayHelper = {
  RandomElement: randomElement,
  Shuffle: shuffle,
};

export default ArrayHelper;
