type SettingsStateT = {
  tutorial: boolean;
  crowdSizeInitial: number;
  crowdSizeIncrement: number;
};

/**Settings that can be changed before the game, but not during it. */
//difficulty templates are defined in the upcoming difficulty selection component, not here
class GameSettings {
  parameters: SettingsStateT = {
    tutorial: false,
    crowdSizeInitial: 5,
    crowdSizeIncrement: 5,
  };

  valid() {
    const valid_crowdSizeInitial =
      this.parameters.crowdSizeInitial > 1 &&
      this.parameters.crowdSizeInitial < 101;
    const valid_crowdSizeIncrement =
      this.parameters.crowdSizeIncrement >= 0 &&
      this.parameters.crowdSizeIncrement < 26;

    return valid_crowdSizeInitial && valid_crowdSizeIncrement;
  }

  constructor(params?: SettingsStateT) {
    if (params) this.parameters = params;
  }
}

export default GameSettings;
