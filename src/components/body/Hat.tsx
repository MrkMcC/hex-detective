import PersonData from "../../classes/PersonData";

interface Props {
  person: PersonData;
}

const Hat = ({ person }: Props) => {
  return (
    <div className="hat-container">
      <div className={`hat v-${person.variations.hat}`}>
        <div
          className="crown"
          style={{ backgroundColor: person.colours.hat.toString() }}
        ></div>
        <div
          className="brim"
          style={{ backgroundColor: person.colours.hat.toString() }}
        ></div>
      </div>
    </div>
  );
};

export default Hat;
