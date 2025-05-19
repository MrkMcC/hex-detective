import Colour from "./Colour";

class CustomFlavour {
  transformValue: (int: number) => string;
  transformColour(colour: Colour) {
    return `(${this.transformValue(colour.int.red)}, ${this.transformValue(
      colour.int.green
    )}, ${this.transformValue(colour.int.blue)})`;
  }

  constructor(transformFunc: (int: number) => string) {
    this.transformValue = transformFunc;
  }
}

export default CustomFlavour;
