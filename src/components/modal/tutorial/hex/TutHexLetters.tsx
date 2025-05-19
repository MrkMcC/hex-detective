import Green from "../../../common/Green";
import Red from "../../../common/Red";
import SimulationFrame from "../SimulationFrame";

interface Props {}

const TutHexLetters1 = ({}: Props) => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>Something is bothering me about our new scale.</p>
      <p>
        Some values take up more space than others, because they use two digits.
      </p>
      <SimulationFrame>
        <p className="m-0 font-mono">
          <Green>0 1 2 3 4 5 6 7 8 9</Green> <Red>10 11 12 13 14 15</Red>
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
