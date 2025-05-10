import GameStatus from "../../enum/GameStatus";

interface Props {
  state: GameStatus;
}

const StatusText = ({ state }: Props) => {
  const getStatusMessage = () => {
    switch (state) {
      case GameStatus.Won:
        return "You found the witch";
      case GameStatus.GameOver:
        return "You lost";
      case GameStatus.InProgress:
        return "Find the witch";
    }
  };

  return <h2 className="status">{getStatusMessage()}</h2>;
};

export default StatusText;
