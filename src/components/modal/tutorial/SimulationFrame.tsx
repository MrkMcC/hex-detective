import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SimulationFrame = ({ children }: Props) => {
  return (
    <div className="simulation-frame flex-row justify-center border p-1">
      {children}
    </div>
  );
};

export default SimulationFrame;
