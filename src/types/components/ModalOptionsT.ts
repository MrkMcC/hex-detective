type ModalPageT = {
  title: string;
  content: { type: "tutorial"; index: number };
};

type ModalOptionsT = {
  heading: string;
  pages: ModalPageT[];
};

export default ModalOptionsT;
