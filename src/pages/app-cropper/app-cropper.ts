import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import Cropper from 'cropperjs';




@Component({
  selector: 'page-app-cropper',
  templateUrl: 'app-cropper.html',
})
export class AppCropperPage {

  cropper: any;
  imageData: any = {}
  newImg: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.imageData = this.navParams.get('imgData');

  }

  cropeNew() {
    console.log("oookkkk");

    let targetImage = document.getElementById("image") as HTMLImageElement;
    this.cropper = new Cropper(targetImage, {
      viewMode: 2,
      zoomable: true,
      zoomOnTouch: true,
      zoomOnWheel: true,
      rotatable: true,
      aspectRatio: this.imageData.aspectRatio,
      cropBoxMovable: true,
      cropBoxResizable: true


    })
    this.cropper.getCroppedCanvas({
      width: 160,
      height: 90,
      minWidth: 256,
      minHeight: 256,
      maxWidth: 4096,
      maxHeight: 4096,
      fillColor: '#fff',
      imageSmoothingEnabled: false,
      imageSmoothingQuality: 'high',
    });
  }
  ionViewDidLoad() {
    setTimeout(() => {
      this.cropeNew()
    }, 300);

    console.log('ionViewDidLoad EditAccountPage');
  }
  cropImage() {
    this.newImg = this.cropper.getCroppedCanvas().toDataURL("image/jpeg", 0.4);
    if (this.imageData.type == 'profile') {
      this.navCtrl.pop();
      this.events.publish('cropImg:profile', { image: this.newImg });
     
      // this.events.publish('cropImg:profileDash', { image: this.newImg });
    }


  }

  rotate() {
    this.cropper.rotate(90);
  }



}