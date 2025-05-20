import Blue from "../../../common/colour/text/Blue";
import Green from "../../../common/colour/text/Green";
import Red from "../../../common/colour/text/Red";

interface Props {}

const TutHexExam1 = ({}: Props) => {
  return (
    <div className="tutorial font-sans-serif text-center">
      <p>
        The number system we have been using is known as the hexadecimal system.
      </p>
      <p>Hexa-decem is half greek, half latin and means 16.</p>
      <p>
        It's also known as "base 16", because of its 16 digits, while our
        regular numeral system is base 10.
      </p>
      <p>
        The hexadecimal system - or hex for short - is commonly used by
        applications such as internet browsers.
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
      <p>You are now capable of reading and writing these hex codes.</p>
    </div>
  );
};

export default TutHexExam1;
