import ColourGenerationBias from "../../classes/ColourGenerationBias";
import HueDifferenceBias from "../../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../../enum/colour-generation-bias/SaturationBias";
import ValueBias from "../../enum/colour-generation-bias/ValueBias";
import ColourService from "../../services/ColourService";

interface Props {}

const Title = ({}: Props) => {
  const title = ["#", "he", "x-", "de", "te", "ct", "iv", "e"];
  const letterElements = title.map((c, i) => (
    <span
      key={i}
      style={{
        color: ColourService.RandomColour(
          new ColourGenerationBias(
            IncrementBias.None,
            SaturationBias.Strong,
            HueDifferenceBias.None,
            ValueBias.Extreme
          )
        ).hex.toString(),
      }}
    >
      {c}
    </span>
  ));

  return <h1 className="title">{letterElements}</h1>;
};

export default Title;
