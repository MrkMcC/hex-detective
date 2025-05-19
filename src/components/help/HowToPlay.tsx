import ColourService from "../../services/ColourService";

interface Props {}

const HowToPlay = ({}: Props) => {
  return (
    <div
      className="how-to-play ui-panel"
      style={ColourService.RandomBorderColourStyle()}
    >
      <div className="header">
        <h1>How to Play</h1>
      </div>
      <div className="general-instructions">
        <p>Your goal is to find the suspect in a crowd of people.</p>
        <p>You have a description of their clothing.</p>
        <p>However, the colours are described hex codes.</p>
        <p>Find a suspect to score a point.</p>
        <p>Accuse the wrong person and it's game over.</p>
      </div>
    </div>
  );
};

export default HowToPlay;
