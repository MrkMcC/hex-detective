interface Props {
  label?: string;
  code: string;
  reveal?: boolean;
}

const ColourText = ({ label, code, reveal }: Props) => {
  return (
    <span className="colour-text">
      {label && <span>{label} </span>}
      <span className="hex" style={{ color: reveal ? code : undefined }}>
        {code}
      </span>
    </span>
  );
};

export default ColourText;
