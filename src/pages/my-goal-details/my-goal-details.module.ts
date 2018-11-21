import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGoalDetailsPage } from './my-goal-details';

@NgModule({
  declarations: [
    MyGoalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGoalDetailsPage),
  ],
})
export class MyGoalDetailsPageModule {}
