import { ReactNode } from "react";
import { BsIncognito } from "react-icons/bs";
import { FaCheck, FaXmark } from "react-icons/fa6";
import GameStatus from "../../enum/GameStatus";
import ClassHelper from "../../helper/ClassHelper";
import Localise from "../common/Localise";

interface Props {
  className?: string;
  compact: boolean;
  state: GameStatus;
}

const StatusText = ({ className, compact, state }: Props) => {
  const getStatusMessage = () => {
    const statusText = (
      <Localise>CONTROLBAR/SUSPECTINFO/STATUS/{state}/SHORT</Localise>
    );
    const description = (
      <Localise>CONTROLBAR/SUSPECTINFO/STATUS/{state}/DESCRIPTION</Localise>
    );
    let icon: ReactNode;

    switch (state) {
      case GameStatus.InProgress:
        icon = <BsIncognito className="icon color-grey valign-text-top" />;
        break;
      case GameStatus.Scored:
        icon = <FaCheck className="icon color-green" />;
        break;
      case GameStatus.Failed:
        icon = <FaXmark className="icon color-red" />;
        break;
      case GameStatus.GameOver:
        icon = <FaXmark className="icon color-red" />;
        break;
    }

    if (compact)
      return (
        <h1>
          {statusText} {icon}
        </h1>
      );
    else
      return (
        <>
          <h1 className="text-center">
            {icon}
            <br />
            {statusText}
          </h1>
          <div className="text-center">{description}</div>
        </>
      );
  };

  return (
    <div
      className={ClassHelper.Join(
        "status-text",
        compact ? "compact" : "expanded",
        className
      )}
    >
      {getStatusMessage()}
    </div>
  );
};

export default StatusText;
