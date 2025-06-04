import Green from "../../../common/colour/text/Green";
import Red from "../../../common/colour/text/Red";
import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutHexLetters1 = () => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/HEX/LETTERS/PAGE_1/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/LETTERS/PAGE_1/P_2</Localise>
      </p>
      <SimulationFrame>
        <p className="m-0 font-mono">
          <Green>0 1 2 3 4 5 6 7 8 9</Green> <Red>10 11 12 13 14 15</Red>
        </p>
      </SimulationFrame>
      <p>
        <Localise>TUTORIAL/HEX/LETTERS/PAGE_1/P_3</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/LETTERS/PAGE_1/P_4</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/LETTERS/PAGE_1/P_5</Localise>
      </p>
    </div>
  );
};

export default TutHexLetters1;
