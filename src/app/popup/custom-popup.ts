import { Component, Renderer } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { MedicationPillsModel } from "../models/MedicationPillsModel";

@Component({
  selector: 'custom-popup',
  templateUrl: 'custom-popup.html'
})
export class CustomPopup {

  title: string;
  pills: MedicationPillsModel;

  constructor(public renderer: Renderer, public viewCtrl: ViewController) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
    this.pills = this.viewCtrl.data.pills;
    console.log(this.viewCtrl.data.pills);
  }

  addPill() {
    // this.pills.push(
    //   {
    //     "name": "",
    //     "color": "",
    //     "shape": "",
    //     "dosage": 1
    //   }
    // )
  }

  removePill(i) {
    //pills.push
  }

  togglePills(i) {
    this.pills[i].open = !this.pills[i].open;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
