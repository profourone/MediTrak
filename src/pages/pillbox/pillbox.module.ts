import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PillboxPage } from './pillbox';

@NgModule({
  declarations: [
    PillboxPage,
  ],
  imports: [
    IonicPageModule.forChild(PillboxPage),
  ],
})
export class PillboxPageModule {}
