import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile'
import { MyProfilePage } from '../my-profile/my-profile';
import { ChangepasswordPage } from '../changepassword/changepassword'
import { Signup2Page } from "../signup2/signup2"
import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';
import { SubscriptionPage } from '../../pages/subscription/subscription'

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  userData: any = {};
  constructor(public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    this.events.unsubscribe('cropImg:profileMyacc');
    this.events.subscribe('cropImg:profileMyacc', (data) => {
      this.userData.image = data.image;
      this.userData.first_name = data.first_name;
      this.userData.last_name = data.last_name;
    });
    this.basicInfo();
  }
  basicInfo() {
    this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
      .subscribe(
        data => {
          this.userData = data.details;
          console.log(this.userData);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }
  ProfileInfo() {
    this.navCtrl.push(MyProfilePage);
  }
  changePassword() {
    this.navCtrl.push(ChangepasswordPage);
  }
  Subscription() {
    this.navCtrl.push(SubscriptionPage);
  }
  editHealthInfo() {
    this.navCtrl.push(Signup2Page, { complaint_id: this.userData.complaint_id })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

}
