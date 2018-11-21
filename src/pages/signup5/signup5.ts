import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup6Page } from '../../pages/signup6/signup6';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the Signup5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup5',
  templateUrl: 'signup5.html',
})
export class Signup5Page {
  complaint: any = {};
  complaint_id: any;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
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

  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup5Page');
  }
  signup6() {

    //     if (!this.complaint.pains && !this.complaint.shortness_of_breath && !this.complaint.dizziness && !this.complaint.attack_of_shortness && !this.complaint.woken_at_night && !this.complaint.swelling_accumulation  && !this.complaint.heart_beating_faster && !this.complaint.pains_in_calves && !this.complaint.fatigue ) {

    // // alert ?

    //       this.navCtrl.push(Signup6Page, { complaint_id: this.complaint_id });
    //     } else {
    if (this.complaint.step_to_complete != 11) {
      this.complaint.step_to_complete = 6;
    }
    this.complaint.complaint_id = this.complaint_id
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {
      console.log(data);
      if (data.status) {

        this.navCtrl.push(Signup6Page, { complaint_id: this.complaint_id });
      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
    //  }



  }

}
