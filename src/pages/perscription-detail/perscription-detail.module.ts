import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerscriptionDetailPage } from './perscription-detail';

@NgModule({
  declarations: [
    PerscriptionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PerscriptionDetailPage),
  ],
})
export class PerscriptionDetailPageModule {}
