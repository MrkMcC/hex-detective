const formatLogText = (subject: string, message: string) => {
  return `${subject} | ${message}`;
};

const debug = (subject: string, message: string, ...objects: any[]) => {
  console.debug(formatLogText(subject, message), ...objects);
};

const error = (subject: string, message: string, ...objects: any[]) => {
  const text = formatLogText(subject, message);
  console.error(text, ...objects);
  return text;
};

const LogService = {
  Debug: debug,
  Error: error,
};

export default LogService;
