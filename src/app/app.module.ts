import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { OverviewPage } from '../pages/overview/overview';
import { PerscriptionDetailPage } from '../pages/perscription-detail/perscription-detail';
import { PillboxPage } from '../pages/pillbox/pillbox';
import { AddMedicationPage } from "../pages/add-medication/add-medication";
import { ModifyMedicationPage } from "../pages/modify-medication/modify-medication";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CustomPopup } from "./popup/custom-popup";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    OverviewPage,
    PillboxPage,
    PerscriptionDetailPage,
    AddMedicationPage,
    ModifyMedicationPage,
    CustomPopup
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    OverviewPage,
    PillboxPage,
    PerscriptionDetailPage,
    AddMedicationPage,
    ModifyMedicationPage,
    CustomPopup
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
