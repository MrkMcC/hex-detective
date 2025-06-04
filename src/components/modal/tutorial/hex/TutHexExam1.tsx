import Blue from "../../../common/colour/text/Blue";
import Green from "../../../common/colour/text/Green";
import Red from "../../../common/colour/text/Red";
import Localise from "../../../common/Localise";

const TutHexExam1 = () => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        <Localise>TUTORIAL/HEX/EXAM/PAGE_1/P_1</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/EXAM/PAGE_1/P_2</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/EXAM/PAGE_1/P_3</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/EXAM/PAGE_1/P_4</Localise>
      </p>
      <p>
        <Localise
          placeholders={[
            <>
              (<Red>FF</Red>, <Green>FF</Green>, <Blue>FF</Blue>)
            </>,
            <>
              #<Red>FF</Red>
              <Green>FF</Green>
              <Blue>FF</Blue>
            </>,
            <>
              #<Red>ff</Red>
              <Green>ff</Green>
              <Blue>ff</Blue>
            </>,
          ]}
        >
          TUTORIAL/HEX/EXAM/PAGE_1/P_5
        </Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/EXAM/PAGE_1/P_6</Localise>
      </p>
      <p>
        <Localise>TUTORIAL/HEX/EXAM/PAGE_1/P_7</Localise>
      </p>
    </div>
  );
};

export default TutHexExam1;
