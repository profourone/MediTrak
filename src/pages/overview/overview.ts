import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PerscriptionDetailPage } from '../perscription-detail/perscription-detail';

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
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(PerscriptionDetailPage, {
      item: item
    });
  }
}
