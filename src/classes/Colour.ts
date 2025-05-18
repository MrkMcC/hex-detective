import ColourFlavour from "../enum/ColourFlavour";
import ColourService from "../services/ColourService";

class Rgb<T> {
  flavour: ColourFlavour;
  red: T;
  green: T;
  blue: T;
  toString() {
    if (this.flavour == ColourFlavour.Hex)
      return `#${this.red}${this.green}${this.blue}`;
    else if (this.flavour == ColourFlavour.Int)
      return `(${this.red}, ${this.green}, ${this.blue})`;
    else return `(${this.red} ${this.green} ${this.blue})`;
  }
  toArray() {
    return [this.red, this.green, this.blue];
  }

  constructor(flavour: ColourFlavour, red: T, green: T, blue: T) {
    this.flavour = flavour;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
}

class Colour {
  name?: string;
  int: Rgb<number>;
  hex: Rgb<string>;
  percentage: Rgb<string>;
  toString(flavour = ColourFlavour.Hex) {
    switch (flavour) {
      case ColourFlavour.Hex:
        return this.hex.toString();
      case ColourFlavour.Int:
        return this.int.toString();
      case ColourFlavour.Percentage:
        return this.percentage.toString();
      case ColourFlavour.Name:
        return this.name ?? "";
      default:
        return "";
    }
  }
  toArray(flavour: ColourFlavour) {
    switch (flavour) {
      case ColourFlavour.Hex:
        return this.hex.toArray();
      case ColourFlavour.Int:
        return this.int.toArray();
      case ColourFlavour.Percentage:
        return this.percentage.toArray();
      case ColourFlavour.Name:
        return [...(this.name ?? "")];
      default:
        return [];
    }
  }
  equals(other: Colour) {
    return (
      this.int.red === other.int.red &&
      this.int.green === other.int.green &&
      this.int.blue === other.int.blue
    );
  }

  constructor(red: number, green: number, blue: number, name?: string) {
    this.name = name;

    this.int = new Rgb<number>(ColourFlavour.Int, red, green, blue);

    this.hex = new Rgb<string>(
      ColourFlavour.Hex,
      ColourService.IntToHex(red),
      ColourService.IntToHex(green),
      ColourService.IntToHex(blue)
    );

    this.percentage = new Rgb<string>(
      ColourFlavour.Percentage,
      `${Math.round((red / 255) * 100)}%`,
      `${Math.round((green / 255) * 100)}%`,
      `${Math.round((blue / 255) * 100)}%`
    );
  }
}

export default Colour;
