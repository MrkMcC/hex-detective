class ColourBiasPercentage {
  minimum: number;
  maximum: number;

  constructor(minimum?: number, maximum?: number) {
    this.minimum = minimum ?? 0;
    this.maximum = maximum ?? 1;
  }
}

export default ColourBiasPercentage;
