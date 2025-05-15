import { BsIncognito } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import PersonData from "../classes/PersonData";
import Hat from "./body/Hat";
import Head from "./body/Head";
import Pants from "./body/Pants";
import Shirt from "./body/Shirt";

interface Props {
  person: PersonData;
  disabled: boolean;
  isAccused: boolean;
  isRevealedSuspect: boolean;
  onSelect: (personId: string) => void;
}

const Person = ({
  person,
  disabled,
  isAccused,
  isRevealedSuspect,
  onSelect,
}: Props) => {
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
          isAccused ? "accused" : "unaccused"
        } ${isRevealedSuspect ? "revealed-suspect" : ""}`}
        onClick={handleSelect}
      >
        <div className="icon-overlay">
          {person.ruledOut && <FaCheck className="icon ruled-out" />}
          {isRevealedSuspect && (
            <BsIncognito className="icon revealed-suspect" />
          )}
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
