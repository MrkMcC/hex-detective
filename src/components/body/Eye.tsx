import PersonData from "../../types/PersonData_deprecated";

interface Props {
  person: PersonData;
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
