const formatLogText = (subject: string, message: string) => {
  return `${subject} | ${message}`;
};

const debug = (subject: string, message: string, ...objects: never[]) => {
  console.debug(formatLogText(subject, message), ...objects);
};

const error = (subject: string, message: string, ...objects: never[]) => {
  const text = formatLogText(subject, message);
  console.error(text, ...objects);
  return text;
};

const warn = (subject: string, message: string, ...objects: never[]) => {
  console.warn(formatLogText(subject, message), ...objects);
};

const LogService = {
  Debug: debug,
  Error: error,
  Warn: warn,
};

export default LogService;
