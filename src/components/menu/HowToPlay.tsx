interface Props {}

const HowToPlay = ({}: Props) => {
  return (
    <div className="how-to-play ui-panel">
      <div className="header">
        <h1>How to Play</h1>
      </div>
      <div className="general-instructions">
        <p>Your goal is to find the suspect in a crowd of people.</p>
        <p>You have a description of the suspect's clothing.</p>
        <p>The catch: The description uses hex codes.</p>
        <p>
          You can accuse the suspect directly, or rule out people one by one.
        </p>
      </div>
    </div>
  );
};

export default HowToPlay;
