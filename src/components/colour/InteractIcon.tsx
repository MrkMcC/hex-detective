import { FaArrowsUpDown } from "react-icons/fa6";

interface Props {
  int: number;
}

const InteractIcon = ({ int }: Props) => {
  const className = "interact-icon";
  return <FaArrowsUpDown className={className} />;
};

export default InteractIcon;
