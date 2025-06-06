import ColourFlavour from "../enum/ColourFlavour";
import MathHelper from "../helper/MathHelper";
import ColourService from "../services/ColourService";
import LocalisationService from "../services/LocalisationService";
import LogService from "../services/LogService";

class Rgb<T> {
  flavour: ColourFlavour;
  red: T;
  green: T;
  blue: T;
  toString() {
    if (this.flavour == ColourFlavour.Hex)
      return `#${this.red}${this.green}${this.blue}`.toUpperCase();
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
        return this.name
          ? LocalisationService.GetLocalisedText(
              `COLOURS/${this.name}`,
              true
            ) ?? this.name
          : "";
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
    if (
      !MathHelper.IsInteger(red) ||
      !MathHelper.IsInteger(green) ||
      !MathHelper.IsInteger(blue) ||
      !MathHelper.IsWithinRange(red, 0, 255) ||
      !MathHelper.IsWithinRange(green, 0, 255) ||
      !MathHelper.IsWithinRange(blue, 0, 255)
    )
      throw LogService.Error(
        "Colour",
        "Constructor received an unexcepted input. Expected integer in range 0-255.",
        red,
        green,
        blue,
        name
      );

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
