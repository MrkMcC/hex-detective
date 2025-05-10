import PersonT from "../../types/PersonT";

interface Props {
  person: PersonT;
}

const Hat = ({ person }: Props) => {
  return (
    <div className="hat-container">
      <div className={`hat v-${person.variations.hat}`}>
        <div
          className="crown"
          style={{ backgroundColor: person.colours.hat }}
        ></div>
        <div
          className="brim"
          style={{ backgroundColor: person.colours.hat }}
        ></div>
      </div>
    </div>
  );
};

export default Hat;
