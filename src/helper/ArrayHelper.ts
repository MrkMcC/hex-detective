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

function moveElement(array: unknown[], fromIndex: number, toIndex: number) {
  while (fromIndex < 0) {
    fromIndex += array.length;
  }
  while (toIndex < 0) {
    toIndex += array.length;
  }
  if (toIndex >= array.length) {
    let k = toIndex - array.length + 1;
    while (k--) {
      array.push(undefined);
    }
  }
  array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
}

const ArrayHelper = {
  GetEnumFlags: getEnumValues,
  /**Re-orders an array so the element with the specified index ends up with the target index. */
  MoveElement: moveElement,
  RandomElement: randomElement,
  Shuffle: shuffle,
};

export default ArrayHelper;
