import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverviewPage } from './overview';

@NgModule({
  declarations: [
    OverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(OverviewPage),
  ],
  entryComponents: [
    OverviewPage,
  ]
})
export class OverviewPageModule {}
