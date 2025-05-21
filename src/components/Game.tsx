import { useEffect, useState } from "react";
import Crowd from "../classes/Crowd";
import CustomFlavour from "../classes/CustomFlavour";
import DifficultyConfig from "../classes/DifficultyConfig";
import UserSettings from "../classes/UserSettings";
import ColourFlavour from "../enum/ColourFlavour";
import ControlAction from "../enum/ControlAction";
import SuspectSelectionMode from "../enum/SuspectSelectionMode";
import TutorialStage from "../enum/TutorialStage";
import ColourService from "../services/ColourService";
import TutorialService from "../services/TutorialService";
import RoundDataT from "../types/RoundDataT";
import SessionDataT from "../types/SessionDataT";
import TutorialProgress from "../types/TutorialProgress";
import SuspectInfoOptionsT from "../types/components/SuspectInfoOptionsT";
import GameStatus from "./../enum/GameStatus";
import PersonService from "./../services/PersonService";
import Person from "./Person";
import ControlBar from "./control-panel/ControlBar";

interface Props {
  status: GameStatus;
  settings: UserSettings;
  difficulty: DifficultyConfig;
  onChangeStatus: (status: GameStatus) => void;
  onChangeSettings: (settings: UserSettings) => void;
}

const initialSessionData: SessionDataT = {
  roundsWon: 0,
  tutorialProgress: null,
};

function Game({
  status,
  settings,
  difficulty,
  onChangeStatus,
  onChangeSettings,
}: Props) {
  const [sessionData, setSessionData] = useState<SessionDataT>({
    ...initialSessionData,
  });
  const [roundData, setRoundData] = useState<RoundDataT>({
    accusedPersonId: null,
    selectionMode: SuspectSelectionMode.Accuse,
  });
  const [suspectInfoOptions, setSuspectInfoOptions] =
    useState<SuspectInfoOptionsT>({});

  //#region Shorthand State Setters
  const setAccusedPersonId = (id: string | null) =>
    setRoundData((prev) => ({ ...prev, accusedPersonId: id }));
  const setSelectionMode = (mode: SuspectSelectionMode) => {
    setRoundData((prev) => ({ ...prev, selectionMode: mode }));
  };
  const setCrowd = (crowd?: Crowd) => {
    setRoundData((prev) => ({ ...prev, crowd: crowd }));
  };
  const setTutorialProgress = (state: TutorialProgress | null) =>
    setSessionData((prev) => ({ ...prev, tutorialProgress: state }));
  const toggleRuleOut = (id: string) => {
    setRoundData((prev) => ({
      ...prev,
      crowd: new Crowd(
        prev.crowd!.people.map((p) =>
          p.id === id ? { ...p, ruledOut: !p.ruledOut } : p
        ),
        prev.crowd?.suspectId!
      ),
    }));
  };
  const hideRuledOut = () => {
    setRoundData((prev) => ({
      ...prev,
      crowd: new Crowd(
        prev.crowd!.people.map((p) => ({ ...p, hidden: p.ruledOut })),
        prev.crowd?.suspectId!
      ),
    }));
  };
  const unhideAll = () => {
    setRoundData((prev) => ({
      ...prev,
      crowd: new Crowd(
        prev.crowd!.people.map((p) => ({ ...p, hidden: false })),
        prev.crowd?.suspectId!
      ),
    }));
  };
  const ruleInAll = () => {
    setRoundData((prev) => ({
      ...prev,
      crowd: new Crowd(
        prev.crowd!.people.map((p) => ({
          ...p,
          hidden: false,
          ruledOut: false,
        })),
        prev.crowd?.suspectId!
      ),
    }));
  };
  /**Resets the session, but remembers the current tutorial stage.*/
  const restartStage = () => {
    setSessionData((prev) => ({
      ...initialSessionData,
      tutorialProgress: !!prev.tutorialProgress
        ? { ...sessionData.tutorialProgress!, round: 1 }
        : null,
    }));
  };
  const setNextTutorialStage = () => {
    setSessionData((prev) => {
      let nextProgress: TutorialProgress;
      if (prev.tutorialProgress!.round >= 3) {
        nextProgress = {
          stage: prev.tutorialProgress!.stage + 1,
          round: 1,
        };
      } else
        nextProgress = {
          ...prev.tutorialProgress!,
          round: prev.tutorialProgress!.round + 1,
        };
      return { ...prev, tutorialProgress: nextProgress };
    });
  };
  //#endregion

  //#region Shorthand variables
  const isRoundInProgress = status === GameStatus.InProgress;
  //#endregion

  const initialiseRoundState = (resetProgress = false) => {
    if (resetProgress) restartStage();
    setSuspectInfoOptions((prev) => ({ ...prev, revealColours: false }));
    setAccusedPersonId(null);
    setSelectionMode(SuspectSelectionMode.Accuse);
    onChangeStatus(GameStatus.InProgress);
    setCrowd(undefined);

    if (!resetProgress && sessionData.tutorialProgress !== null) {
      setNextTutorialStage();
    }
  };

  const score = () => {
    onChangeStatus(GameStatus.Scored);
    let roundsWon = sessionData.roundsWon + 1;
    setSessionData((prev) => ({ ...prev, roundsWon: roundsWon }));
  };

  const fail = () => {
    onChangeStatus(GameStatus.Failed);
  };

  const accuse = (personId: string) => {
    if (isRoundInProgress) {
      setAccusedPersonId(personId);
      setSuspectInfoOptions((prev) => ({ ...prev, revealColours: true }));
      if (personId === roundData.crowd!.suspectId) {
        score();
      } else fail();
    }
  };

  //#region Event Handling
  const handleSelect = (personId: string) => {
    switch (roundData.selectionMode) {
      case SuspectSelectionMode.RuleOut:
        toggleRuleOut(personId);
        break;
      case SuspectSelectionMode.Accuse:
        accuse(personId);
        break;
    }
  };

  const handleControlAction = (action: ControlAction) => {
    switch (action) {
      case ControlAction.HideRuledOut:
        hideRuledOut();
        break;
      case ControlAction.UnhideAll:
        unhideAll();
        break;
      case ControlAction.ResetRuledOut:
        ruleInAll();
        break;
      case ControlAction.NextRound:
        initialiseRoundState();
        break;
      case ControlAction.Restart:
        initialiseRoundState(true);
        break;
      case ControlAction.QuitSession:
        onChangeStatus(GameStatus.Setup);
        break;
    }
  };
  const handleChangeSettings = (settings: UserSettings) => {
    onChangeSettings(settings);
  };
  const handleChangeRoundData = (roundData: RoundDataT) => {
    setRoundData(roundData);
  };
  //#endregion

  //#region tutorial
  const setupTutorialRound = () => {
    if (sessionData.tutorialProgress === null) {
      setTutorialProgress({
        stage: TutorialStage.Basics_Scoring,
        round: 1,
      });
      return;
    }

    const newCrowd = TutorialService.GenerateCrowd(
      sessionData.tutorialProgress
    );

    switch (sessionData.tutorialProgress.stage) {
      case TutorialStage.Basics_Scoring:
      case TutorialStage.Basics_SelectionMode:
      case TutorialStage.Colours_Brightness:
      case TutorialStage.Colours_Complementary:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Name,
        }));
        break;
      case TutorialStage.Colours_PercNotation:
      case TutorialStage.Colours_Saturation:
      case TutorialStage.Colours_Imbalance:
      case TutorialStage.Colours_Exam:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Percentage,
        }));
        break;
      case TutorialStage.Hex_ChangingScale:
        const convertToInt16 = (int: number) => (int / 255) * 15;
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: new CustomFlavour((int: number) =>
            convertToInt16(int).toString()
          ),
        }));
        break;
      case TutorialStage.Hex_Letters:
        const convertToBase16 = (int: number) =>
          ((int / 255) * 15).toString(16).toUpperCase();
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: new CustomFlavour((int: number) =>
            convertToBase16(int).toUpperCase()
          ),
        }));
        break;
      case TutorialStage.Hex_DoubleDigits:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: new CustomFlavour((int: number) =>
            ColourService.IntToHex(int).toUpperCase()
          ),
        }));
        break;
      case TutorialStage.Hex_Exam:
      case TutorialStage.Done:
      default:
        setSuspectInfoOptions((prev) => ({
          ...prev,
          flavour: ColourFlavour.Hex,
        }));
        break;
    }
    setCrowd(newCrowd);
  };
  useEffect(() => {
    if (
      sessionData.tutorialProgress !== null &&
      sessionData.tutorialProgress.round === 1
    )
      TutorialService.ShowModal(sessionData.tutorialProgress.stage);
  }, [sessionData.tutorialProgress]);
  //#endregion

  //#region Game State
  const startNewRound = () => {
    if (difficulty.parameters.tutorial) setupTutorialRound();
    else {
      const newCrowd = PersonService.RandomCrowd(
        difficulty.parameters.crowdSizeInitial +
          difficulty.parameters.crowdSizeIncrement * sessionData.roundsWon
      );
      setCrowd(newCrowd);
    }

    setAccusedPersonId(null);
    if (!isRoundInProgress) onChangeStatus(GameStatus.InProgress);
  };

  const tryStartNextRound = () => {
    if (roundData.crowd === undefined) {
      startNewRound();
    }
  };
  tryStartNextRound();
  //#endregion

  //#region Component Construction
  const personElements = roundData.crowd?.people.map((p) => (
    <Person
      key={p.id}
      person={p}
      disabled={
        roundData.accusedPersonId !== null ||
        (p.ruledOut && roundData.selectionMode !== SuspectSelectionMode.RuleOut)
      }
      isAccused={roundData.accusedPersonId === p.id}
      isRevealedSuspect={
        (status === GameStatus.Failed || status === GameStatus.Scored) &&
        p.id === roundData.crowd!.getSuspect()!.id
      }
      onSelect={handleSelect}
    />
  ));
  //#endregion

  return (
    <div className="game-session">
      <div className="people-container">
        <div className="people">{personElements}</div>
      </div>
      <ControlBar
        key={roundData.accusedPersonId}
        gameStatus={status}
        difficulty={difficulty}
        settings={settings}
        sessionData={sessionData}
        roundData={roundData}
        suspectInfoOptions={suspectInfoOptions}
        onControlAction={handleControlAction}
        onChangeSettings={handleChangeSettings}
        onChangeRoundData={handleChangeRoundData}
      />
    </div>
  );
}

export default Game;
