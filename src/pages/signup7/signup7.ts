import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup8Page } from '../../pages/signup8/signup8';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the Signup7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup7',
  templateUrl: 'signup7.html',
})
export class Signup7Page {
  complaint: any = { pain_points_front: {} };

  complaint_id: any;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    // 
    this.complaint_id = this.navParams.get('complaint_id');
    console.log(this.complaint_id, "gdfhfg")
    this.complaintDta()
  }
  complaintDta() {
    this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe((data) => {

      this.complaint = data.details;
      if (this.complaint && this.complaint.pain_points_front_5x && Object.keys(this.complaint.pain_points_front_5x).length) {
        console.log("step 1");
        this.complaint.pain_points_front = JSON.parse(this.complaint.pain_points_front_5x);
      } else {
        console.log("step 2");
        this.complaint.pain_points_front = {};
      }
    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }
  insertArr(numr) {
    if (numr in this.complaint.pain_points_front) { delete this.complaint.pain_points_front[numr]; } else { this.complaint.pain_points_front[numr] = numr; }
  }
  goBack() {
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup7Page');
  }
  signup8() {


    this.complaint.pain_points_front_5x = JSON.stringify(this.complaint.pain_points_front);
    if (this.complaint.step_to_complete != 11) {
      this.complaint.step_to_complete = 8;
    }
    this.complaint.complaint_id = this.complaint_id
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {
      console.log(data);
      if (data.status) {

        this.navCtrl.push(Signup8Page, { complaint_id: this.complaint_id });
      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })




  }

}
