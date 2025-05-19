import PersonData from "../classes/PersonData";
import Hat from "./body/Hat";
import Head from "./body/Head";
import Pants from "./body/Pants";
import Shirt from "./body/Shirt";

interface Props {
  person: PersonData;
  disabled?: boolean;
  isAccused?: boolean;
  isRevealedSuspect?: boolean;
  onSelect?: (personId: string) => void;
}

const Person = ({
  person,
  disabled = false,
  isAccused = false,
  isRevealedSuspect = false,
  onSelect,
}: Props) => {
  const handleSelect = () => {
    if (onSelect && !disabled) {
      onSelect(person.id);
    }
  };

  return (
    <div
      key={person.id}
      className={`person-container ${
        person.ruledOut ? "ruled-out" : "ruled-in"
      } ${isAccused ? "accused" : "unaccused"} ${
        isRevealedSuspect ? "suspect" : ""
      }`}
      id={`person_${person.id}`}
    >
      <div
        className={`person ${disabled || !onSelect ? "disabled" : "enabled"}  `}
        onClick={handleSelect}
      >
        <div className="person-overlay">
          <div className="ruled-out-overlay" />
          <div className="accused-overlay text-center text-contrast">
            {isAccused && !isRevealedSuspect && "accused"}
          </div>
          <div className="suspect-overlay text-center text-contrast">
            suspect
          </div>
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
