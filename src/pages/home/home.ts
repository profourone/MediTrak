import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	//Default text
	public mainMessage = '..\\..\\..\\assets\\imgs\\Congrats.png';	
	public message = 'Don\'t lose\nYour fire\nKeep it up';
	public messageNumber;
	public streakNumber = 8;
	
  constructor(public navCtrl: NavController) {	
	//TODO: update streak number here
	this.streakNumber=2 ;
	//Set the message for the streak
	this.messageNumber = this.streakNumber > 1 ? 'Days Straight':'Day Straight';
	//hide the picture + text
	if (this.streakNumber <= 0){
		this.mainMessage = "";
		this.message = "";
	}
  }
  
}