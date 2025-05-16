import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa6";

interface Props {
  completed: boolean;
  children: ReactNode;
}

const TutorialTask = ({ completed, children }: Props) => {
  return (
    <p className={`tutorial-task ${completed ? "complete" : "incomplete"}`}>
      {children}
      <FaCheck className={`icon check-mark`} />
    </p>
  );
};

export default TutorialTask;
