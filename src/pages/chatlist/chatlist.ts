import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { ChatDetailPage } from '../chat-detail/chat-detail';

import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';

/**
 * Generated class for the ChatlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatlist',
  templateUrl: 'chatlist.html',
})
export class ChatlistPage {
  chat_list: any = [];
  constructor(private zone: NgZone, public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {

    events.unsubscribe('messageList:list');
    events.subscribe('messageList:list', (data) => {

      console.log(data, "get srt")

      data = data.datas;

      console.log(data);
      if (this.chat_list.map((item, i) => {
        if (item.group_id == data.group_id) {
          this.zone.run(() => {
            this.chat_list[i].unread += 1;
          })
          return !0;
        } else { }
      }).indexOf(true) >= 0) {

        console.log("ok")
      } else {
        this.zone.run(() => {
          this.chat_list.push(data);
        })
        console.log("not working")
      }
      setTimeout(() => {
        console.log(this.chat_list)
      }, 200);

    })

    this.chatList()
  }
  chatList() {
    this.user.CommnFn({ param: {}, 'functionName': 'chatList' })
      .subscribe(
      data => {
        this.chat_list = data.details;
        console.log(this.chat_list);
      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })
  }
  getFirstLetter(name) {
    return this.base.firstNameLetter(name);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatlistPage');
  }
  messageDetails(group_id, i, group_name) {
    this.chat_list[i].unread = 0;
    this.navCtrl.push(ChatDetailPage, { data: { group_id, i, group_name } });
  }

}
