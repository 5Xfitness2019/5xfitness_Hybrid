import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Reset_2Page } from '../../pages/reset-2/reset-2';
import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  userData: any = {}
  errMsg: boolean = false;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
  }
  forgot_2() {
    this.navCtrl.push(Reset_2Page)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  //forgotPassword
  forgotpsd() {
    if (!this.userData.email || !this.base.validateEmail(this.userData.email)) {
      this.errMsg = true;
      return !1;
    }
    this.user.CommnFn({ param: { email: this.userData.email }, 'functionName': 'forgotPassword' }).subscribe((data) => {
      this.errMsg = false;
      if (data.status) {

        this.navCtrl.push(Reset_2Page, { email: this.userData.email });
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
