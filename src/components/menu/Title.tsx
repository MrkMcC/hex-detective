import ColourBiasPercentage from "../../classes/ColourBiasPercentage";
import ColourGenerationBias from "../../classes/ColourGenerationBias";
import ColourService from "../../services/ColourService";

const Title = () => {
  const title = [
    "#",
    "H",
    "e",
    "x",
    "D",
    "e",
    "t",
    "e",
    "c",
    "t",
    "i",
    "v",
    "e",
  ];
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

  return (
    <h1 className="title title-responsive text-center">{letterElements}</h1>
  );
};

export default Title;
