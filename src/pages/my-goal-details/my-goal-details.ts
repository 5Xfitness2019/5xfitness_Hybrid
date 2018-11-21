import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';
/**
 * Generated class for the MyGoalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-goal-details',
  templateUrl: 'my-goal-details.html',
})
export class MyGoalDetailsPage {
  goal: any = {};
  errMsg: boolean = false;
  constructor(public zone: NgZone, public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    this.goal.progress_range = 0;
    if (this.navParams.get('goal_id')) {
      this.getGoal(this.navParams.get('goal_id'));
    }
  }
  change() {
    this.zone.run(() => {
      this.goal.progress_range;
      console.log(this.goal.progress_range);
    })

  }
  getGoal(id) {
    this.user.CommnFn({ param: { goal_id: id }, 'functionName': 'getGoal' })
      .subscribe(
        data => {
          if (data.status) {
            this.goal = data.details;
          } else {
            this.navCtrl.pop();
            this.base.showToast(data.message);
          }
          console.log(data)
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  addGoal() {
    if (!this.goal.title) {
      this.errMsg = true;
      return !1;
    }
    this.user.CommnFn({ param: this.goal, 'functionName': 'addMyGoal' })
      .subscribe(
        data => {
          this.base.showToast(data.message);
          if (data.status) {
            this.goal.id = data.id
            this.events.publish("mygoal:edit", { goal: this.goal });
            this.navCtrl.pop();
          }
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGoalDetailsPage');
  }

}
