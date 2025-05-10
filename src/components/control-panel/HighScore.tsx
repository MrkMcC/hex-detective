import GameDataT from "../../types/GameDataT";

interface Props {
  gameData: GameDataT;
}

const HighScore = ({ gameData }: Props) => {
  return (
    <div className="score">
      <h2>Your Score: {gameData.roundsWon}</h2>
    </div>
  );
};

export default HighScore;
