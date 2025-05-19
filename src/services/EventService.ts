import HexDetectiveEvent from "../enum/HexDetectiveEvent";

let delegates: ((event: HexDetectiveEvent) => void)[] = [];

const addListener = (func: (event: HexDetectiveEvent) => void) => {
  delegates.push(func);
};

const removeListener = (func: (event: HexDetectiveEvent) => void) => {
  delegates = delegates.filter((f) => f !== func);
};

const emit = (event: HexDetectiveEvent) => {
  delegates.forEach((func) => func(event));
};

const EventService = {
  AddListener: addListener,
  RemoveListener: removeListener,
  Emit: emit,
};

export default EventService;
