import PersonData from "../../types/PersonData_deprecated";

interface Props {
  person: PersonData;
}

const Shirt = ({ person }: Props) => {
  return (
    <div className="shirt-container">
      <div
        className={`shirt v-${person.variations.shirt}`}
        style={{ backgroundColor: person.colours.shirt.toString() }}
      ></div>
    </div>
  );
};

export default Shirt;
