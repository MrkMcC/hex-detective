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
            Find the suspect{" "}
            <BsIncognito className="icon color-grey valign-text-top" />
          </>
        );
      case GameStatus.Scored:
        return (
          <>
            Correct <FaCheck className="icon color-green" />
          </>
        );
      case GameStatus.Failed:
        return (
          <>
            Incorrect <FaXmark className="icon color-red" />
          </>
        );
    }
  };

  return <h1 className="status-text">{getStatusMessage()}</h1>;
};

export default StatusText;
