import ColourService from "../../services/ColourService";

interface Props {}

const HowToPlay = ({}: Props) => {
  return (
    <div
      className="how-to-play ui-panel"
      style={{
        borderTopColor: ColourService.RandomColour(),
        borderRightColor: ColourService.RandomColour(),
        borderBottomColor: ColourService.RandomColour(),
        borderLeftColor: ColourService.RandomColour(),
      }}
    >
      <div className="header">
        <h1>How to Play</h1>
      </div>
      <div className="general-instructions">
        <p>Your goal is to find the suspect in a crowd of people.</p>
        <p>You have a description of the suspect's clothing.</p>
        <p>However, the colours are described hex codes.</p>
        <p>
          You can accuse the suspect directly, or rule out people one by one.
        </p>
        <p>Find a suspect to score a point.</p>
        <p>Accuse the wrong person and it's game over.</p>
      </div>
    </div>
  );
};

export default HowToPlay;
