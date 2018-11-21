import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Item } from 'ionic-angular';

import { SignupPage } from '../../pages/signup/signup';
import { ForgotPasswordPage } from '../../pages/forgot-password/forgot-password';
import { FCM } from '@ionic-native/fcm';
import { AppBase } from '../../providers/app-base'
import { AppUser } from '../../providers/app-user'

import { Signup1Page } from '../signup1/signup1'
import { Signup2Page } from '../signup2/signup2'
import { Signup3Page } from '../signup3/signup3'
import { Signup4Page } from '../signup4/signup4'
import { Signup5Page } from '../signup5/signup5'
import { Signup6Page } from '../signup6/signup6'
import { Signup7Page } from '../signup7/signup7'
import { Signup8Page } from '../signup8/signup8'
import { HomePage } from '../home/home'
import { SubscriptionPage } from '../subscription/subscription'
import { InAppPurchase } from '@ionic-native/in-app-purchase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userdata: any = {};
  errMsg: boolean = false;
  crtfcmToken: any;
  fullWorkOutarray: any = [];
  constructor(public iap: InAppPurchase, private fcm: FCM, public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
  }
  next(eve, fld, field) {
    console.log(fld);
    if (eve.keyCode == 13 && field != 'submit') {
      fld.setFocus();
    } else if (eve.keyCode == 13 && field == 'submit') {
      this.login();
    }
    // fld.setFocus();
  }
  login() {
    if (!this.userdata.email || !this.userdata.password) {
      this.errMsg = true;
      return !1;
    }

    this.fcm.subscribeToTopic('5xtoken');

    this.fcm.getToken().then(token => {





      this.user.CommnFn({ param: { email: this.userdata.email, password: this.userdata.password, fcmTkn: token }, 'functionName': 'userLogin' }).subscribe((data) => {
        if (data.status) {
          //step_to_complete

          if (data.workoutalarm) {
            // this.addNewAlaram(data.workoutalarm);
          }
          if (data.myGoal.length) {
            this.myGoal(data.myGoal);
          }
          if (data.myWorkout.length) {
            // this.myWorkout(data.myWorkout);
          }
          var usrD = data.details;
          this.base.saveToLocal('userdata', JSON.stringify(data.details));
          this.base.saveToLocal('Tocken', data.userToken);
          if (usrD.step_to_complete == 1) {
            this.navCtrl.push(Signup1Page);
          } else if (usrD.step_to_complete == 2) {
            this.navCtrl.push(Signup2Page);
          } else if (usrD.step_to_complete == 3) {
            this.navCtrl.push(Signup7Page, { complaint_id: usrD.complaint_id });
          } else if (usrD.step_to_complete == 4) {
            this.navCtrl.push(Signup4Page, { complaint_id: usrD.complaint_id });
          } else if (usrD.step_to_complete == 5) {
            this.navCtrl.push(Signup5Page, { complaint_id: usrD.complaint_id });
          } else if (usrD.step_to_complete == 6) {
            this.navCtrl.push(Signup6Page, { complaint_id: usrD.complaint_id });
          } else if (usrD.step_to_complete == 8) {
            this.navCtrl.push(Signup8Page, { complaint_id: usrD.complaint_id });
          } else if (usrD.step_to_complete == 9) {
            this.navCtrl.push(Signup3Page, { complaint_id: usrD.complaint_id });
          } else {
            this.events.publish('login:data', usrD);

            this.iap
              .restorePurchases()
              .then((arrayPurchased) => {

                if (!arrayPurchased.length) {
                  this.navCtrl.setRoot(SubscriptionPage);
                } else {
                  console.log(data.details.complaint_id)
                  if (data.details.step_to_complete == 11) {
                    this.navCtrl.setRoot(HomePage);
                  } else {
                    this.alreadySubscribed();
                  }

                }

              })

            //this.navCtrl.setRoot(HomePage);
          }
        } else {

          this.base.showToast(data.message);
        }
      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })
    });
    this.fcm.unsubscribeFromTopic('5xtoken');
  }
  alreadySubscribed() {


    this.base.presentConfirm("Alert", "Sorry ! You will not be able to proceed further as your phone's google play account is associated with a different purchase. Please use a different google play account to purchase a plan and proceed further.", [

      {
        text: 'Ok',
        role: 'cancel',
        handler: () => {

        }
      }
    ])


  }

  myGoal(mygoal) {
    console.log(mygoal, "mygoal");
    // mygoal.map(item => {
    //   this.setAlamFirst(item, 'alam', item.alam_id)
    // })

    mygoal.forEach(item => {
      console.log(item.alam_repeat, Object.keys(item.alam_repeat).length, "mygoal")
      this.setAlamFirst(item, 'alam', item.alam_id)
    });
  }
  myWorkout(myWorkout) {
    console.log(myWorkout, "myWorkout");
    myWorkout.forEach(item => {
      console.log(item.alam_repeat, "myWorkout")
      this.setAlamFirst(item, 'workOut', item.alam_id)
    });


    // myWorkout.map(item => {
    //   this.setAlamFirst(item, 'workOut', item.alam_id)
    // })
  }

  setAlamFirst(alam, type, id) {
    var title;
    if (type == 'alam') {
      title = "My Goal";
    }
    if (type == 'workOut') {
      title = "My Workout";
    }
    Object.keys(JSON.parse(alam.alam_repeat)).map((keys) => {
      var a = {
        id: +new Date(),
        title: title,
        text: alam.title,
        trigger: {
          every: { weekday: (parseInt(keys) - 1), hour: parseInt(alam.alam_time.split(":")[0]), minute: parseInt(alam.alam_time.split(":")[1]) }
        },
        sound: null,
        data: { type: type, id: id, goal_id: '' }
      }
      if (alam.goal_id) {
        a.data = { type: type, id: id, goal_id: alam.goal_id }
      }
      this.user.localPushNotification(a);
    });
    setTimeout(() => {
      this.user.getLocalNotification()
    }, 500);
  }



  Linksignup() {
    this.navCtrl.push(SignupPage)
  }
  fogpas1() {
    //this.navCtrl.push(SubscriptionPage);
    this.navCtrl.push(ForgotPasswordPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }








  addNewAlaram(datas: any) {

    var anew = {};
    var yr;
    var mnth;
    var dat;
    var weekDaysNumber;
    var newaWeek = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' }
    if (datas.length) {

      datas.map((item, indx) => {

        if (item.work_period == 'weekly') {


          if (item.chosen_week && item.chosen_week.split(',').length) {

            item.chosen_week.split(',').map(week => {

              weekDaysNumber = Object.keys(newaWeek).find(key => newaWeek[key] === week);


              anew = {

                id: +new Date(),
                text: item.workout_details,
                title: 'My Workout',
                trigger: {
                  every: { weekday: parseInt(weekDaysNumber), hour: parseInt(item.work_times.split(":")[0]), minute: parseInt(item.work_times.split(":")[1]) }
                },
                led: 'FF0000',
                data: { type: 'workOut', id: item.assigned_id, goal_id: '' },


              }

              this.fullWorkOutarray.push(anew);
              //  this.user.localPushNotification(fullWorkOutarray);

            })

          }
        } else if (item.work_period == 'onetime') {

          yr = new Date(item.onetime_date).getFullYear();
          mnth = new Date(item.onetime_date).getMonth();
          dat = new Date(item.onetime_date).getDate();
          anew = {
            id: +new Date(),
            title: 'My Workout',
            text: item.workout_details,
            trigger: { at: new Date(yr, mnth, dat, parseInt(item.work_times.split(":")[0]), parseInt(item.work_times.split(":")[1])) },
            sound: null,
            data: { type: 'workOut', id: item.assigned_id, goal_id: '' }
          }
          this.fullWorkOutarray.push(anew);
          // this.user.localPushNotification(a);
        }

        if ((datas.length - 1) == indx) {
          this.setWorkout()
        }
      })
    }
  }
  setWorkout() {
    setTimeout(() => {
      console.log(this.fullWorkOutarray);

      this.user.localPushNotification(this.fullWorkOutarray);
    }, 2000);

  }







}
