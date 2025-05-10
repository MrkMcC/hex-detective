import GameStatus from "../../enum/GameStatus";

interface Props {
  state: GameStatus;
}

const StatusText = ({ state }: Props) => {
  const getStatusMessage = () => {
    switch (state) {
      case GameStatus.InProgress:
        return "Find the suspect";
      case GameStatus.GameOver:
        return "You lost";
    }
  };

  return <h2 className="status">{getStatusMessage()}</h2>;
};

export default StatusText;
