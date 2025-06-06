import HexDetectiveEvent from "../enum/HexDetectiveEvent";
import EventService from "./EventService";
import LogService from "./LogService";

/* eslint-disable no-var */
declare global {
  var sv_cheats: number;
  var hxd: DebugController;
}

Object.defineProperty(globalThis, "sv_cheats", {
  configurable: true,
  get() {
    return debugParameters.CheatingEnabled;
  },
  set(value: number) {
    debugParameters.CheatingEnabled = Boolean(value);
    EventService.Emit(HexDetectiveEvent.SettingsChanged);
  },
});

const LOG_SUBJECT_CONSOLE_COMMAND = "Console Command";
const MSG_CHEATS_NOT_ENABLED = "cheats must be enabled to toggle this setting";

const debugParameters = {
  CheatingEnabled: false,
  RevealSolution: false,
  UnrestrictDifficultySettings: false,
  MissingTextsAsKeys: false,
  MockMissingTexts: false,
};

const areCheatsEnabled = () => Boolean(globalThis.sv_cheats);

const attemptCheating = () => {
  if (!areCheatsEnabled())
    LogService.Error(LOG_SUBJECT_CONSOLE_COMMAND, MSG_CHEATS_NOT_ENABLED);
  return areCheatsEnabled();
};

const notifyOfChange = (
  value: boolean,
  setting: string,
  explanation: string
) => {
  EventService.Emit(HexDetectiveEvent.SettingsChanged);
  return `${setting} ${value ? `enabled - ${explanation}` : "disabled"}`;
};

class DebugController {
  /**Reveal solution (toggle) */
  public get clairvoyance() {
    if (attemptCheating()) {
      return notifyOfChange(
        (debugParameters.RevealSolution = !debugParameters.RevealSolution),
        "clairvoyance",
        "the solution will be revealed"
      );
    }
  }
  /**Unrestrict difficulty settings (toggle)*/
  public get tinker() {
    if (attemptCheating())
      return notifyOfChange(
        (debugParameters.UnrestrictDifficultySettings =
          !debugParameters.UnrestrictDifficultySettings),
        "tinker",
        "removes restrictions on difficulty settings (unsafe)"
      );
  }
  /**Missing texts as keys (toggle)*/
  public get localiseIt() {
    return notifyOfChange(
      (debugParameters.MissingTextsAsKeys =
        !debugParameters.MissingTextsAsKeys),
      "localiseIt",
      "shows the resource key of missing texts"
    );
  }
  /**Missing texts as keys (toggle)*/
  public get qué() {
    return notifyOfChange(
      (debugParameters.MockMissingTexts = !debugParameters.MockMissingTexts),
      "qué",
      "removes all localisation"
    );
  }
}

globalThis.hxd = new DebugController();

const DebugService = {
  ReadSettings: () => ({
    CheatsEnabled: areCheatsEnabled(),
    RevealSolution: areCheatsEnabled() && debugParameters.RevealSolution,
    UnrestrictDifficultySettings:
      areCheatsEnabled() && debugParameters.UnrestrictDifficultySettings,
    MissingTextsAsKeys: debugParameters.MissingTextsAsKeys,
    MockMissingTexts: debugParameters.MockMissingTexts,
  }),
};

export default DebugService;
