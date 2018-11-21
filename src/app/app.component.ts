import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FCM } from '@ionic-native/fcm';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AddappointmentPage } from '../pages/addappointment/addappointment';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { Signup6Page } from '../pages/signup6/signup6'
import { CalendarPage } from '../pages/calendar/calendar';
import { ChatlistPage } from '../pages/chatlist/chatlist';
import { ChatDetailPage } from '../pages/chat-detail/chat-detail'
import { MyGoalDetailsPage } from '../pages/my-goal-details/my-goal-details'

import { Signup1Page } from '../pages/signup1/signup1';
import { Signup2Page } from '../pages/signup2/signup2';
import { Signup3Page } from '../pages/signup3/signup3';
import { Signup4Page } from '../pages/signup4/signup4';
import { Signup5Page } from '../pages/signup5/signup5';
import { Signup7Page } from '../pages/signup7/signup7';
import { Signup8Page } from '../pages/signup8/signup8';
import { VideoPage } from '../pages/video/video';
////// test
import { MyAccountPage } from '../pages/my-account/my-account';
import { SubscriptionPage } from '../pages/subscription/subscription'

import { LocalNotifications } from '@ionic-native/local-notifications';
import { AppUser } from '../providers/app-user'
import { AppBase } from '../providers/app-base'
import { from } from 'rxjs/observable/from';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
////////

declare var cordova;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any, icon: any }>;
  userData: any = {};
  fullWorkOutarray: any = [];
  constructor(public iap: InAppPurchase, public localNotifications: LocalNotifications, public fcm: FCM, public user: AppUser, public base: AppBase, public events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Calendar', component: CalendarPage, icon: 'calendar' },
      { title: 'Messages', component: ChatlistPage, icon: 'chatbubbles' },
      { title: 'My Account', component: MyAccountPage, icon: 'person' },
      { title: 'Logout', component: LoginPage, icon: 'log-in' },
      // { title: 'SubscriptionPage', component: SubscriptionPage, icon: 'log-in' },
    ];
  }
  alreadySubscribed() {


    this.base.presentConfirm("Alert", "Please unsubscribe the currently running plan and urgade after the end date.Please check the disclaimer for further instructions.", [

      {
        text: 'Ok',
        role: 'cancel',
        handler: () => {

        }
      }
    ])


  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.events.unsubscribe('cropImg:profileDash');
      this.events.subscribe('cropImg:profileDash', (data) => {
        this.userData.profile_image = data.image;
        this.userData.first_name = data.first_name;
        this.userData.last_name = data.last_name;
      });

      this.events.unsubscribe('login:data');
      this.events.subscribe('login:data', (data) => {
        this.userData = data;
        this.userData.profile_image = data.image;
      });



      if (this.base.fetchData('Tocken')) {
        // this.userData = JSON.parse(this.base.fetchData('userdata'));

        this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
          .subscribe(
            data => {
              this.setWorkoutAlarm(data.workoutalarm);
              if (data.details) {
                this.userData.first_name = data.details.first_name;
                this.userData.last_name = data.details.last_name;
                this.userData.profile_image = data.details.image;
                this.userData.address = data.details.address;
                var usrD = data.details;


                if (usrD.step_to_complete == 1) {
                  this.nav.push(Signup1Page);
                } else if (usrD.step_to_complete == 2) {
                  this.nav.push(Signup2Page);
                } else if (usrD.step_to_complete == 3) {
                  this.nav.push(Signup7Page, { complaint_id: usrD.complaint_id });
                } else if (usrD.step_to_complete == 4) {
                  this.nav.push(Signup4Page, { complaint_id: usrD.complaint_id });
                } else if (usrD.step_to_complete == 5) {
                  this.nav.push(Signup5Page, { complaint_id: usrD.complaint_id });
                } else if (usrD.step_to_complete == 6) {
                  this.nav.push(Signup6Page, { complaint_id: usrD.complaint_id });
                } else if (usrD.step_to_complete == 8) {
                  this.nav.push(Signup8Page, { complaint_id: usrD.complaint_id });
                } else if (usrD.step_to_complete == 9) {
                  this.nav.push(Signup3Page, { complaint_id: usrD.complaint_id });
                } else {
                  //this.events.publish('login:data', usrD);

                  this.iap
                    .restorePurchases()
                    .then((arrayPurchased) => {

                      if (!arrayPurchased.length) {
                        this.nav.setRoot(LoginPage);
                      } else {
                        if (data.details.step_to_complete == 11) {
                          this.nav.setRoot(HomePage);
                        } else {
                          this.nav.setRoot(LoginPage);
                        }

                      }

                    })

                  //this.nav.setRoot(HomePage);
                }
              }

            }, (err) => {
              this.base.showSpinner(!1);
            })

        //this.rootPage = HomePage;
      } else {

        this.rootPage = LoginPage;
      }


      this.fcm.onNotification().subscribe(data => {

        console.log(this.nav.getActive().name, 'crnt page', data.body);


        if (data.wasTapped) {
          setTimeout(() => {
            if (data.type == 'message') {
              var group_id = JSON.parse(data.body).group_id;
              var group_name = JSON.parse(data.body).group_name;
              var i = 1;
              console.log({ group_id, i, group_name });
              this.nav.push(ChatDetailPage, { data: { group_id, i, group_name } });
            }
            if (data.type == 'workout') {
              // relod
              this.nav.push(VideoPage, { assigned_id: JSON.parse(data.body).assigned_id });
            } else if (data.body && data.body.assigned_id) {
              this.nav.push(VideoPage, { assigned_id: JSON.parse(data.body).assigned_id });
            }
          }, 1800);
          console.log("Received in background");
        } else {
          if (data.type == 'message') {
            if (this.nav.getActive().name == 'ChatDetailPage') {
              this.events.publish('messageList:detail', { datas: JSON.parse(data.body) })
            }
            if (this.nav.getActive().name == 'ChatlistPage') {
              this.events.publish('messageList:list', { datas: JSON.parse(data.body) })
            }

            if (this.nav.getActive().name != 'ChatDetailPage' && this.nav.getActive().name != 'ChatlistPage') {

              console.log(JSON.parse(data.body), data.body, data.body.group_id, data.body.group_name, "messge id");
              var group_id = JSON.parse(data.body).group_id;
              var group_name = JSON.parse(data.body).group_name;
              var i = 1;
              this.base.presentConfirm("New Message from " + group_name, "Do you want to see", [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {

                  }
                },
                {
                  text: 'Ok',
                  handler: () => {
                    console.log({ group_id, i, group_name })
                    this.nav.push(ChatDetailPage, { data: { group_id, i, group_name } });

                  }
                }
              ])



            }
          }
          if (data.type == 'workout') {
            // relod

            this.base.presentConfirm(data.message, "Do you want to see", [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  this.events.publish('workoutNew', { data: JSON.parse(data.body) });
                }
              },
              {
                text: 'Ok',
                handler: () => {
                  this.events.publish('workoutNew', { data: JSON.parse(data.body) });
                  this.nav.push(VideoPage, { assigned_id: JSON.parse(data.body).assigned_id });

                }
              }
            ])
            var dummyArr = [];
            dummyArr.push(JSON.parse(data.body));
            this.setWorkoutNewAlarm(dummyArr);

          }
          else if (data.body && data.body.assigned_id) {
            this.nav.push(VideoPage, { assigned_id: JSON.parse(data.body).assigned_id });
          }
          console.log("Received in foreground");
        };
      });

      setTimeout(() => {
        cordova.plugins.notification.local.on('click', (notification, state) => {
          //let json = JSON.parse(notification.data);
          console.log(notification, state, "push notification !!!!!!!!!!!!!!");
          if (notification.data.type == 'workOut') {
            this.nav.push(VideoPage, { assigned_id: notification.data.id });
          }
          if (notification.data.type == 'alam') {
            console.log(notification);
            if (notification.data.goal_id) {
              this.nav.push(MyGoalDetailsPage, { goal_id: notification.data.goal_id })
            } else {
              this.nav.push(MyGoalDetailsPage, { goal_id: notification.data.id })

            }

          }


        })
        cordova.plugins.notification.local.on('trigger', (notification, state) => {
          //let json = JSON.parse(notification.data);
          console.log(notification, state, "push notification !!!!!!!!!!!!!!");

        })
      }, 1800);


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  setWorkoutNewAlarm(data: any) {


    cordova.plugins.notification.local.getAll((datas) => {


      var tempArr = [];
      if (datas.length) {
        datas.filter((item, index) => {
          console.log(index, (datas.length - 1), "wrking")

          if (JSON.parse(item.data).type == 'workOut' && JSON.parse(item.data).id == data[0].assigned_id) { tempArr.push(item.id); }
          if (index == (datas.length - 1)) { this.removeAlaram(tempArr, data) }
        })
      } else {
        console.log("sryyyy")
        this.removeAlaram(tempArr, data)
      }



    }, err => {
      console.log(err)
    })
  }



  setWorkoutAlarm(data: any) {


    cordova.plugins.notification.local.getAll((datas) => {


      var tempArr = [];
      if (datas.length) {
        datas.filter((item, index) => {
          if (JSON.parse(item.data).type == 'workOut') { tempArr.push(item.id); }
          if (index == (datas.length - 1)) { this.removeAlaram(tempArr, data) }
        })
      } else {
        this.removeAlaram(tempArr, data)
      }



    }, err => {
      console.log(err)
    })
  }
  removeAlaram(tempArr: any, datas: any) {

    if (tempArr.length) {
      if (tempArr.length > 1) {
        this.localNotifications.cancel(tempArr).then((cans) => {
          console.log(cans, "canl canlcanl canl 1");
          this.addNewAlaram(datas)
        })
      } else {

        this.localNotifications.cancel(tempArr[0]).then((cans) => {
          console.log(cans, "canl canlcanl canl 1");
          this.addNewAlaram(datas)
        })



      }
    } else {
      this.addNewAlaram(datas)
    }

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
              console.log("set workout alaram", item.assigned_id, weekDaysNumber)
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

      // cordova.plugins.notification.local.schedule(this.fullWorkOutarray)
      this.user.localPushNotification(this.fullWorkOutarray);
      this.fullWorkOutarray = [];

    }, 2000);

  }
  openPage(page) {

    if (page.title == 'Logout') {

      this.base.presentConfirm("Logout", "Do you want to Logout", [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("can")
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.user.CommnFn({ param: {}, 'functionName': 'logout' })
              .subscribe(
                data => {
                  this.base.clearData();
                  this.user.localPushnotificationCancelAll();
                })


            this.nav.setRoot(page.component);
          }
        }
      ])


    } else {
      this.nav.setRoot(page.component);
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

  }
}
