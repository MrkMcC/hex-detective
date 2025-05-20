import { BsIncognito } from "react-icons/bs";
import { FaCheck, FaXmark } from "react-icons/fa6";
import GameStatus from "../../enum/GameStatus";

interface Props {
  state: GameStatus;
}

const StatusText = ({ state }: Props) => {
  const getStatusMessage = () => {
    switch (state) {
      case GameStatus.InProgress:
        return (
          <>
            <BsIncognito className="icon" /> Find the suspect
          </>
        );
      case GameStatus.Scored:
        return (
          <>
            <FaCheck className="icon color-green" /> Correct
          </>
        );
      case GameStatus.Failed:
        return (
          <>
            <FaXmark className="icon color-red" /> Incorrect
          </>
        );
    }
  };

  return <h1 className="status-text">{getStatusMessage()}</h1>;
};

export default StatusText;
