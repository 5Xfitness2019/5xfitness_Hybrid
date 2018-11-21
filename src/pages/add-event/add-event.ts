import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
  events: any = {};
  err: boolean = false;
  constructor(public event: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  saveEvents() {
    if (!this.events.time || !this.events.date || !this.events.title) {
      this.err = true;
      return !1;
    }
    this.user.CommnFn({ param: this.events, 'functionName': 'saveEvents' })
      .subscribe(
      data => {
        if (data.status) {
          this.events.appointment_id = data.id;
          this.event.publish('eventAdd', { event: this.events });
          this.navCtrl.pop();
        } else {
          this.base.showToast("Network error, Please check your connection ")
        }

      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })
  }

}
