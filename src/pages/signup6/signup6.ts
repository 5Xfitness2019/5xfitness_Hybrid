import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';
import { SubscriptionPage } from '../../pages/subscription/subscription';
import { InAppPurchase } from '@ionic-native/in-app-purchase';

import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the Signup6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup6',
  templateUrl: 'signup6.html',
})
export class Signup6Page {
  complaint: any = {};
  complaint_id: any;
  constructor(public iap: InAppPurchase, public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    this.complaint_id = this.navParams.get('complaint_id');
    this.complaintDta()
  }
  complaintDta() {
    this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe((data) => {
      this.complaint = data.details;
      console.log(this.complaint);
    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
  }
  basicInfo() {
    this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
      .subscribe(
        data => {
          this.events.publish('login:data', data.details);
          this.iap
            .restorePurchases()
            .then((arrayPurchased) => {

              if (!arrayPurchased.length) {
                this.navCtrl.push(SubscriptionPage, { complaint_id: this.complaint_id });
                // this.navCtrl.setRoot(SubscriptionPage);
              } else {
                if (this.complaint.step_to_complete == 11) {
                  this.navCtrl.setRoot(HomePage);
                } else {
                  this.alreadySubscribed();
                }

              }

            })

        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }

  alreadySubscribed() {


    this.base.presentConfirm("Alert", "Sorry ! You will not be able to proceed further as your phone's google play account is associated with a different purchase. Please use a different google play account to purchase a plan and proceed further.", [

      {
        text: 'Ok',
        role: 'cancel',
        handler: () => {
          this.navCtrl.setRoot(LoginPage);
        }
      }
    ])


  }

  goBack() {
    this.navCtrl.pop();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup6Page');
  }
  signup7() {

    //     if (!this.complaint.pains && !this.complaint.shortness_of_breath && !this.complaint.dizziness && !this.complaint.attack_of_shortness && !this.complaint.woken_at_night && !this.complaint.swelling_accumulation  && !this.complaint.heart_beating_faster && !this.complaint.pains_in_calves && !this.complaint.fatigue ) {

    // // alert ?

    //       this.navCtrl.push(Signup7Page, { complaint_id: this.complaint_id });
    //     } else {
    if (this.complaint.step_to_complete != 11) {
      this.complaint.step_to_complete = 7;
    }
    this.complaint.complaint_id = this.complaint_id
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {
      console.log(data);
      if (data.status) {
        this.basicInfo();

      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })
    // }



  }

}
