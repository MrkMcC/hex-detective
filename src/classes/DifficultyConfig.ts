import Difficulty from "../enum/Difficulty";
import DebugService from "../services/DebugService";
import ColourGenerationBias from "./ColourGenerationBias";

type DifficultyStateT = {
  crowdSizeInitial: number;
  crowdSizeIncrement: number;
  colourGenerationBias: ColourGenerationBias;
};

/**Can be changed before starting the game, but not during it. */
class DifficultyConfig {
  key: Difficulty;
  parameters: DifficultyStateT;
  isTutorial = false;

  valid() {
    if (DebugService.ReadSettings().UnrestrictDifficultySettings) return true;

    const valid_crowdSizeInitial =
      this.parameters.crowdSizeInitial > 1 &&
      this.parameters.crowdSizeInitial < 101;
    const valid_crowdSizeIncrement =
      this.parameters.crowdSizeIncrement >= 0 &&
      this.parameters.crowdSizeIncrement < 26;

    return valid_crowdSizeInitial && valid_crowdSizeIncrement;
  }

  constructor(params: DifficultyStateT, key: Difficulty = Difficulty.Custom) {
    this.key = key;
    this.parameters = params;
    this.isTutorial = key === Difficulty.Tutorial;
  }
}

export default DifficultyConfig;
