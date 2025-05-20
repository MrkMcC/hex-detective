import Crowd from "../classes/Crowd";
import SuspectSelectionMode from "../enum/SuspectSelectionMode";

type RoundDataT = {
  crowd?: Crowd;
  accusedPersonId: string | null;
  selectionMode: SuspectSelectionMode;
};

export default RoundDataT;
