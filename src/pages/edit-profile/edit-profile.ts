import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';
import { AppCropperPage } from '../app-cropper/app-cropper'


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  userData: any = {};
  imageStatus: boolean = false;
  errMsg: boolean = false;
  constructor(public events: Events, public user: AppUser, public base: AppBase, public camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    events.unsubscribe('cropImg:profile');
    events.subscribe('cropImg:profile', (data) => {

      this.userData.image = data.image;
      this.imageStatus = true;

    });
    this.basicInfo()
  }
  basicInfo() {
    this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
      .subscribe(
        data => {
          this.userData = data.details;
          console.log(this.userData);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  saveUserData() {
    if (!this.userData.first_name || !this.userData.last_name) {
      this.errMsg = true;
      return !1;
    }
    var newArr = {};
    if (this.imageStatus) {
      newArr = { image: this.userData.image, about: this.userData.about, first_name: this.userData.first_name, last_name: this.userData.last_name };
    } else {
      newArr = { about: this.userData.about, first_name: this.userData.first_name, last_name: this.userData.last_name };
    }
    this.user.CommnFn({ param: newArr, 'functionName': 'updateProfileInfo' })
      .subscribe(
        data => {
          //this.userData = data;
          console.log(data);
          if (data.status) {
            this.navCtrl.pop();

            // if (this.imageStatus) {
            this.events.publish('cropImg:profileDash', { image: this.userData.image, first_name: this.userData.first_name, last_name: this.userData.last_name });
            this.events.publish('cropImg:profileMyacc', { image: this.userData.image, first_name: this.userData.first_name, last_name: this.userData.last_name });

            var dataUser = JSON.parse(this.base.fetchData('userdata'));
            dataUser.first_name = this.userData.first_name;
            dataUser.last_name = this.userData.last_name;
            localStorage.userdata = JSON.stringify(dataUser)
            // }

            this.base.showToast(data.message);
          } else {
            this.base.showToast(data.message);
          }
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  // takePic() {
  //   const options: CameraOptions = {
  //     quality: 60,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //     // imageData is either a base64 encoded string or a file URI
  //     // If it's base64:

  //     this.navCtrl.push(AppCropperPage, { imgData: { image: 'data:image/jpeg;base64,' + imageData, type: 'profile', aspectRatio: 3 / 3 } });
  //     //let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //     // Handle error
  //   });
  // }


  takePic() {
    this.base.presentActionSheet("Add Picture With", [
      {
        text: 'Gallery',
        role: 'destructive',
        icon: 'images',
        handler: () => {
          const options: CameraOptions = {
            quality: 50,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
          }
          this.camera.getPicture(options).then((imageData) => {

            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // this.cropeNew()
            this.navCtrl.push(AppCropperPage, { imgData: { image: 'data:image/jpeg;base64,' + imageData, type: 'profile', aspectRatio: 3 / 3 } });

            // this.userData.profile_image = 'data:image/jpeg;base64,' + imageData;
            // this.imgsBase = true;

          }, (err) => {
            // Handle error
          });
        }
      }, {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: false,
            mediaType: this.camera.MediaType.PICTURE,

          }
          this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            this.navCtrl.push(AppCropperPage, { imgData: { image: 'data:image/jpeg;base64,' + imageData, type: 'profile', aspectRatio: 3 / 3 } });
            // this.userData.profile_image = 'data:image/jpeg;base64,' + imageData;
            // this.imgsBase = true;
          }, (err) => {
            // Handle error
          });
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        icon: 'undo',
        handler: () => {

        }
      }
    ]);
  }


}
