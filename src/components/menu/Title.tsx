import ColourBiasPercentage from "../../classes/ColourBiasPercentage";
import ColourGenerationBias from "../../classes/ColourGenerationBias";
import ColourService from "../../services/ColourService";

const Title = () => {
  const title = ["#", "he", "x-", "de", "te", "ct", "iv", "e"];
  const letterElements = title.map((c, i) => (
    <span
      key={i}
      style={{
        color: ColourService.RandomColour(
          new ColourGenerationBias(
            undefined,
            new ColourBiasPercentage(0.5),
            new ColourBiasPercentage(0.25)
          )
        ).hex.toString(),
      }}
    >
      {c}
    </span>
  ));

  return <h1 className="title text-center">{letterElements}</h1>;
};

export default Title;
