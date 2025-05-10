import PersonT from "../types/PersonT";

const getOnlyRemainingSuspect = (people: PersonT[]) => {
  const suspects = people.filter((p) => !p.ruledOut);
  if (suspects.length === 1) {
    return suspects[0];
  } else return undefined;
};

/** This service is all about the Game State. */
const GameService = {
  /** If all but one person are ruled out, this returns that one last person. */
  GetOnlyRemainingSuspect: getOnlyRemainingSuspect,
};

export default GameService;
