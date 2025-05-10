import { FaCheck } from "react-icons/fa";
import PersonT from "../types/PersonT";
import Hat from "./body/Hat";
import Head from "./body/Head";
import Pants from "./body/Pants";
import Shirt from "./body/Shirt";

interface Props {
  person: PersonT;
  disabled: boolean;
  isAccused: boolean;
  onSelect: (personId: string) => void;
}

const Person = ({ person, disabled, isAccused, onSelect }: Props) => {
  const handleSelect = () => {
    if (!disabled) {
      onSelect(person.id);
    }
  };

  return (
    <div
      className={`person-container ${
        person.ruledOut ? "ruled-out" : "ruled-in"
      }`}
      id={`person_${person.id}`}
    >
      <div
        className={`person ${disabled ? "disabled" : "enabled"} ${
          isAccused ? "selected" : "unselected"
        }`}
        onClick={handleSelect}
      >
        <div className="icon-overlay">
          <FaCheck className="icon" />
        </div>
        <div className={`body`}>
          <Hat person={person} />
          <Head person={person} />
          <Shirt person={person} />
          <Pants person={person} />
        </div>
      </div>
    </div>
  );
};

export default Person;
