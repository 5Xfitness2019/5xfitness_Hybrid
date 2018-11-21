import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup4Page } from '../../pages/signup4/signup4';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the Signup3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup3',
  templateUrl: 'signup3.html',
})
export class Signup3Page {
  complaint: any = {};
  complaint_id: any;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('complaint_id'), "idd..3");
    this.complaint_id = this.navParams.get('complaint_id');
    this.complaintDta()
  }
  complaintDta() {
    this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe((data) => {
      this.complaint = data.details;
      console.log(this.complaint);
    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }
  // signup4() {
  //   this.navCtrl.push(Signup4Page)
  // }

  goBack() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup3Page');
  }

  signup4() {

    //     if (!this.complaint.is_large_part_work && !this.complaint.is_activity_pattern && !this.complaint.activity_type && !this.complaint.minutes_per_session &&!this.complaint.session_per_week && !this.complaint.intensity && !this.complaint.other_step_2 && !this.complaint.year_of_exercise && !this.complaint.is_regular_exercise && !this.complaint.is_activity_level_change_last_5_year && !this.complaint.is_pain_during_exercise && !this.complaint.is_stop_excercising) {

    // // alert ?

    //       this.navCtrl.push(Signup4Page, { complaint_id: this.complaint_id });
    //     } else {
    if (this.complaint.step_to_complete != 11) {
      this.complaint.step_to_complete = 4;
    }

    this.complaint.complaint_id = this.complaint_id
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {
      console.log(data);
      if (data.status) {

        this.navCtrl.push(Signup4Page, { complaint_id: this.complaint_id });
      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
    //}



  }



}
