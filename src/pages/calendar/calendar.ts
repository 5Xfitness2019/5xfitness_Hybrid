import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { CalendarModule } from 'ionic3-calendar-en';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { AddEventPage } from '../add-event/add-event'
import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova;

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  currentEvents: any = [];
  userevents: any = [];
  tempArr: any = [];
  filterdate: any;
  newDate: any;
  constructor(private localNotifications: LocalNotifications, public events: Events, public zone: NgZone, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {

    this.getEvents();
    this.eventList();
  }
  forTest() {


    cordova.plugins.notification.local.getAll((datas) => {
      console.log(datas)
    }, err => {
      console.log(err)
    })
  }

  forTest2() {

    cordova.plugins.notification.local.cancel([1531484496936, 1531483943760, 1531484071791, 1531484071788, 1531484200677, 1531484327639, 1531483174719, 1531486033391, 1531484200682, 1531483174722, 1531484200687, undefined, 1531483943757, 1531483943754, 1531484071780, 1531484200691, 1531483114574, 1531484200685, 1531484071795, undefined, 1531483174716, 1531483114578], function () {
      alert('OK');
    }, this);
  }
  forTest1() {
    for (let i = 0; i < 20; i++) {
      this.forTest12();
    }
  }
  forTest12() {

    console.log("new push");

    cordova.plugins.notification.local.hasPermission(function (granted) {
      console.log(granted);
      cordova.plugins.notification.local.schedule([

        {

          id: 4,
          text: 'Sync in progress 343',
          trigger: { at: new Date(2018, 7, 22, 19, 52) },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3',

        },
        {

          id: 3,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 5,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 6,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },

        {

          id: 7,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 8,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 9,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 10,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 11,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 12,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 14,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 15,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 16,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 17,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 18,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 19,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 20,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 21,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 22,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 23,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 24,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 25,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 26,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 27,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 28,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        },
        {

          id: 29,
          text: 'Sync in progress 345',
          trigger: {
            every: { weekday: 3, hour: 19, minute: 53 }
          },
          led: 'FF0000',
          data: { type: 'alam', id: 4 },
          sound: 'file://sound.mp3'

        }
      ]);
    });

    // cordova.plugins.notification.local.schedule({

    //     id: 2,
    //     text: 'Sync in progress 3',
    //     trigger: { every: { weekday: 4, hour: 20, minute: 40 } },
    //     led: 'FF0000',
    //     sound: null

    // });


  }

  genereteCalendarView() {
    this.currentEvents = this.userevents;
  }

  getEvents() {

    if (!this.newDate) {
      var today = new Date();
      this.newDate = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + today.getDate().toString();
    }

    // this.user.CommnFn({ param: {}, 'functionName': 'getEvents' })
    this.user.CommnFn({ param: { date: this.newDate }, 'functionName': 'getMyWorkouts' })
      .subscribe(
        data => {
          if (data.status) {
            this.userevents = data.myworkouts
            this.genereteCalendarView();
            this.eventList();
          } else {
            this.base.showToast(data.message)
          }
          //this.userevents = data.details;

        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection")
        })
  }
  onDaySelect(event) {
    var month;
    var date;
    if (event.month.toString().length == 1 && event.month.toString() != '9') {
      month = '0' + (event.month + 1);
    } else {
      month = (event.month + 1);
    }
    if (event.date.toString().length == 1) {
      date = '0' + (event.date);
    } else {
      date = (event.date);
    }
    var newDate = event.year + '-' + month + '-' + date;
    this.eventList(newDate, event.date)

  }
  eventList(date = '', crntDate = '') {
    this.tempArr = [];
    if (!date && this.filterdate) {
      date = this.filterdate;
    }
    this.filterdate = date;
    if (!date) {
      var today = new Date();
      var dd = today.getDate().toString();
      var mm = (today.getMonth() + 1).toString(); //January is 0!
      var yyyy = today.getFullYear();

      if (dd.length == 1) {
        dd = '0' + dd
      }

      if (mm.length == 1) {
        mm = '0' + mm
      }
      crntDate = dd;
      date = yyyy + '-' + mm + '-' + dd
    }

    var d = new Date(date);
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var newDay = days[d.getDay()];
    var newMonth = months[d.getMonth()];
    this.userevents.map((item) => { if (item.date == crntDate) { item.new_time = this.tConvert(item.work_times); item.new_day = newDay; item.month_day = newMonth; this.tempArr.push(item) } });
  }


  tConvert(time) {
    var a = time.split(':')
    if (a[0].length == 1) {
      a[0] = '0' + a[0];
    } if (a[1].length == 1) {
      a[1] = '0' + a[1];
    }
    time = a[0] + ':' + a[1]
    if (time.length < 6) {
      // Check correct time format and split into components
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(''); // return adjusted time or original string
    }
    else {
      return '';
    }
  }



  onMonthSelect(event) {
    this.newDate = event.year + '-' + (event.month + 1) + '-' + 1;
    this.getEvents();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }
  addEvents() {
    this.navCtrl.push(AddEventPage);
  }
  deleteEvents() {
    this.base.presentConfirm("Logout", "Do you want to Delete this record", [
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
          this.deleteEvent()
        }
      }
    ])
  }
  deleteEvent() {

  }

}
