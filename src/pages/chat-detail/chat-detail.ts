import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { VideoPlayer } from '@ionic-native/video-player';
import { VideoEditor } from '@ionic-native/video-editor';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';
import { BaseUrl } from "../../url";
import { IonicImageViewerModule } from 'ionic-img-viewer'
import { ChatDetailMediaPage } from '../chat-detail_media/chat-detail_media'
/**
 * Generated class for the ChatDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-detail',
  templateUrl: 'chat-detail.html',

})
export class ChatDetailPage {
  chat: any = [];
  groupDetails: any = {};
  userdetails: any = {};
  baseurl: string = BaseUrl;
  progress: any;
  stattusProgress: boolean = false;
  reqNewArr: any = {};
  mediaName: any;
  media_url: any;
  mesgArray: any = {}
  videoName: any;
  video_url: any;
  videoThump: any;
  thumbImg: any;
  typeMedia: any;
  tempObject: any = {}
  userCount: any = '1';
  @ViewChild('content') content: any;
  constructor(private videoPlayer: VideoPlayer, private streamingMedia: StreamingMedia, public events: Events, private videoEditor: VideoEditor, public camera: Camera, private transfer: FileTransfer, public _zone: NgZone, public user: AppUser, public base: AppBase, public navCtrl: NavController, public navParams: NavParams, private mediaCapture: MediaCapture) {

    events.unsubscribe('messageList:detail');
    events.subscribe('messageList:detail', (data) => {

      console.log(data, "get srt")

      data = data.datas;
      if (this.groupDetails.group_id == data.group_id) {

        _zone.run(() => {
          this.chat.push(data);
          setTimeout(() => {
            this.content.scrollToBottom(1);//300ms animation speed
          }, 100);
        });

      } else {
        var group_id = data.group_id;
        var group_name = data.group_name;
        var i = 1;
        this.base.presentConfirm("New Message from " + group_name, "Do you want to see", [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.events.publish('messageList:list', { datas: data });
              console.log("can")
            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log({ group_id, i, group_name })
              this.navCtrl.push(ChatDetailPage, { data: { group_id, i, group_name } });

            }
          }
        ])
      }
    })

    this.userdetails = JSON.parse(localStorage.userdata);
    this.groupDetails = this.navParams.get('data');
    console.log(this.groupDetails, "group Details");
    this.getMessage(this.groupDetails.group_id)

    events.unsubscribe('sendMultiMessage');
    events.subscribe('sendMultiMessage', (data) => {

      this.tempObject = data;
      console.log(data, "new ent");
      //this.sendMediaMessage(data)
      this.sendMessageMedia('', this.tempObject.message);
      setTimeout(() => {
        this.content.scrollToBottom(1);//300ms animation speed
      }, 100);
    })
  }

  getMessage(group_id) {
    this.user.CommnFn({ param: { group_id: group_id }, 'functionName': 'getMessage' })
      .subscribe(
        data => {
          this.userCount = data.count
          this.chat = data.details;
          if (this.chat.length) {
            this.updateReadCount(this.chat[this.chat.length - 1].message_id);
          }
          setTimeout(() => {
            this.content.scrollToBottom(1);//300ms animation speed
          }, 100);
          setTimeout(() => {
            this.content.scrollToBottom(1);//300ms animation speed
          }, 1300);
          console.log(this.chat);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  updateReadCount(message_id) {
    this.user.CommnFn({ param: { message_id: message_id, group_id: this.groupDetails.group_id }, 'functionName': 'updateReadCount' })
      .subscribe(
        data => {

        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatDetailPage');
  }



  // //////////////////////////////////////////////// file trans

  sendMessage() {

    if (!this.video_url) {
      this.sendTextMsg()
    } else {
      //  this.sendMessageMedia();
    }
  }
  sendTextMsg() {
    if (!this.mesgArray.message) {
      return !1;
    }
    this.user.CommnFn({ param: { message: this.mesgArray.message, group_id: this.groupDetails.group_id }, 'functionName': 'addMessage' })
      .subscribe(
        data => {

          var newOb = {
            date: "Now",
            group_id: this.groupDetails.group_id,
            image: this.userdetails.image,
            media_url: '',
            member_id: this.userdetails.member_id,
            message: this.mesgArray.message,
            message_from: this.userdetails.first_name,
            message_id: 1,
            thumb_nail: '',
            type: 'text'
          }
          this.chat.push(newOb);
          setTimeout(() => {
            this.mesgArray.message = '';
            this.content.scrollToBottom(300);//300ms animation speed
          }, 100);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  sendMessageMedia(type = '', message) {

    this.reqNewArr.group_id = this.groupDetails.group_id;
    this.reqNewArr.type = this.typeMedia;
    this.reqNewArr.message = message;
    this.stattusProgress = true;
    this.base.showSpinner(!0, 'Please Wait.. Uploading might take few seconds..');
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'video_url',
      fileName: this.videoName,
      headers: this.user.headerOptionsForFormData(),
      params: this.reqNewArr
    }

    fileTransfer.upload(this.video_url, this.baseurl + 'users/saveRequestsnew', options)
      .then((data) => {
        this.stattusProgress = false;
        var data1 = JSON.parse(data.response)
        if (data1.status) {
          this.tempObject.message_id = data1.message_id;
          this.tempObject.media_url = data1.media_url;
          this.tempObject.image = this.userdetails.image;
          this.chat.push(this.tempObject);
          setTimeout(() => {
            this.content.scrollToBottom(1);
          }, 100);
          this.base.showSpinner(!1);
        } else {
          console.log(data1);
          this.base.showToast(data1.message);
          this.base.showSpinner(!1);
          return !1;
        }
        console.log(typeof (data.response), data, "datataaa......")
        this.base.showSpinner(!1);
        // success
      }, (err) => {
        console.log(err, "error......")
        this.stattusProgress = false;
        this.base.showSpinner(!1);

      })



    var that = this;
    fileTransfer.onProgress((e) => {
      this._zone.run(() => {
        that.progress = (e.lengthComputable) ? Math.floor(e.loaded / e.total * 100) : -1;
      });
    });


  }

  takePic() {
    this.base.presentActionSheet("Add Picture With", [
      {
        text: 'Gallery',
        role: 'destructive',
        icon: 'images',
        handler: () => {
          this.getImageGallery()
        }
      }, {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.getImageFromCamera()
        }
      }, {
        text: 'Video Gallery',
        icon: 'camera',
        handler: () => {
          this.getVideoGallery()
        }
      }, {

        text: 'Video Capture',
        icon: 'camera',
        handler: () => {
          this.getVideoCamGallery()
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

  getImageGallery() {


    const options: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: false,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData, 'new im')
      if (imageData.substring(0, 21) == "content://com.android") {
        var photo_split = imageData.split("%3A");
        this.video_url = "content://media/external/images/media/" + photo_split[1];
      } else {
        this.video_url = imageData;
      }
      this.typeMedia = 'image';

      this.addNewObjectToMessageArray('', this.video_url, '', 'image');
    }, (err) => {
      // Handle error
    });
  }
  getImageFromCamera() {

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      allowEdit: false,
      mediaType: this.camera.MediaType.PICTURE,

    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData, 'new im')
      this.typeMedia = 'image';
      this.video_url = imageData;
      this.addNewObjectToMessageArray('', this.video_url, '', 'image');
    }, (err) => {
      // Handle error
    });
  }
  getVideoGallery() {
    const options: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.VIDEO,
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData, 'new im')

      this.media_url = imageData;
      this.video_url = imageData;
      this.videoName = imageData.split('/')[imageData.split('/').length - 1];
      this.typeMedia = 'video';
      this.createvideoThumb(this.video_url)

      // this.addNewObjectToMessageArray('', this.video_url, '', 'video');

      console.log(imageData, "new one ")
    }, (err) => {
      // Handle error
    });
  }


  getVideoCamGallery() {
    let options: CaptureImageOptions = { limit: 1 };
    this.mediaCapture.captureVideo(options)
      .then((data: MediaFile[]) => {
        this.videoName = data[0]['name'];
        this.reqNewArr.video_url = data[0]['localURL'];
        this.video_url = data[0]['localURL'];
        this.createvideoThumb(data[0].fullPath)
        this.typeMedia = 'video';
      }, (err: CaptureError) => console.error(err)

      );
  }

  createvideoThumb(file) {

    this.videoEditor.createThumbnail({
      fileUri: file,
      outputFileName: new Date().getTime().toString(),
      atTime: 1
    }).then((fileUri: string) => {
      console.log('video transcode success', fileUri)
      this.thumbImg = fileUri;
      this.addNewObjectToMessageArray('', this.video_url, '', 'video');
    }).catch((error: any) => {
      //console.log('video transcode error', error)
      return '';

    });
  }


  addNewObjectToMessageArray(image = '', media_url = '', message = '', type = '') {
    if (type == 'video') {
      setTimeout(() => {
        var newOb = {
          date: "Now",
          group_id: this.groupDetails.group_id,
          image: image,
          media_url: media_url,
          member_id: this.userdetails.member_id,
          message: message,
          message_from: this.userdetails.first_name,
          message_id: 1,
          thumb_nail: this.thumbImg,
          type: type
        }
        console.log("show two tim");
        this.navCtrl.push(ChatDetailMediaPage, { data: newOb });
      }, 700);
    } else {
      var newOb = {
        date: "Now",
        group_id: this.groupDetails.group_id,
        image: image,
        media_url: media_url,
        member_id: this.userdetails.member_id,
        message: message,
        message_from: this.userdetails.first_name,
        message_id: 1,
        thumb_nail: this.thumbImg,
        type: type
      }
      console.log("show img tim")
      this.navCtrl.push(ChatDetailMediaPage, { data: newOb });
    }
  }



  playVideo(video) {

    // this.videoPlayer.play(video).then(() => {
    //   console.log('video completed');
    //   setTimeout(() => {
    //     this.videoPlayer.close();
    //   }, 100);
    // }).catch(err => {
    //   console.log(err);
    // });

    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      shouldAutoClose: true,
      // orientation: 'landscape'
    };

    this.streamingMedia.playVideo(video, options);
  }


}
