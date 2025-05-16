import PersonService from "../services/PersonService";
import PersonData from "./PersonData";

class Crowd {
  people: PersonData[];
  suspectId: string;
  getSuspect = () => PersonService.FindPersonById(this.people, this.suspectId);

  constructor(people: PersonData[], suspectId: string) {
    this.people = people;
    this.suspectId = suspectId;
  }
}

export default Crowd;
