import PersonData from "../../types/PersonData_deprecated";
import Eyes from "./Eyes";
import Mouth from "./Mouth";

interface Props {
  person: PersonData;
}

const Head = ({ person }: Props) => {
  return (
    <div className="head-container">
      <div
        className="head"
        style={{ backgroundColor: person.colours.head.toString() }}
      >
        <Eyes person={person} />
        <Mouth person={person} />
      </div>
    </div>
  );
};

export default Head;
