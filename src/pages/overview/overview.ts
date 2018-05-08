import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

import { AddMedicationPage } from "../add-medication/add-medication";
import { ModifyMedicationPage } from "../modify-medication/modify-medication";

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})

export class OverviewPage {

  items: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let medications = http.get('assets/database.json').map(res => res.json().medications);
    medications.subscribe(data => {
      this.items = data;
    })
  }

  toggleMedication(i) {
    this.items[i].open = !this.items[i].open;
  }

  toggleItem(i, j) {
    this.items[i].children[j].open = !this.items[i].children[j].open;
  }

  addMedication() {
    this.navCtrl.push(AddMedicationPage);
  }

  modifyMedication(item) {
    this.navCtrl.push(ModifyMedicationPage, {
      item: item
    });
  }

}
