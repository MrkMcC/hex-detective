const join = (...classes: (string | undefined)[]) => {
  return classes.filter((c) => !!c).join(" ");
};

const ClassHelper = {
  Join: join,
};

export default ClassHelper;
