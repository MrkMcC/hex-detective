import DifficultyConfig from "../../classes/DifficultyConfig";
import Localise from "../../services/Localise";
import RoundDataT from "../../types/RoundDataT";
import SessionDataT from "../../types/SessionDataT";

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
      <p>Score: {sessionData.roundsWon}</p>
      <p>
        Lives: {sessionData.lives >= 1 ? "O" : "X"}{" "}
        {sessionData.lives >= 2 ? "O" : "X"}{" "}
        {sessionData.lives >= 3 ? "O" : "X"}
      </p>
      <p>Difficulty: {Localise.Text(`DIFFICULTY/${difficulty.key}`)}</p>
      <p>Crowd Size: {crowdSize}</p>
      <p>
        Hidden / Ruled Out: {hiddenCount}/{ruledOutCount}
      </p>
    </div>
  );
};

export default SessionInfo;
