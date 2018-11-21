import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { AlampagePage } from '../alampage/alampage';

import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  myVideo: any;
  isPlay: boolean = false;
  assigned_id: any;
  workout: any = {};
  workout1: any = 'http://10.10.10.254/bibinv/1.mp4';
  isVideo: boolean = false;
  indx: any;

  constructor(public zone: NgZone, public events: Events, public user: AppUser, public base: AppBase, private streamingMedia: StreamingMedia, private videoPlayer: VideoPlayer, public navCtrl: NavController, public navParams: NavParams) {
    this.indx = this.navParams.get('indx');
    this.assigned_id = this.navParams.get('assigned_id');
    console.log(this.navParams.get('assigned_id'), "fdsgjh fsjdhgsjfd jfhdsg");

    if (this.navParams.get('assigned_id')) {
      this.getWorkout()
    }

  }
  alamPageMyGoals(id) {
    this.navCtrl.push(AlampagePage, { assigned_id: id, type: "myworkout" });
  }
  changeCount(cond) {
    if (cond == 'add') {
      if (this.workout.repeat_times > this.workout.count) {
        this.workout.count += 1;
      } else {
        this.base.showToast("You have already reached the total no.of Reps assigned")
      }

    } else {
      if (this.workout.count > 0) {
        this.workout.count -= 1;
      } else {
        this.base.showToast("You cannot choose a value below 0")
      }

    }

  }
  updateWorkoutCount() {
    this.user.CommnFn({ param: { assigned_id: this.workout.assigned_id, count: this.workout.count, workout_progress_id: this.workout.workout_progress_id }, 'functionName': 'updateWorkoutCount' })
      .subscribe(
        data => {
          if (data.status) {
            this.events.publish('todayWorkOut', { count: this.workout.count, indx: this.indx })
            this.navCtrl.pop();
          } else {
            this.base.showToast(data.message)
          }
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  startVideo() {
    this.zone.run(() => {
      this.isVideo = true;
    });

  }
  getWorkout() {
    this.user.CommnFn({ param: { assigned_id: this.assigned_id }, 'functionName': 'getWorkout' })
      .subscribe(
        data => {
          if (data.status) {
            this.workout = data.details;
          } else {
            this.navCtrl.pop();
            this.base.showToast(data.message);
          }
          console.log(data)
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }
  playPause() {
    this.myVideo = document.getElementById("video1");
    if (this.myVideo.paused) {
      this.myVideo.play();
      this.isPlay = true;
    } else {
      this.myVideo.pause();
      this.isPlay = false;
    }

  }

  makeBig() {
    this.myVideo = document.getElementById("video1");
    this.myVideo.width = 560;
  }

  makeSmall() {
    this.myVideo = document.getElementById("video1");
    this.myVideo.width = 320;
  }

  makeNormal() {
    this.myVideo = document.getElementById("video1");
    this.myVideo.width = 420;
  }

  showAlert() {
    console.log(this.workout)
    this.base.showAlert({
      title: 'Details',
      subTitle: this.workout.workout_details,
      buttons: ['Dismiss']
    })
  }
}
