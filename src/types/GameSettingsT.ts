/**Settings that can be changed before the game, but not during it. */
//difficulty templates are defined in the upcoming difficulty selection component, not here
type GameSettingsT = {
  tutorial: boolean;
  crowdSizeInitial: number;
  crowdSizeIncrement: number;
};

export default GameSettingsT;
