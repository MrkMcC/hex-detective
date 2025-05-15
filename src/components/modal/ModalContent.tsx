import { ReactNode } from "react";

interface Props {
  heading: string;
  pageTitle: string;
  children: ReactNode;
}

const ModalContent = ({ heading, pageTitle, children }: Props) => {
  return (
    <>
      <div className="modal-header">
        <h1 className="margin-0">
          {heading} - {pageTitle}
        </h1>
      </div>
      <div className="modal-body">{children}</div>
    </>
  );
};

export default ModalContent;
