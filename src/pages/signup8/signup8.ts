import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
import { HomePage } from '../home/home'


import { Signup3Page } from '../signup3/signup3'
/**
 * Generated class for the Signup8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup8',
  templateUrl: 'signup8.html',
})
export class Signup8Page {
  complaint: any = {};
  complaint_id: any;
  constructor(public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    this.complaint.pain_points_back = {}
    this.complaint_id = this.navParams.get('complaint_id');
    this.complaintDta()
  }


  complaintDta() {
    this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe((data) => {

      this.complaint = data.details;
      if (this.complaint && this.complaint.pain_points_back_5x && Object.keys(this.complaint.pain_points_back_5x).length) {
        console.log("step 1");
        this.complaint.pain_points_back = JSON.parse(this.complaint.pain_points_back_5x);
      } else {
        console.log("step 2");
        this.complaint.pain_points_back = {};
      }
    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }

  insertArr(numr) {
    if (numr in this.complaint.pain_points_back) { delete this.complaint.pain_points_back[numr]; } else { this.complaint.pain_points_back[numr] = numr; }
  }
  goBack() {
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup8Page');
  }
  signup8() {
    this.complaint.pain_points_back_5x = JSON.stringify(this.complaint.pain_points_back);
    if (this.complaint.step_to_complete != 11) {
      this.complaint.step_to_complete = 9;
    }
    this.complaint.complaint_id = this.complaint_id
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {
      console.log(data);
      if (data.status) {
        this.navCtrl.push(Signup3Page, { complaint_id: this.complaint_id });
        //this.basicInfo();
      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }

  basicInfo() {
    this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
      .subscribe(
        data => {
          this.events.publish('login:data', data.details);
          this.navCtrl.setRoot(HomePage);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }

}
