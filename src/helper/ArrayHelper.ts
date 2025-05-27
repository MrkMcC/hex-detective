function randomElement<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle<T>(array: T[]) {
  const result = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getEnumValues<T>(enumType: { [s: string]: string | number }): T[] {
  const enumValues = Object.values(enumType);

  const nonStringValues = enumValues.filter(
    (value) => typeof value !== "string"
  );

  if (enumValues.length === nonStringValues.length) return enumValues as T[];
  else return nonStringValues as T[];
}

const ArrayHelper = {
  GetEnumFlags: getEnumValues,
  RandomElement: randomElement,
  Shuffle: shuffle,
};

export default ArrayHelper;
