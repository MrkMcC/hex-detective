import { ReactNode } from "react";

interface Props {
  code: string;
  reveal?: boolean;
  children?: ReactNode;
}

const ColourText = ({ code, reveal, children }: Props) => {
  return (
    <span className="colour-text">
      {children && <span>{children} </span>}
      <span className="hex" style={{ color: reveal ? code : undefined }}>
        {code}
      </span>
    </span>
  );
};

export default ColourText;
