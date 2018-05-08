import { Time } from "@angular/common";
import { MedicationPillsModel } from "./MedicationPillsModel";

export class MedicationModel
{

  name: string;
  dosage: number;
  days: string[];
  time: Time;
  taken: boolean = false;
  pills: Array<MedicationPillsModel>;

  constructor () {
  }

  addMedication(data) {
    console.log('Add button has been clicked!');
    console.log(data);
  }

  modifyMedication(data) {
    console.log('Modify button has been clicked!');
    console.log(data);
  }

  viewMedication() {
    console.log('View medication');
  }

}
