import ColourService from "../../../../services/ColourService";

interface Props {}

const HexTutorialPage5 = ({}: Props) => {
  return (
    <div
      className="hex-tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>
        Hex is short for 'hexadecimal' (hexa=six and decem=ten). It's also known
        as 'base 16'.
      </p>
      <p>
        We normally use a base 10 (or decimal) counting system. That means we
        have 10 digits (0-9).
      </p>
      <p>Base 10: 0 1 2 3 4 5 6 7 8 9</p>
      <p>
        The hexadecimal system has 16 digits. The extra digits are represented
        by the letters A-F. <br />
        That means we can count higher using a single digit.
      </p>
      <p>Base 16: 0 1 2 3 4 5 6 7 8 9 A B C D E F</p>
    </div>
  );
};

export default HexTutorialPage5;
