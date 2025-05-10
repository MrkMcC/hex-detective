import PersonT from "../../types/PersonT";

interface Props {
  person: PersonT;
}

const Shirt = ({ person }: Props) => {
  return (
    <div className="shirt-container">
      <div
        className={`shirt v-${person.variations.shirt}`}
        style={{ backgroundColor: person.colours.shirt }}
      ></div>
    </div>
  );
};

export default Shirt;
