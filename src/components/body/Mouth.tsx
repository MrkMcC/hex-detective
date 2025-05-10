import PersonT from "../../types/PersonT";

interface Props {
  person: PersonT;
}

const Mouth = ({ person }: Props) => {
  return (
    <div className="mouth-container">
      <div className={`mouth v-${person.variations.mouth}`}>
        <div className="parts">
          <div className="part-1"></div>
          <div className="part-2"></div>
          <div className="part-3"></div>
          <div className="part-4"></div>
          <div className="part-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Mouth;
