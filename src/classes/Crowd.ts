import PersonService from "../services/PersonService";
import PersonData from "./PersonData";

class Crowd {
  people: PersonData[];
  suspectId: string;
  getSuspect = () => PersonService.FindPersonById(this.people, this.suspectId);
  getPersonById = (id?: string | null) => {
    return this.people.find((p) => p.id === id);
  };

  constructor(people: PersonData[], suspectId: string) {
    this.people = people;
    this.suspectId = suspectId;
  }
}

export default Crowd;
