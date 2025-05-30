import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const ModalButton = ({ children, disabled, onClick }: Props) => {
  return (
    <button className="large" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default ModalButton;
