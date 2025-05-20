import SessionDataT from "../../types/SessionDataT";

interface Props {
  gameData: SessionDataT;
}

const HighScore = ({ gameData }: Props) => {
  return (
    <div className="score">
      <h2>Your Score: {gameData.roundsWon}</h2>
    </div>
  );
};

export default HighScore;
