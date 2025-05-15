import ColourService from "../../../services/ColourService";
import BaseIndicator from "./BaseIndicator";

interface Props {}

const HexTutorialPage6 = ({}: Props) => {
  return (
    <div
      className="hex-tutorial font-sans-serif text-center"
      style={ColourService.RandomBorderColourStyle()}
    >
      <p>
        In base 10, if we want to count higher than 9, we need a second digit.
      </p>
      <BaseIndicator label="base 10">
        9 + 1 = 10
        <br />
        10 + 1 = 11
        <br />
        11 + 1 = 12
      </BaseIndicator>
      <p>In base 16, we just use the letter A to represent that amount.</p>

      <BaseIndicator label="base 16">
        9 + 1 = A<br />A + 1 = B<br />B + 1 = C
      </BaseIndicator>
      <p>If we want to count higher than F(15).</p>
      <p>F + 1 = 10</p>
      <p>
        This number looks like a normal 10, but because we are counting in hex,
        it's actually a 16.
      </p>
      <table>
        <tbody>
          <tr>
            <td>Base 16:</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Base 10:</td>
            <td>0</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HexTutorialPage6;
