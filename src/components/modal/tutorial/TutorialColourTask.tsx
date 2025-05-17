import { FaCheck } from "react-icons/fa";
import Colour from "../../../classes/Colour";

interface Props {
  colour: Colour;
  completed: boolean;
}

const TutorialColourTask = ({ colour, completed }: Props) => {
  return (
    <div
      className={`tutorial-task tutorial-colour-task ${
        completed ? "complete" : "incomplete"
      }`}
    >
      <div className="dot" style={{ backgroundColor: colour.toString() }}>
        <FaCheck className={`icon check-mark`} />
      </div>
    </div>
  );
};

export default TutorialColourTask;
