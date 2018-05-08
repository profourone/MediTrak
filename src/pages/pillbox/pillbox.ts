import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the PillboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pillbox',
  templateUrl: 'pillbox.html',
})

export class PillboxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PillboxPage');
  }

@ViewChild('slides') slides: Slides;

 next() {
   this.slides.slideNext();
 }

 prev() {
   this.slides.slidePrev();
 }

}
