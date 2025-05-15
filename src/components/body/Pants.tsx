import PersonData from "../../types/PersonData_deprecated";

interface Props {
  person: PersonData;
}

const Pants = ({ person }: Props) => {
  return (
    <div className="pants-container">
      <div className={`pants v-${person.variations.pants}`}>
        <div
          className="butt"
          style={{ backgroundColor: person.colours.pants.toString() }}
        ></div>
        <div className="legs">
          <div
            className="right leg"
            style={{ backgroundColor: person.colours.pants.toString() }}
          ></div>
          <div
            className="left leg"
            style={{ backgroundColor: person.colours.pants.toString() }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Pants;
