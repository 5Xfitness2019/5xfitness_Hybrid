import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddappointmentPage } from './addappointment';

@NgModule({
  declarations: [
    AddappointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddappointmentPage),
  ],
})
export class AddappointmentPageModule {}
