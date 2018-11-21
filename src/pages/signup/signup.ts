import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup1Page } from '../../pages/signup1/signup1';
import { ComingsoonPage } from '../coming_soon/coming_soon'
import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userData: any = {};
  errMsg: boolean = false;
  errEmailMsg: boolean = false;
  terms: boolean=true;
  constructor(private fcm: FCM, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
  }

  next(eve, fld, field) {
    console.log(fld);
    if (eve.keyCode == 13 && field != 'submit') {
      fld.setFocus();
    } else if (eve.keyCode == 13 && field == 'submit') {
      this.userSignUp();
    }
    // fld.setFocus();
  }

  userSignUp() {
    // if (!this.terms) {
    //   this.base.showToast("Network error, Please check your connection ");
    //   return !1;
    // }
    if (!this.userData.email || !this.userData.first_name || !this.userData.last_name || !this.userData.password || !this.userData.cnfmPassword || (this.userData.password != this.userData.cnfmPassword)) {

      this.errMsg = true;
      return !1;
    } else if (!this.base.validateEmail(this.userData.email)) {

      this.errEmailMsg = true;
      return !1;
    } else {
      this.fcm.subscribeToTopic('5xtoken');

      this.fcm.getToken().then(token => {
        this.userData.fcmTkn = token;
        this.user.CommnFn({ param: this.userData, 'functionName': 'userSignUp' }).subscribe((data) => {
          console.log(data);
          if (data.status) {
            this.base.saveToLocal('userdata', JSON.stringify(this.userData));
            this.base.saveToLocal('Tocken', data.userToken);
            this.navCtrl.push(Signup1Page);
          }else{
            this.base.showToast(data.message)
          }

        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
      })
      this.fcm.unsubscribeFromTopic('5xtoken');
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  ComingsoonPage() {
    this.navCtrl.push(ComingsoonPage);
  }
}
