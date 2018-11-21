import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';

/**
 * Generated class for the AlampagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova;
@IonicPage()
@Component({
  selector: 'page-alampage',
  templateUrl: 'alampage.html',
})
export class AlampagePage {
  types: any;
  alam: any = { is_repeat: true };
  alarmName: any;

  constructor(public zone: NgZone, public user: AppUser, public base: AppBase, public localNotifications: LocalNotifications, public navCtrl: NavController, public navParams: NavParams) {
    this.alam.is_repeat = 'No';
    this.alam.alam_repeat = {};
    this.types = this.navParams.get("type");
    this.alam.goal_id = this.navParams.get("goal_id");
    this.alam.assigned_id = this.navParams.get("assigned_id");
    this.alarmName = this.navParams.get("name");

    console.log(this.alarmName, "alm nameeee!!!!!!!");
    if (this.alam.goal_id) {
      this.getalamDetails(this.alam.goal_id);
    }
    if (this.alam.assigned_id) {
      this.getWorkalamDetails(this.alam.assigned_id);
    }

  }
  repeatReset() {
    this.zone.run(() => {
      this.alam.is_repeat;
    });

  }
  insertArr(numr, int) {
    this.zone.run(() => {
      if (int in this.alam.alam_repeat) { delete this.alam.alam_repeat[int]; } else { this.alam.alam_repeat[int] = numr; }
      console.log(this.alam.alam_repeat, "fghd gfdh gfdh gfdh gfd");
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlampagePage');
  }
  getalamDetails(goal_id) {

    this.user.CommnFn({ param: { goal_id: goal_id }, 'functionName': 'getAlam' })
      .subscribe(
        data => {
          console.log(data);
          if (data.details.alam_repeat) {
            data.details.alam_repeat = JSON.parse(data.details.alam_repeat);
          } else {
            data.details.alam_repeat = {};
          }
          this.alam = data.details;
          if (this.alam.alam_on == 'Yes') {
            this.alam.alam_on == true;
          } else {
            this.alam.alam_on == false;
          }
          if (this.alam.is_repeat == 'Yes') {
            this.alam.is_repeat == true;
          } else {
            this.alam.is_repeat == false;
          }
          console.log(this.alam, "neww......")

        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }

  getWorkalamDetails(assigned_id) {

    this.user.CommnFn({ param: { assigned_id: assigned_id }, 'functionName': 'getWorkoutAlam' })
      .subscribe(
        data => {
          console.log(data);
          if (data.details.alam_repeat) {
            data.details.alam_repeat = JSON.parse(data.details.alam_repeat);
          } else {
            data.details.alam_repeat = {};
          }
          this.alam = data.details;
          if (this.alam.alam_on == 'Yes') {
            this.alam.alam_on == true;
          } else {
            this.alam.alam_on == false;
          }
          if (this.alam.is_repeat == 'Yes') {
            this.alam.is_repeat == true;
          } else {
            this.alam.is_repeat == false;
          }
          console.log(this.alam, "neww......")

        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }

  saveAlam() {
    var fnName;
    if (!this.alam.alam_time) {
      this.base.showToast("Please enter alarm time");
      return !1;
    }
    if (this.alam.alam_repeat) {
      this.alam.alam_repeat = JSON.stringify(this.alam.alam_repeat);
    }

    if (this.types == 'myworkout') {
      fnName = 'setWorkOutAlam';
    } else {
      fnName = 'setAlam';
    }
    console.log(this.alam, "alam array");
    if (!this.alam.is_repeat) {
      this.alam.alam_repeat = "{}";
    }
    this.user.CommnFn({ param: this.alam, 'functionName': fnName })
      .subscribe(
        data => {
          console.log(this.alam);
          if (data.status) {
            if (fnName == 'setAlam') {
              if (this.alam.alam_id) {
                this.removeAlam('alam', this.alam.alam_id);

              } else {
                this.setAlamFirst('alam', data.id);
              }
            }
            if (fnName == 'setWorkOutAlam') {
              if (this.alam.assigned_id) {
                this.removeAlam('workOut', this.alam.assigned_id)
              }
            }
            this.navCtrl.pop();
          }
          this.base.showToast('Alarm set successfully')
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }

  removeAlam(type, id) {
    cordova.plugins.notification.local.getAll((datas) => {
      var newArr = datas.map((item) => { if (item.data && JSON.parse(item.data).id == id && JSON.parse(item.data).type == type) { console.log(item.id); return item.id; } });


      cordova.plugins.notification.local.cancel(newArr, (dtas) => {
        console.log('remove', dtas);
        if (this.alam.alam_on) {
          this.setAlamFirst(type, id)
        }

      }, this)
    })
  }

  setAlamFirst(type, id) {
    var title;
    if (type == 'alam') {
      title = "My Goal";
    }
    if (type == 'workOut') {
      title = "My Workout";
    }
    Object.keys(JSON.parse(this.alam.alam_repeat)).map((keys) => {
      var a = {
        id: +new Date(),
        title: title,
        text: this.alarmName,
        trigger: {
          every: { weekday: (parseInt(keys) - 1), hour: parseInt(this.alam.alam_time.split(":")[0]), minute: parseInt(this.alam.alam_time.split(":")[1]) }
        },
        sound: null,
        data: { type: type, id: id, goal_id: '' }
      }
      if (this.alam.goal_id) {
        a.data = { type: type, id: id, goal_id: this.alam.goal_id }
      }
      this.user.localPushNotification(a);
    });
    setTimeout(() => {
      this.user.getLocalNotification()
    }, 500);
  }
}
