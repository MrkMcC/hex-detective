import Blue from "../../../common/Blue";
import Green from "../../../common/Green";
import Red from "../../../common/Red";

interface Props {}

const TutHexExam1 = ({}: Props) => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        The number system we have been using is known as the hexadecimal system.
      </p>
      <p>Hexa-decem is half greek, half latin and means 16.</p>
      <p>
        It's also known as base-16, because of it's 16 digits, while our
        everyday numeral system is called base-10.
      </p>
      <p>
        The hexadecimal system - or hex for short - is commonly used by programs
        such as internet browsers.
      </p>
      <p>
        Instead of (<Red>FF</Red>, <Green>FF</Green>, <Blue>FF</Blue>), the
        common notation is #<Red>FF</Red>
        <Green>FF</Green>
        <Blue>FF</Blue> (or #<Red>ff</Red>
        <Green>ff</Green>
        <Blue>ff</Blue>).
      </p>
      <p>
        These hex colour codes can distinguish between 256 different levels of
        red, green and blue each, resulting in over 16 million possible colours.
      </p>
      <p>You are now capable of reading and writing them.</p>
    </div>
  );
};

export default TutHexExam1;
