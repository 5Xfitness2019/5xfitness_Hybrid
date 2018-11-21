import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  userData: any = {};
  errMsg: boolean = false;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
  }
  changePsd() {
    if (!this.userData.old_password || !this.userData.password || !this.userData.cnfm_password || (this.userData.password != this.userData.cnfm_password) ) {
      this.errMsg = true;
      return !1;
    }
    this.user.CommnFn({ param: this.userData, 'functionName': 'changePassword' })
      .subscribe(
      data => {
        console.log(data);
        this.base.showToast(data.message);
        if (data.status) {
          this.navCtrl.pop()
        }
      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }
  changePassword() {

  }

}
