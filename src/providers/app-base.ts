import { Injectable } from '@angular/core';
import { LoadingController, ToastController, ActionSheetController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Injectable()
export class AppBase {
  loading: any;
  nav: any = null;

  constructor(public loadingCtrl: LoadingController, public alert: AlertController, public toast: ToastController, public actionSheetCtrl: ActionSheetController) {

  }
  // public imageViewer(url, title = '') {
  //   if (url) {
  //     this.photoViewer.show(url , title);
  //   }

  // }


  public timeSince(currntDate, date) {


    var seconds = Math.floor((currntDate - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400); console.log(interval);
    if (interval >= 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  public validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }
  public showSpinner(type, message?: any) {
    //console.log("show spinner")
    return !!(type) ? this.createLoader(typeof message === "string" ? message : "Loading...") : this.destroyLoader();

  }

  private destroyLoader() {
    //console.log("show spinner end")
    return !!this.loading.dismissAll();
  }
  private createLoader(message: any) {
    this.loading = this.loadingCtrl.create({
      // content: `
      // <div class="custom-spinner-container">
      //   <div class="custom-spinner-box">`+ message + `</div>
      // </div>`
      spinner: 'hide',
      content: `<img src="assets/imgs/load.gif" class="gifloader"/>`,
    });
    this.loading.present();
  }



  saveToLocal(key: string, value: string) {
    let stoarage = localStorage;
    if (!(key && value))
      return !1;
    localStorage.setItem(key, value);

  }
  clearData() {
    return !!(localStorage.clear());
  }
  remove(key) {
    let storage = localStorage;
    storage.removeItem(key);
    return !0;
  }
  showToast(message, duration?: number): any {
    let toast = this.toast.create({
      message: message,
      duration: (duration || 2500),
      position: "center",

    });
    toast.present();
  }
  closeErr() {
    this.showToast("Please make sure that your device is connected to a network!");
    this.showSpinner(!1);
  }
  addData(data: any, optional?: any) {
    if (typeof data === "string" && typeof optional === "string")
      this.saveToLocal(data, optional);
    if (typeof data !== "object")
      return !1;
    let key;
    for (key in data) {
      this.saveToLocal(key, data[key]);
    }
  }
  showAlert(options: Object) {
    let alert = this.alert.create(options);
    alert.present();
  }
  fetchData(key: string) {
    let storage = localStorage;
    return storage.getItem(key) || null;
  }
  getData(data: any): any {
    if (typeof data === "string")
      return this.fetchData(data);
    if (!data.push) return !0;
    let count = data.length, i = 0, res = {}, k = null;
    for (; i < count; i++) {
      k = data[i];
      res[k] = this.fetchData(k);
    }
    return res;
  }
  isValidEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  removeData(data: any): any {
    if (typeof data === "string")
      return this.remove(data);
    if (!data.push) return !0;
    let count = data.length, i = 0, res = {}, k = null;
    for (; i < count; i++) {
      this.remove(res[k]);
    }
    return res;
  }
  presentConfirm(hedr, msg, buttons?) {
    this.alert.create({
      title: hedr,
      message: msg,
      buttons: buttons
    }).present();
  }
  presentActionSheet(hdng, buttons) {
    let actionSheet = this.actionSheetCtrl.create({
      title: hdng,
      buttons: buttons
    });
    actionSheet.present();
  }
  presentAlert(title, subTitle) {
    let alert = this.actionSheetCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  nameLetter(names) {
    return (names.split(" ").map(function (elm, indx) { return elm.charAt(0).toUpperCase() }).join(""));
  }
  firstNameLetter(name) {
    return name.charAt(0).toUpperCase()
  }
  getGooglePic(pic) {

    if (pic) {
      return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + pic + "&key=AIzaSyDAPrrGEMMCRpXQfL5X4ZDXrJGcn9lEKJo"
    } else {
      return !1;
    }

  }
  getGoogleWeather(lat, long) {

    if (lat && long) {
      return "https://api.darksky.net/forecast/434e4d42d2c851a3c85b1373989d0b50/" + lat + "," + long
    } else {
      return null;
    }

  }
}
