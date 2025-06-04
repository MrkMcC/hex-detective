import { BsIncognito } from "react-icons/bs";
import { FaCheck, FaXmark } from "react-icons/fa6";
import GameStatus from "../../enum/GameStatus";
import Localise from "../common/Localise";

interface Props {
  state: GameStatus;
}

const StatusText = ({ state }: Props) => {
  const getStatusMessage = () => {
    switch (state) {
      case GameStatus.InProgress:
        return (
          <>
            <Localise>CONTROLBAR/SUSPECTINFO/STATUS_IN_PROGRESS</Localise>{" "}
            <BsIncognito className="icon color-grey valign-text-top" />
          </>
        );
      case GameStatus.Scored:
        return (
          <>
            <Localise>CONTROLBAR/SUSPECTINFO/STATUS_SCORED</Localise>{" "}
            <FaCheck className="icon color-green" />
          </>
        );
      case GameStatus.Failed:
        return (
          <>
            <Localise>CONTROLBAR/SUSPECTINFO/STATUS_FAILED</Localise>{" "}
            <FaXmark className="icon color-red" />
          </>
        );
      case GameStatus.GameOver:
        return (
          <>
            <Localise>CONTROLBAR/SUSPECTINFO/STATUS_GAME_OVER</Localise>{" "}
            <FaXmark className="icon color-red" />
          </>
        );
    }
  };

  return <h1 className="status-text">{getStatusMessage()}</h1>;
};

export default StatusText;
