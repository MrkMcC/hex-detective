import { BsIncognito } from "react-icons/bs";
import GameStatus from "../../enum/GameStatus";

interface Props {
  state: GameStatus;
}

const StatusText = ({ state }: Props) => {
  const getStatusMessage = () => {
    switch (state) {
      case GameStatus.InProgress:
        return "Find the suspect";
      case GameStatus.Scored:
        return "Correct!";
      case GameStatus.GameOver:
        return "Game over";
    }
  };

  return (
    <h2 className="status">
      <BsIncognito className="icon" />
      {getStatusMessage()}
      <BsIncognito className="icon" />
    </h2>
  );
};

export default StatusText;
