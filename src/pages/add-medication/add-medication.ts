import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { MedicationModel } from "../../app/models/MedicationModel";
import { CustomPopup } from "../../app/popup/custom-popup";

/**
 * Generated class for the AddMedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-medication',
  templateUrl: 'add-medication.html',
})
export class AddMedicationPage {

  medication: MedicationModel;

  // medicationDays: string[];
  // medicationName: string;
  // medicationDate: Date;
  // medicationTime: Time;
  // pills: Array<{
  //   name: string,
  //   color: string,
  //   shape: string
  // }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.medication = new MedicationModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMedicationPage');
  }

  addMedication() {
    console.log('Add button has been clicked!');
    console.log(this);
  }

  openModal() {
    let modal = this.modalCtrl.create(
    CustomPopup,
      { 'pills': this.medication.pills },
      { showBackdrop: true, enableBackdropDismiss: true }
    );
    modal.present();
  }

}
