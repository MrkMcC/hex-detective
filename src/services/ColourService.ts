const randomHexColorValue = () => {
  let result = Math.floor(Math.random() * 256).toString(16);
  if (result.length === 1) {
    result = `0${result}`;
  }
  return result;
};

const randomColor = () => {
  const result = `#${randomHexColorValue()}${randomHexColorValue()}${randomHexColorValue()}`;
  return result;
};

const ColourService = {
  RandomColour: randomColor,
};

export default ColourService;
