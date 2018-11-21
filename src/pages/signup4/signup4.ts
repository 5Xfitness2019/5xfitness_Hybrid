import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup5Page } from '../../pages/signup5/signup5';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the Signup4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup4',
  templateUrl: 'signup4.html',
})
export class Signup4Page {
  complaint: any = {};
  complaint_id: any;
  errMsg: boolean = false;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    this.complaint_id = this.navParams.get('complaint_id');
    this.complaintDta()
  }
  next(eve, fld, field) {
    console.log(fld);
    if (eve.keyCode == 13 && field != 'submit') {
      fld.setFocus();
    } else if (eve.keyCode == 13 && field == 'submit') {
      this.signup5();
    }
    // fld.setFocus();
  }
  complaintDta() {
    this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe((data) => {
      this.complaint = data.details;
      this.complaint.diseases = JSON.parse(data.details.diseases);
      console.log(data, data.details.diseases, "fdg");
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
    console.log('ionViewDidLoad Signup4Page');
  }
  signup5() {

    if (!this.complaint.diseases) {

      this.errMsg = true;
      return !1;
      // this.navCtrl.push(Signup5Page, { complaint_id: this.complaint_id });
    } else {
      this.complaint.diseases = JSON.stringify(this.complaint.diseases);
      if (this.complaint.step_to_complete != 11) {
        this.complaint.step_to_complete = 5;
      }
      this.complaint.complaint_id = this.complaint_id
      this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {
        console.log(data);
        if (data.status) {
          this.complaint.diseases = JSON.parse(this.complaint.diseases);
          this.navCtrl.push(Signup5Page, { complaint_id: this.complaint_id });
        } else {
          this.base.showToast(data.message);
        }

      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })
    }



  }

}
