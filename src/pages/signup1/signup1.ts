import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup2Page } from '../../pages/signup2/signup2';


import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the Signup1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup1',
  templateUrl: 'signup1.html',
})
export class Signup1Page {
  userData: any = {};
  errMsg: boolean = false;
  constructor(public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
  }

  next(eve, fld, field) {
    console.log(fld);
    if (eve.keyCode == 13 && field != 'submit') {
      fld.setFocus();
    } else if (eve.keyCode == 13 && field == 'submit') {
      this.signupTwo();
    }
    // fld.setFocus();
  }

  signupTwo() {

    
    if (!this.userData.dob || !this.userData.mobile) {
      console.log("step 1")
      this.errMsg = true;
      return !1;
    } else {
      console.log("step 3")
      
      this.userData.step_to_complete = 2;
      this.user.CommnFn({ param: this.userData, 'functionName': 'userSignUpTwo' }).subscribe((data) => {
        console.log(data);
        if(data.status){
          this.navCtrl.push(Signup2Page);
        }else{
          this.base.showToast(data.message);
        }
        
      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })

    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup1Page');
  }
 

}
