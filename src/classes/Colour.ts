import ColourService from "../services/ColourService";

class Colour {
  int: {
    red: number;
    green: number;
    blue: number;
  };

  hex: {
    red: string;
    green: string;
    blue: string;
    toString: () => string;
  };

  percentage: {
    red: string;
    green: string;
    blue: string;
  };

  toString = () => this.hex.toString();

  constructor(red: number, green: number, blue: number) {
    this.int = {
      red: red,
      green: green,
      blue: blue,
    };

    this.hex = {
      red: ColourService.IntToHex(red),
      green: ColourService.IntToHex(green),
      blue: ColourService.IntToHex(blue),
      toString: () => `#${this.hex.red}${this.hex.green}${this.hex.blue}`,
    };

    this.percentage = {
      red: `${Math.round((red / 255) * 100)}%`,
      green: `${Math.round((green / 255) * 100)}%`,
      blue: `${Math.round((blue / 255) * 100)}%`,
    };
  }
}

export default Colour;
