import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResetpasswordPage } from '../../pages/resetpassword/resetpassword';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the Reset_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-2',
  templateUrl: 'reset-2.html',
})
export class Reset_2Page {
  otp: any = [];
  email: any;
  errMsg: boolean = false;
  constructor(public user: AppUser, public base: AppBase,public navCtrl: NavController, public navParams: NavParams) {
    this.email = this.navParams.get('email');
  }

  reset3() {
    this.navCtrl.push(ResetpasswordPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reset_2Page');
  }
  next(el, event, el1) {
    if (event.keyCode == 8) {
      this.otp.one = ''; this.otp.two = ''; this.otp.three = ''; this.otp.four = '';
      el1.setFocus();
      return !1;
    }

    if (el) {
      el.setFocus();
    }

  }

  sendOtp() {
    if (!this.otp.one || !this.otp.two || !this.otp.three || !this.otp.four) {
      this.errMsg = true;
      return !1;
    }
    var a = this.otp.one + "" + this.otp.two + "" + this.otp.three + "" + this.otp.four ;
    console.log(a);
    this.user.CommnFn({ param: { reset_code: a, email: this.email }, 'functionName': 'verifyCode' })
      .subscribe(
      data => {

        if (data.status) {
          this.navCtrl.push(ResetpasswordPage, { email: this.email })
          this.base.showToast(data.message);
        } else {
          this.base.showToast(data.message);
        }

      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })
  }

}
