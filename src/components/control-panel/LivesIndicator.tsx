import { ReactNode } from "react";
import { FaRegFaceGrinBeam, FaRegFaceGrinBeamSweat } from "react-icons/fa6";

interface Props {
  current: number;
  max: number;
}

const LivesIndicator = ({ current, max }: Props) => {
  const lifeElements: ReactNode[] = [];

  for (let index = 0; index < max; index++) {
    const isDepleted = index < max - current;
    lifeElements.push(
      <div key={index} className={isDepleted ? "depleted" : "held"}>
        {isDepleted ? (
          <FaRegFaceGrinBeamSweat className="icon" />
        ) : (
          <FaRegFaceGrinBeam className="icon" />
        )}
      </div>
    );
  }

  return (
    <div className="lives-indicator text-center">
      <h3>Lives</h3>
      <div className="lives">{lifeElements}</div>
    </div>
  );
};

export default LivesIndicator;
