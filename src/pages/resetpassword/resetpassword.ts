import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppUser } from '../../providers/app-user';
import { AppBase } from '../../providers/app-base';
import { LoginPage } from '../login/login'
/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  email: any;
  password: any;
  cmpassword: any;
  errMsg: boolean = false;
  constructor(public base: AppBase, public user: AppUser, public navCtrl: NavController, public navParams: NavParams) {
    this.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }
  resetPassword() {
    if (!this.password || !this.cmpassword || (this.password != this.cmpassword)) {
      this.errMsg = true;
      return !1;
    }
    this.user.CommnFn({ param: { password: this.password, email: this.email }, 'functionName': 'resetPassword' })
      .subscribe(
      data => {
        if (data.status) {
          this.navCtrl.setRoot(LoginPage);
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
