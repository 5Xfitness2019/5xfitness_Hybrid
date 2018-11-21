import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';


/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  userData: any = {};
  constructor(public user: AppUser, public base: AppBase, public events: Events, public navCtrl: NavController, public navParams: NavParams) {
  
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }


}
