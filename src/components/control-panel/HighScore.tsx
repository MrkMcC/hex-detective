import SessionDataT from "../../types/SessionDataT";

interface Props {
  sessionData: SessionDataT;
}

const HighScore = ({ sessionData }: Props) => {
  return (
    <div className="score">
      <h2>Your Score: {sessionData.roundsWon}</h2>
    </div>
  );
};

export default HighScore;
