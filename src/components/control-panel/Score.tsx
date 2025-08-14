import ClassHelper from "../../helper/ClassHelper";
import Localise from "../common/Localise";

interface Props {
  value: number;
  className?: string;
}

const Score = ({ value, className }: Props) => {
  return (
    <div className={ClassHelper.Join("score text-center", className)}>
      <h3>
        <Localise>CONTROLBAR/SESSIONINFO/LBL_SCORE</Localise>
      </h3>
      <div className="value">{value}</div>
    </div>
  );
};

export default Score;
