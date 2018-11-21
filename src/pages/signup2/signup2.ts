import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup7Page } from '../../pages/signup7/signup7';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'

/**
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {
  complaint: any = {};
  errMsg: boolean = false;
  complaint_id: any;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    this.complaintDta();
  }
  next(eve, fld, field) {
    console.log(fld);
    if (eve.keyCode == 13 && field != 'submit') {
      fld.setFocus();
    } else if (eve.keyCode == 13 && field == 'submit') {
      this.signup3();
    }
    // fld.setFocus();
  }
  complaintDta() {
    this.user.CommnFn({ param: {}, 'functionName': 'complaint_Data' }).subscribe((data) => {
      if (data.status) {
        this.complaint = data.details;
        this.complaint_id = data.details.complaint_id;
      }
    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup2Page');
  }


  signup3() {
    if (!this.complaint.major_complaint) {
      console.log("step 1")
      this.errMsg = true;
      return !1;
    } else {
      console.log("step 3")
      if (this.complaint_id) {
        this.updateCmpnt()
      } else {
        this.insertCmpnt()
      }
    }
  }

  goBack() {
    this.navCtrl.pop();
  }
  updateCmpnt() {
    this.complaint.complaint_id = this.complaint_id
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {
      console.log(data);
      if (data.status) {
        console.log(this.complaint_id, "iddd..2");
        this.navCtrl.push(Signup7Page, { complaint_id: this.complaint_id });
      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }
  insertCmpnt() {
    this.complaint.step_to_complete = 3;
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_insert' }).subscribe((data) => {
      console.log(data);
      if (data.status) {
        console.log(data, data.complaint_id);
        this.complaint_id = data.complaint_id;
        this.navCtrl.push(Signup7Page, { complaint_id: this.complaint_id });
      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }

}
