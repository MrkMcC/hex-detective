import PersonT from "../../types/PersonT";

interface Props {
  person: PersonT;
}

const Pants = ({ person }: Props) => {
  return (
    <div className="pants-container">
      <div className={`pants v-${person.variations.pants}`}>
        <div
          className="butt"
          style={{ backgroundColor: person.colours.pants }}
        ></div>
        <div className="legs">
          <div
            className="right leg"
            style={{ backgroundColor: person.colours.pants }}
          ></div>
          <div
            className="left leg"
            style={{ backgroundColor: person.colours.pants }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Pants;
