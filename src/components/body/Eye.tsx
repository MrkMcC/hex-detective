import PersonT from "../../types/PersonT";

interface Props {
  person: PersonT;
  side: string;
}

const Eye = ({ person, side }: Props) => {
  return (
    <div className={`${side} eye v-${person.variations.eyes}`}>
      <div className="pupil-container">
        <div className="pupil"></div>
      </div>
    </div>
  );
};

export default Eye;
