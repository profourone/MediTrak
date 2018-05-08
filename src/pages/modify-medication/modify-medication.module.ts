import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyMedicationPage } from './modify-medication';

@NgModule({
  declarations: [
    ModifyMedicationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyMedicationPage),
  ],
})
export class ModifyMedicationPageModule {}
