import DifficultyConfig from "../../classes/DifficultyConfig";
import RoundDataT from "../../types/RoundDataT";
import SessionDataT from "../../types/SessionDataT";
import Localise from "../common/Localise";

interface Props {
  difficulty: DifficultyConfig;
  sessionData: SessionDataT;
  roundData: RoundDataT;
}

const SessionInfo = ({ difficulty, sessionData, roundData }: Props) => {
  const crowdSize = roundData.crowd?.people.length;
  const hiddenCount = roundData.crowd?.people.filter((p) => p.hidden).length;
  const ruledOutCount = roundData.crowd?.people.filter(
    (p) => p.ruledOut
  ).length;

  return (
    <div className="session-info">
      <p>
        <Localise>CONTROLBAR/SESSIONINFO/LBL_SCORE</Localise>{" "}
        {sessionData.roundsWon}
      </p>
      <p>
        <Localise>CONTROLBAR/SESSIONINFO/LBL_LIVES</Localise>{" "}
        {sessionData.lives >= 1 ? "O" : "X"}{" "}
        {sessionData.lives >= 2 ? "O" : "X"}{" "}
        {sessionData.lives >= 3 ? "O" : "X"}
      </p>
      <p>
        <Localise>CONTROLBAR/SESSIONINFO/LBL_DIFFICULTY</Localise>{" "}
        <Localise>DIFFICULTY/{difficulty.key}/NAME</Localise>
      </p>
      <p>
        <Localise>CONTROLBAR/SESSIONINFO/LBL_CROWD_SIZE</Localise> {crowdSize}
      </p>
      <p>
        <Localise>CONTROLBAR/SESSIONINFO/LBL_HIDDEN_RULED_OUT</Localise>{" "}
        {hiddenCount}/{ruledOutCount}
      </p>
    </div>
  );
};

export default SessionInfo;
