import Localise from "../../../common/Localise";
import SimulationFrame from "../SimulationFrame";

const TutColExam2 = () => {
  return (
    <div className="tutorial font-sans-serif">
      <p className="text-center">
        <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/P_1</Localise>
      </p>
      <p className="text-center">
        <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/P_2</Localise>
      </p>
      <div className="flex-row wrap gap-1 justify-center ">
        <SimulationFrame>
          <div className="flex-col justify-center align-center">
            <p className="m-0">
              <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/ADVICE_HEADER</Localise>
            </p>
            <ul className="gap-1">
              <li>
                <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/ADVICE_1</Localise>
              </li>
              <li>
                <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/ADVICE_2</Localise>
              </li>
              <li>
                <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/ADVICE_3</Localise>
              </li>
              <li>
                <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/ADVICE_4</Localise>
              </li>
              <li>
                <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/ADVICE_5</Localise>
              </li>
              <li>
                <Localise>TUTORIAL/COLOURS/EXAM/PAGE_2/ADVICE_6</Localise>
              </li>
            </ul>
          </div>
        </SimulationFrame>
      </div>
    </div>
  );
};

export default TutColExam2;
