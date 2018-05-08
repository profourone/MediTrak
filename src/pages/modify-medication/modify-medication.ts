import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { MedicationModel } from "../../app/models/MedicationModel";
import { CustomPopup } from "../../app/popup/custom-popup";

/**
 * Generated class for the ModifyMedicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-medication',
  templateUrl: 'modify-medication.html',
})
export class ModifyMedicationPage {

  medication: MedicationModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.medication = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyMedicationPage');
  }

  modifyMedication() {
    console.log('Modify button has been clicked!');
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
