import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';
import { BaseUrl } from "../../url";
/**
 * Generated class for the ChatDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-detail_media',
  templateUrl: 'chat-detail_media.html',

})
export class ChatDetailMediaPage {
  mediaArray: any = {};
  constructor(private DomSanitizer: DomSanitizer, public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams) {
    this.mediaArray = this.navParams.get('data');
  }

  sendMediaMessage() {
    this.mediaArray.play = 0;
    this.events.publish('sendMultiMessage', this.mediaArray);
    this.navCtrl.pop();
  }

}
