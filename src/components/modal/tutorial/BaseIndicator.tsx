import { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

const BaseIndicator = ({ label, children }: Props) => {
  return (
    <div className="base-indicator-container">
      <div className="base-indicator">
        <div className="base-indicator-label">
          <span>{label}</span>
        </div>
        <div className="base-indicator-content">{children}</div>
      </div>
    </div>
  );
};

export default BaseIndicator;
