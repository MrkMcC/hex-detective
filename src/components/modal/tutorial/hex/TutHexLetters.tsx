import Red from "../../../common/Red";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutHexLetters1 = ({}: Props) => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>Something is bothering me about our new scale...</p>
      <p>
        If we go above 9, we need a whole new digit just for the last 6 values.
      </p>
      <SimulationFrame>
        <p className="m-0">
          1 2 3 4 5 6 7 8 9 <Red>1</Red>0 <Red>1</Red>1 <Red>1</Red>2{" "}
          <Red>1</Red>3 <Red>1</Red>4 <Red>1</Red>5
        </p>
      </SimulationFrame>
      <p>A second digit? In this economy?</p>
      <p>
        I'm sure you agree it would be better if we could count to 15 using only
        one digit.
      </p>
      <p>Well, we can.</p>
    </div>
  );
};

export default TutHexLetters1;
