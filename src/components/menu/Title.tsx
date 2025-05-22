import SaturationBias from "../../enum/colour-generation-bias/SaturationBias";
import ColourService from "../../services/ColourService";

interface Props {}

const Title = ({}: Props) => {
  const title = ["#", "he", "x-", "de", "te", "ct", "iv", "e"];
  const letterElements = title.map((c, i) => (
    <span
      key={i}
      style={{
        color: ColourService.RandomColour(SaturationBias.Strong).hex.toString(),
      }}
    >
      {c}
    </span>
  ));

  return <h1 className="title">{letterElements}</h1>;
};

export default Title;
