webpackJsonp([29],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBase = /** @class */ (function () {
    function AppBase(loadingCtrl, alert, toast, actionSheetCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.toast = toast;
        this.actionSheetCtrl = actionSheetCtrl;
        this.nav = null;
    }
    // public imageViewer(url, title = '') {
    //   if (url) {
    //     this.photoViewer.show(url , title);
    //   }
    // }
    AppBase.prototype.timeSince = function (currntDate, date) {
        var seconds = Math.floor((currntDate - date) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        console.log(interval);
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
    };
    AppBase.prototype.validateEmail = function (email) {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    };
    AppBase.prototype.showSpinner = function (type, message) {
        //console.log("show spinner")
        return !!(type) ? this.createLoader(typeof message === "string" ? message : "Loading...") : this.destroyLoader();
    };
    AppBase.prototype.destroyLoader = function () {
        //console.log("show spinner end")
        return !!this.loading.dismissAll();
    };
    AppBase.prototype.createLoader = function (message) {
        this.loading = this.loadingCtrl.create({
            // content: `
            // <div class="custom-spinner-container">
            //   <div class="custom-spinner-box">`+ message + `</div>
            // </div>`
            spinner: 'hide',
            content: "<img src=\"assets/imgs/load.gif\" class=\"gifloader\"/>",
        });
        this.loading.present();
    };
    AppBase.prototype.saveToLocal = function (key, value) {
        var stoarage = localStorage;
        if (!(key && value))
            return !1;
        localStorage.setItem(key, value);
    };
    AppBase.prototype.clearData = function () {
        return !!(localStorage.clear());
    };
    AppBase.prototype.remove = function (key) {
        var storage = localStorage;
        storage.removeItem(key);
        return !0;
    };
    AppBase.prototype.showToast = function (message, duration) {
        var toast = this.toast.create({
            message: message,
            duration: (duration || 2500),
            position: "center",
        });
        toast.present();
    };
    AppBase.prototype.closeErr = function () {
        this.showToast("Please make sure that your device is connected to a network!");
        this.showSpinner(!1);
    };
    AppBase.prototype.addData = function (data, optional) {
        if (typeof data === "string" && typeof optional === "string")
            this.saveToLocal(data, optional);
        if (typeof data !== "object")
            return !1;
        var key;
        for (key in data) {
            this.saveToLocal(key, data[key]);
        }
    };
    AppBase.prototype.showAlert = function (options) {
        var alert = this.alert.create(options);
        alert.present();
    };
    AppBase.prototype.fetchData = function (key) {
        var storage = localStorage;
        return storage.getItem(key) || null;
    };
    AppBase.prototype.getData = function (data) {
        if (typeof data === "string")
            return this.fetchData(data);
        if (!data.push)
            return !0;
        var count = data.length, i = 0, res = {}, k = null;
        for (; i < count; i++) {
            k = data[i];
            res[k] = this.fetchData(k);
        }
        return res;
    };
    AppBase.prototype.isValidEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    AppBase.prototype.removeData = function (data) {
        if (typeof data === "string")
            return this.remove(data);
        if (!data.push)
            return !0;
        var count = data.length, i = 0, res = {}, k = null;
        for (; i < count; i++) {
            this.remove(res[k]);
        }
        return res;
    };
    AppBase.prototype.presentConfirm = function (hedr, msg, buttons) {
        this.alert.create({
            title: hedr,
            message: msg,
            buttons: buttons
        }).present();
    };
    AppBase.prototype.presentActionSheet = function (hdng, buttons) {
        var actionSheet = this.actionSheetCtrl.create({
            title: hdng,
            buttons: buttons
        });
        actionSheet.present();
    };
    AppBase.prototype.presentAlert = function (title, subTitle) {
        var alert = this.actionSheetCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    AppBase.prototype.nameLetter = function (names) {
        return (names.split(" ").map(function (elm, indx) { return elm.charAt(0).toUpperCase(); }).join(""));
    };
    AppBase.prototype.firstNameLetter = function (name) {
        return name.charAt(0).toUpperCase();
    };
    AppBase.prototype.getGooglePic = function (pic) {
        if (pic) {
            return "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + pic + "&key=AIzaSyDAPrrGEMMCRpXQfL5X4ZDXrJGcn9lEKJo";
        }
        else {
            return !1;
        }
    };
    AppBase.prototype.getGoogleWeather = function (lat, long) {
        if (lat && long) {
            return "https://api.darksky.net/forecast/434e4d42d2c851a3c85b1373989d0b50/" + lat + "," + long;
        }
        else {
            return null;
        }
    };
    AppBase = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], AppBase);
    return AppBase;
}());

//# sourceMappingURL=app-base.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppUser = /** @class */ (function () {
    function AppUser(http, base) {
        this.http = http;
        this.base = base;
        this.baseurl = __WEBPACK_IMPORTED_MODULE_2__url__["a" /* BaseUrl */];
        this.controller = "users/";
        this.httpOptions = null;
        this.controller = this.baseurl + this.controller;
        this.httpOptions = this.headerOptions('application/json');
    }
    AppUser.prototype.localPushNotification = function (notdatas) {
        if (notdatas === void 0) { notdatas = {}; }
        notdatas['smallIcon'] = 'res://icon.png';
        notdatas['icon'] = 'file://assets/imgs/logo.png';
        notdatas['sound'] = 'file://assets/tune/alam.mp3';
        cordova.plugins.notification.local.schedule(notdatas);
    };
    AppUser.prototype.localPushnotificationCancel = function (ids) {
        if (ids === void 0) { ids = []; }
        cordova.plugins.notification.local.cancel(ids, function () {
        }, this);
    };
    AppUser.prototype.localPushnotificationCancelAll = function () {
        cordova.plugins.notification.local.cancelAll(function () {
            return !0;
        }, this);
    };
    AppUser.prototype.getLocalNotification = function () {
        cordova.plugins.notification.local.getAll(function (datas) {
            return datas;
        });
    };
    AppUser.prototype.getUrl = function (action) {
        return this.controller + action;
    };
    AppUser.prototype.headerOptions = function (datatype) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', datatype);
        if (this.base.fetchData('Tocken')) {
            headers.append('x-access-token', this.base.fetchData('Tocken'));
        }
        return headers;
    };
    AppUser.prototype.login = function (data) {
        var info = JSON.stringify(data);
        return this.http.post(this.getUrl('authenticate'), info, {
            headers: this.headerOptions('application/json')
        }).map(function (res) { return res.json(); });
    };
    AppUser.prototype.forgotpassword = function (data) {
        var info = JSON.stringify(data);
        return this.http.post(this.getUrl('forgotpassword'), info, {
            headers: this.headerOptions('application/json')
        }).map(function (res) { return res.json(); });
    };
    AppUser.prototype.CommnFnNotLoader = function (data) {
        var info = JSON.stringify(data.param);
        return this.http.post(this.getUrl(data.functionName), info, {
            headers: this.headerOptions('application/json')
        }).map(function (res) {
            return res.json();
        });
    };
    AppUser.prototype.CommnFn = function (data) {
        var _this = this;
        this.base.showSpinner(!0, 'loading...');
        var info = JSON.stringify(data.param);
        return this.http.post(this.getUrl(data.functionName), info, {
            headers: this.headerOptions('application/json')
        }).map(function (res) {
            _this.base.showSpinner(!1);
            _this.base.showSpinner(!1);
            return res.json();
        });
    };
    AppUser.prototype.CommnFnMul = function (data) {
        var info = JSON.stringify(data.param);
        return this.http.post(this.getUrl(data.functionName), info, {
            headers: this.headerOptions('application/json')
        }).map(function (res) {
            return res.json();
        });
    };
    AppUser.prototype.CommnFnGet = function (data) {
        var _this = this;
        this.base.showSpinner(!0, 'loading...');
        return this.http.get(this.ForgetUrl(data.functionName)).map(function (res) {
            console.log("fdgfd");
            _this.base.showSpinner(!1);
            _this.base.showSpinner(!1);
            return res.json();
        });
    };
    AppUser.prototype.CommnDirectUrl = function (data) {
        return this.http.get(data).map(function (res) {
            console.log(typeof (res), res);
            return res.json();
        });
    };
    AppUser.prototype.ForgetUrl = function (data) {
        return this.controller + data;
    };
    AppUser.prototype.CommnFnForForm = function (data) {
        var dataP = this.serialize(data.param);
        ///this.base.showSpinner(!0, 'loading...');
        //let info = JSON.stringify(data.param);
        return this.http.post(this.getUrl(data.functionName), dataP, {
            headers: this.headerOptionsForFormData()
        }).map(function (res) {
            //this.base.showSpinner(!1);
            return res.json();
        });
    };
    AppUser.prototype.headerOptionsForFormData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (this.base.fetchData('Tocken')) {
            headers.append('x-access-token', this.base.fetchData('Tocken'));
        }
        return headers;
    };
    AppUser.prototype.serialize = function (obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    AppUser.prototype.satBx1 = function (data) {
        //let ur = "https://sandbox.itunes.apple.com/verifyReceipt";
        var ur = "https://buy.itunes.apple.com/verifyReceipt";
        var info = JSON.stringify(data);
        return this.http.post(ur, info, {
            headers: this.httpOptions
        }).map(function (res) { return res.json(); });
    };
    AppUser.prototype.satBx = function (data) {
        //let ur = "https://sandbox.itunes.apple.com/verifyReceipt";
        var ur = data.urls;
        delete data['urls'];
        var info = JSON.stringify(data);
        return this
            .http
            .post(ur, info, {
            headers: this.httpOptions
        }).map(function (res) { return res.json(); });
    };
    AppUser.prototype.getReceptUrl = function () {
        return this.http
            .post(this.getUrl('getReceptUrl'), {
            headers: this.httpOptions
        })
            .map(function (res) { return res.json(); });
    };
    AppUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */]])
    ], AppUser);
    return AppUser;
}());

//# sourceMappingURL=app-user.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddEventPage = /** @class */ (function () {
    function AddEventPage(event, user, base, navCtrl, navParams) {
        this.event = event;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = {};
        this.err = false;
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
    };
    AddEventPage.prototype.saveEvents = function () {
        var _this = this;
        if (!this.events.time || !this.events.date || !this.events.title) {
            this.err = true;
            return !1;
        }
        this.user.CommnFn({ param: this.events, 'functionName': 'saveEvents' })
            .subscribe(function (data) {
            if (data.status) {
                _this.events.appointment_id = data.id;
                _this.event.publish('eventAdd', { event: _this.events });
                _this.navCtrl.pop();
            }
            else {
                _this.base.showToast("Network error, Please check your connection ");
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-event',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\add-event\add-event.html"*/'<!--\n  Generated template for the Signup2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header class="title_main">\n\n  <ion-navbar>\n    <ion-title>\n      <img src="assets/imgs/logo.png" alt=""> Create Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="bg_main">\n\n  <ion-list class="form_main">\n\n    <ion-item class="date_picker">\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="events.date" placeholder="Select Date"></ion-datetime>\n    </ion-item>\n    <span class="msgErr" *ngIf="err && !events.date">Please enter event Date </span>\n\n    <ion-item class="date_picker">\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="events.time" placeholder="Select Time"></ion-datetime>\n    </ion-item>\n    <span class="msgErr" *ngIf="err && !events.time">Please enter event Time </span>\n    <ion-item>\n      <ion-input [(ngModel)]="events.title" placeholder="Title"></ion-input>\n    </ion-item>\n    <span class="msgErr" *ngIf="err && !events.title">Please enter event Title </span>\n    <ion-item>\n      <ion-textarea placeholder="Description" [(ngModel)]="events.description"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Repeat</ion-label>\n      <ion-select class="select_label" [(ngModel)]="events.repeat">\n        <ion-option value="daily">Daily</ion-option>\n        <ion-option value="week">Every Week this Day</ion-option>\n        <ion-option value="month">Every Month this Date</ion-option>\n        <ion-option value="year">Every Year this Date</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Reminder</ion-label>\n      <ion-select class="select_label" [(ngModel)]="events.reminder">\n        <ion-option value="180">3 Hours</ion-option>\n        <ion-option value="60">1 Hour</ion-option>\n        <ion-option value="30">30 Minutes</ion-option>\n        <ion-option value="15">15 Minutes</ion-option>\n      </ion-select>\n    </ion-item>\n    <button class="btntheme" (click)="saveEvents()" ion-button block>SAVE</button>\n\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_2__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_event_add_event__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalendarPage = /** @class */ (function () {
    function CalendarPage(localNotifications, events, zone, user, base, navCtrl, navParams) {
        this.localNotifications = localNotifications;
        this.events = events;
        this.zone = zone;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentEvents = [];
        this.userevents = [];
        this.tempArr = [];
        this.getEvents();
        this.eventList();
    }
    CalendarPage.prototype.forTest = function () {
        cordova.plugins.notification.local.getAll(function (datas) {
            console.log(datas);
        }, function (err) {
            console.log(err);
        });
    };
    CalendarPage.prototype.forTest2 = function () {
        cordova.plugins.notification.local.cancel([1531484496936, 1531483943760, 1531484071791, 1531484071788, 1531484200677, 1531484327639, 1531483174719, 1531486033391, 1531484200682, 1531483174722, 1531484200687, undefined, 1531483943757, 1531483943754, 1531484071780, 1531484200691, 1531483114574, 1531484200685, 1531484071795, undefined, 1531483174716, 1531483114578], function () {
            alert('OK');
        }, this);
    };
    CalendarPage.prototype.forTest1 = function () {
        for (var i = 0; i < 20; i++) {
            this.forTest12();
        }
    };
    CalendarPage.prototype.forTest12 = function () {
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
    };
    CalendarPage.prototype.genereteCalendarView = function () {
        this.currentEvents = this.userevents;
    };
    CalendarPage.prototype.getEvents = function () {
        var _this = this;
        if (!this.newDate) {
            var today = new Date();
            this.newDate = today.getFullYear() + '-' + (today.getMonth() + 1).toString() + '-' + today.getDate().toString();
        }
        // this.user.CommnFn({ param: {}, 'functionName': 'getEvents' })
        this.user.CommnFn({ param: { date: this.newDate }, 'functionName': 'getMyWorkouts' })
            .subscribe(function (data) {
            if (data.status) {
                _this.userevents = data.myworkouts;
                _this.genereteCalendarView();
                _this.eventList();
            }
            else {
                _this.base.showToast(data.message);
            }
            //this.userevents = data.details;
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection");
        });
    };
    CalendarPage.prototype.onDaySelect = function (event) {
        var month;
        var date;
        if (event.month.toString().length == 1 && event.month.toString() != '9') {
            month = '0' + (event.month + 1);
        }
        else {
            month = (event.month + 1);
        }
        if (event.date.toString().length == 1) {
            date = '0' + (event.date);
        }
        else {
            date = (event.date);
        }
        var newDate = event.year + '-' + month + '-' + date;
        this.eventList(newDate, event.date);
    };
    CalendarPage.prototype.eventList = function (date, crntDate) {
        var _this = this;
        if (date === void 0) { date = ''; }
        if (crntDate === void 0) { crntDate = ''; }
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
                dd = '0' + dd;
            }
            if (mm.length == 1) {
                mm = '0' + mm;
            }
            crntDate = dd;
            date = yyyy + '-' + mm + '-' + dd;
        }
        var d = new Date(date);
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var newDay = days[d.getDay()];
        var newMonth = months[d.getMonth()];
        this.userevents.map(function (item) { if (item.date == crntDate) {
            item.new_time = _this.tConvert(item.work_times);
            item.new_day = newDay;
            item.month_day = newMonth;
            _this.tempArr.push(item);
        } });
    };
    CalendarPage.prototype.tConvert = function (time) {
        var a = time.split(':');
        if (a[0].length == 1) {
            a[0] = '0' + a[0];
        }
        if (a[1].length == 1) {
            a[1] = '0' + a[1];
        }
        time = a[0] + ':' + a[1];
        if (time.length < 6) {
            // Check correct time format and split into components
            time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
            if (time.length > 1) {
                time = time.slice(1); // Remove full string match value
                time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
                time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            return time.join(''); // return adjusted time or original string
        }
        else {
            return '';
        }
    };
    CalendarPage.prototype.onMonthSelect = function (event) {
        this.newDate = event.year + '-' + (event.month + 1) + '-' + 1;
        this.getEvents();
    };
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage.prototype.addEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_event_add_event__["a" /* AddEventPage */]);
    };
    CalendarPage.prototype.deleteEvents = function () {
        var _this = this;
        this.base.presentConfirm("Logout", "Do you want to Delete this record", [
            {
                text: 'Cancel',
                role: 'cancel',
                handler: function () {
                    console.log("can");
                }
            },
            {
                text: 'Ok',
                handler: function () {
                    _this.deleteEvent();
                }
            }
        ]);
    };
    CalendarPage.prototype.deleteEvent = function () {
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\calendar\calendar.html"*/'<ion-header class="title_main">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt=""></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="inner_bg">\n\n\n    <ion-item class="cal_bg">\n\n        <ion-calendar #calendar [events]="currentEvents" (onDaySelect)="onDaySelect($event)" (onMonthSelect)="onMonthSelect($event)"></ion-calendar>\n\n    </ion-item>\n\n    <ion-list *ngFor="let list of tempArr; let i = index">\n\n        <ion-item-sliding #item class="block_calender">\n            <ion-item>\n                <h3 class="liddate" item-start>\n                    {{list.new_day}}\n                    <br>\n                    <span>{{list.month_day}} {{list.date}}</span>\n                </h3>\n                <h2>{{list.workout_details}}</h2>\n                <p>{{list.new_time}}</p>\n            </ion-item>\n            <!-- <ion-item-options side="right">\n                <button ion-button class="btnslide" (click)="deleteEvents()">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item-options> -->\n        </ion-item-sliding>\n    </ion-list>\n\n\n\n    <!-- <ion-list>\n        <ion-item-sliding #item>\n            <ion-item>\n                Item\n            </ion-item>\n            <ion-item-options side="left">\n                <button ion-button (click)="favorite(item)">Favorite</button>\n                <button ion-button color="danger" (click)="share(item)">Share</button>\n            </ion-item-options>\n\n            <ion-item-options side="right">\n                <button ion-button (click)="unread(item)">Unread</button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list> -->\n\n\n\n<!-- \n    <ion-fab bottom right class="fab_add">\n\n       \n\n        <button ion-fab (click)="forTest()">\n            <ion-icon name="md-add"></ion-icon>\n        </button>\n        <button ion-fab (click)="forTest2()">\n            <ion-icon name="md-add"></ion-icon>\n        </button>\n        \n        <button ion-fab (click)="forTest1()">\n            <ion-icon name="md-add"></ion-icon>\n        </button>\n    </ion-fab> -->\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_5__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_4__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
        this.errMsg = false;
    }
    ChangepasswordPage.prototype.changePsd = function () {
        var _this = this;
        if (!this.userData.old_password || !this.userData.password || !this.userData.cnfm_password || (this.userData.password != this.userData.cnfm_password)) {
            this.errMsg = true;
            return !1;
        }
        this.user.CommnFn({ param: this.userData, 'functionName': 'changePassword' })
            .subscribe(function (data) {
            console.log(data);
            _this.base.showToast(data.message);
            if (data.status) {
                _this.navCtrl.pop();
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.changePassword = function () {
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-changepassword',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\changepassword\changepassword.html"*/'<!--\n  Generated template for the CreateGoalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n\n    <ion-navbar>\n        <ion-title><img src="assets/imgs/logo.png" alt=""> Change Password</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg_main">\n    <br>\n    <br><br>\n    <h2 class="label_header">\n        Change Password<br>\n        <span>Please fill out the information to change your password.</span>\n    </h2>\n\n    <ion-list class="form_main">\n        <br>\n\n        <ion-item>\n            <ion-input [(ngModel)]="userData.old_password" type="text" value="" placeholder="Current Password*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.old_password">Please enter your Current Password</span>\n        <br>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="userData.password" value="" placeholder="New Password*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.password">Please enter your New Password</span>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="userData.cnfm_password" value="" placeholder="Confirm Password*"></ion-input>\n        </ion-item>\n\n        <span class="msgErr" *ngIf="errMsg && (userData.cnfm_password != userData.password )">Password and confirm password not match</span>\n\n        <button class="btntheme" ion-button block (click)="changePsd()">SAVE</button>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\changepassword\changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_2__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailMediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatDetailMediaPage = /** @class */ (function () {
    function ChatDetailMediaPage(DomSanitizer, events, user, base, navCtrl, navParams) {
        this.DomSanitizer = DomSanitizer;
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mediaArray = {};
        this.mediaArray = this.navParams.get('data');
    }
    ChatDetailMediaPage.prototype.sendMediaMessage = function () {
        this.mediaArray.play = 0;
        this.events.publish('sendMultiMessage', this.mediaArray);
        this.navCtrl.pop();
    };
    ChatDetailMediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-detail_media',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\chat-detail_media\chat-detail_media.html"*/'<ion-header class="title_main">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt="">\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content #content padding class="inner_bg">\n\n\n\n\n    <ion-list *ngIf="mediaArray.type == \'image\'">\n        <img   [src]="DomSanitizer.bypassSecurityTrustUrl(mediaArray.media_url)">\n    </ion-list>\n    <ion-list *ngIf="mediaArray.type == \'video\'">\n        <img src="{{mediaArray.thumb_nail}}">\n    </ion-list>\n\n\n\n\n\n\n    <ion-footer keyboard-attach="" class="bar-stable item-input-inset bar bar-footer">\n        <label class="item-input-wrapper">\n            <input placeholder="Type your message" [(ngModel)]="mediaArray.message" type="text" class="msg_input">\n        </label>\n\n        <button class="button button-clear btn_snd" (click)="sendMediaMessage()">\n            <ion-icon name="ios-send"></ion-icon>\n        </button>\n    </ion-footer>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\chat-detail_media\chat-detail_media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ChatDetailMediaPage);
    return ChatDetailMediaPage;
}());

//# sourceMappingURL=chat-detail_media.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_detail_chat_detail__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatlistPage = /** @class */ (function () {
    function ChatlistPage(zone, events, user, base, navCtrl, navParams) {
        var _this = this;
        this.zone = zone;
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat_list = [];
        events.unsubscribe('messageList:list');
        events.subscribe('messageList:list', function (data) {
            console.log(data, "get srt");
            data = data.datas;
            console.log(data);
            if (_this.chat_list.map(function (item, i) {
                if (item.group_id == data.group_id) {
                    _this.zone.run(function () {
                        _this.chat_list[i].unread += 1;
                    });
                    return !0;
                }
                else { }
            }).indexOf(true) >= 0) {
                console.log("ok");
            }
            else {
                _this.zone.run(function () {
                    _this.chat_list.push(data);
                });
                console.log("not working");
            }
            setTimeout(function () {
                console.log(_this.chat_list);
            }, 200);
        });
        this.chatList();
    }
    ChatlistPage.prototype.chatList = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'chatList' })
            .subscribe(function (data) {
            _this.chat_list = data.details;
            console.log(_this.chat_list);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ChatlistPage.prototype.getFirstLetter = function (name) {
        return this.base.firstNameLetter(name);
    };
    ChatlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatlistPage');
    };
    ChatlistPage.prototype.messageDetails = function (group_id, i, group_name) {
        this.chat_list[i].unread = 0;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chat_detail_chat_detail__["a" /* ChatDetailPage */], { data: { group_id: group_id, i: i, group_name: group_name } });
    };
    ChatlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatlist',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\chatlist\chatlist.html"*/'<ion-header class="title_main">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt=""> Message</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="inner_bg">\n\n\n\n\n    <ion-list>\n\n        <ion-item class="work_list" *ngFor="let chat of chat_list; let i = index" (click)="messageDetails(chat.group_id , i ,chat.group_name)">\n            <ion-avatar item-start class="boun_gray">\n                {{getFirstLetter(chat.group_name)}}\n            </ion-avatar>\n            <h2>{{chat.group_name}}</h2>\n            <h5 class="secnd">{{chat.total_member}} People</h5>\n            <button ion-button class="btn_num" clear item-end *ngIf="chat.unread">{{chat.unread}}</button>\n        </ion-item>\n    </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\chatlist\chatlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ChatlistPage);
    return ChatlistPage;
}());

//# sourceMappingURL=chatlist.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingsoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComingsoonPage = /** @class */ (function () {
    function ComingsoonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ComingsoonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatlistPage');
    };
    ComingsoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatlist',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\coming_soon\coming_soon.html"*/'<ion-header class="title_main">\n    <ion-navbar>\n       \n        <ion-title><img src="assets/imgs/logo.png" alt=""></ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="inner_bg">\n   \n        \n  \n<h3 style="text-align: center;padding-top:50%; color: #fff;">Coming Soon</h3>\n       \n\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\coming_soon\coming_soon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ComingsoonPage);
    return ComingsoonPage;
}());

//# sourceMappingURL=coming_soon.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateGoalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CreateGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateGoalPage = /** @class */ (function () {
    function CreateGoalPage(events, user, base, navCtrl, navParams) {
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.goal = {};
        this.errMsg = false;
        if (this.navParams.get('goal_id')) {
            this.getGoal(this.navParams.get('goal_id'));
        }
    }
    CreateGoalPage.prototype.getGoal = function (id) {
        var _this = this;
        this.user.CommnFn({ param: { goal_id: id }, 'functionName': 'getGoal' })
            .subscribe(function (data) {
            if (data.status) {
                _this.goal = data.details;
            }
            else {
                _this.navCtrl.pop();
                _this.base.showToast(data.message);
            }
            console.log(data);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    CreateGoalPage.prototype.addGoal = function () {
        var _this = this;
        if (!this.goal.title) {
            this.errMsg = true;
            return !1;
        }
        this.user.CommnFn({ param: this.goal, 'functionName': 'addMyGoal' })
            .subscribe(function (data) {
            _this.base.showToast(data.message);
            if (data.status) {
                _this.goal.id = data.id;
                _this.events.publish("mygoal:edit", { goal: _this.goal });
                _this.navCtrl.pop();
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    CreateGoalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateGoalPage');
    };
    CreateGoalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-create-goal',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\create-goal\create-goal.html"*/'<!--\n  Generated template for the CreateGoalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n\n    <ion-navbar>\n        <ion-title>\n            <img src="assets/imgs/logo.png"  alt=""> Add Goal</ion-title>\n       \n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg_main">\n\n    <ion-list class="form_main">\n        <br>\n        <br>\n\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="goal.title" value="" placeholder="Title*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !goal.title">Please enter Title</span>\n        <ion-item>\n            <ion-textarea rows="4" [(ngModel)]="goal.description" placeholder="Description"></ion-textarea>\n        </ion-item>\n        <!-- <span class="msgErr" *ngIf="errMsg && !goal.description">Please enter Description</span> -->\n        <button class="btntheme" ion-button block *ngIf="!goal.goal_id" (click)="addGoal()">SAVE</button>\n        <button class="btntheme" ion-button block *ngIf="goal.goal_id" (click)="addGoal()">Edit</button>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\create-goal\create-goal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_2__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], CreateGoalPage);
    return CreateGoalPage;
}());

//# sourceMappingURL=create-goal.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_cropper_app_cropper__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(events, user, base, camera, navCtrl, navParams) {
        var _this = this;
        this.events = events;
        this.user = user;
        this.base = base;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
        this.imageStatus = false;
        this.errMsg = false;
        events.unsubscribe('cropImg:profile');
        events.subscribe('cropImg:profile', function (data) {
            _this.userData.image = data.image;
            _this.imageStatus = true;
        });
        this.basicInfo();
    }
    EditProfilePage.prototype.basicInfo = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
            .subscribe(function (data) {
            _this.userData = data.details;
            console.log(_this.userData);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    EditProfilePage.prototype.saveUserData = function () {
        var _this = this;
        if (!this.userData.first_name || !this.userData.last_name) {
            this.errMsg = true;
            return !1;
        }
        var newArr = {};
        if (this.imageStatus) {
            newArr = { image: this.userData.image, about: this.userData.about, first_name: this.userData.first_name, last_name: this.userData.last_name };
        }
        else {
            newArr = { about: this.userData.about, first_name: this.userData.first_name, last_name: this.userData.last_name };
        }
        this.user.CommnFn({ param: newArr, 'functionName': 'updateProfileInfo' })
            .subscribe(function (data) {
            //this.userData = data;
            console.log(data);
            if (data.status) {
                _this.navCtrl.pop();
                // if (this.imageStatus) {
                _this.events.publish('cropImg:profileDash', { image: _this.userData.image, first_name: _this.userData.first_name, last_name: _this.userData.last_name });
                _this.events.publish('cropImg:profileMyacc', { image: _this.userData.image, first_name: _this.userData.first_name, last_name: _this.userData.last_name });
                var dataUser = JSON.parse(_this.base.fetchData('userdata'));
                dataUser.first_name = _this.userData.first_name;
                dataUser.last_name = _this.userData.last_name;
                localStorage.userdata = JSON.stringify(dataUser);
                // }
                _this.base.showToast(data.message);
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
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
    EditProfilePage.prototype.takePic = function () {
        var _this = this;
        this.base.presentActionSheet("Add Picture With", [
            {
                text: 'Gallery',
                role: 'destructive',
                icon: 'images',
                handler: function () {
                    var options = {
                        quality: 50,
                        sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                        destinationType: _this.camera.DestinationType.DATA_URL,
                        allowEdit: false,
                        encodingType: _this.camera.EncodingType.JPEG,
                        mediaType: _this.camera.MediaType.PICTURE,
                    };
                    _this.camera.getPicture(options).then(function (imageData) {
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64:
                        // this.cropeNew()
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__app_cropper_app_cropper__["a" /* AppCropperPage */], { imgData: { image: 'data:image/jpeg;base64,' + imageData, type: 'profile', aspectRatio: 3 / 3 } });
                        // this.userData.profile_image = 'data:image/jpeg;base64,' + imageData;
                        // this.imgsBase = true;
                    }, function (err) {
                        // Handle error
                    });
                }
            }, {
                text: 'Camera',
                icon: 'camera',
                handler: function () {
                    var options = {
                        quality: 50,
                        destinationType: _this.camera.DestinationType.DATA_URL,
                        encodingType: _this.camera.EncodingType.JPEG,
                        allowEdit: false,
                        mediaType: _this.camera.MediaType.PICTURE,
                    };
                    _this.camera.getPicture(options).then(function (imageData) {
                        // imageData is either a base64 encoded string or a file URI
                        // If it's base64:
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__app_cropper_app_cropper__["a" /* AppCropperPage */], { imgData: { image: 'data:image/jpeg;base64,' + imageData, type: 'profile', aspectRatio: 3 / 3 } });
                        // this.userData.profile_image = 'data:image/jpeg;base64,' + imageData;
                        // this.imgsBase = true;
                    }, function (err) {
                        // Handle error
                    });
                }
            }, {
                text: 'Cancel',
                role: 'cancel',
                icon: 'undo',
                handler: function () {
                }
            }
        ]);
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n  <ion-navbar>\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <ion-title>\n      <img src="assets/imgs/logo.png" alt=""> EDIT PROFILE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="page-edit-profile">\n  <img *ngIf="!userData.image" src="assets/imgs/profile_bg.jpg" class="pro_img">\n  <img *ngIf="userData.image" src="{{userData.image}}" class="pro_img">\n  <ion-item class="time_style m_top" style="text-align: center;">\n    <button ion-button class="edit_pros" (click)="takePic()">\n      <ion-icon name="ios-camera-outline"></ion-icon>\n    </button>\n  </ion-item>\n  <!-- \n  <ion-list>\n      <ion-input type="text" [(ngModel)]="userData.first_name" value="" placeholder="First Name">\n      </ion-input>\n\n      <span class="msgErr" *ngIf="errMsg && userData.first_name">Please enter First Name</span>\n\n      <ion-input type="text" [(ngModel)]="userData.last_name" value="" placeholder="Last Name">\n      </ion-input>\n\n      <span class="msgErr" *ngIf="errMsg && userData.last_name">Please enter Last Name</span>\n    </ion-list> -->\n\n\n  <ion-card class="m_top_card">\n\n  \n\n    <ion-card-content>\n      <ion-list>\n\n        <ion-item>\n            <ion-label>First Name</ion-label>\n          <ion-input  type="text" [(ngModel)]="userData.first_name" value="" >\n          </ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.first_name">Please enter First Name</span>\n        <ion-item>\n            <ion-label>Last Name</ion-label>\n          <ion-input  type="text" [(ngModel)]="userData.last_name" value="">\n          </ion-input>\n        </ion-item>\n\n        <span class="msgErr" *ngIf="errMsg && !userData.last_name">Please enter Last Name</span>\n\n\n\n        <ion-item style="margin-top: 4px">\n            \n          <ion-textarea  [(ngModel)]="userData.about" placeholder="Say something about yourself !"></ion-textarea>\n        </ion-item>\n\n      </ion-list>\n      <button class="btnthm" (click)="saveUserData()" ion-button block>SAVE</button>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_reset_2_reset_2__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
        this.errMsg = false;
    }
    ForgotPasswordPage.prototype.forgot_2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_reset_2_reset_2__["a" /* Reset_2Page */]);
    };
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    //forgotPassword
    ForgotPasswordPage.prototype.forgotpsd = function () {
        var _this = this;
        if (!this.userData.email || !this.base.validateEmail(this.userData.email)) {
            this.errMsg = true;
            return !1;
        }
        this.user.CommnFn({ param: { email: this.userData.email }, 'functionName': 'forgotPassword' }).subscribe(function (data) {
            _this.errMsg = false;
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_reset_2_reset_2__["a" /* Reset_2Page */], { email: _this.userData.email });
                _this.base.showToast(data.message);
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="bg_main">\n\n    <ion-list class="logo_login">\n        <img src="assets/imgs/logo.png" alt="">\n    </ion-list>\n    <h2 class="label_header">\n        Reset Password<br>\n        <span>Enter your email to continue</span>\n    </h2>\n\n    <ion-list padding class="form_main">\n\n        <ion-item class="inputudr" class="inputudr">\n            <ion-input type="email" [(ngModel)]="userData.email" value="" placeholder="Email"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg">Please enter valid Email</span>\n\n        <button class="btntheme" (click)="forgotpsd()" ion-button block>CONTINUE</button>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reset_2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resetpassword_resetpassword__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Reset_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Reset_2Page = /** @class */ (function () {
    function Reset_2Page(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.otp = [];
        this.errMsg = false;
        this.email = this.navParams.get('email');
    }
    Reset_2Page.prototype.reset3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    Reset_2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Reset_2Page');
    };
    Reset_2Page.prototype.next = function (el, event, el1) {
        if (event.keyCode == 8) {
            this.otp.one = '';
            this.otp.two = '';
            this.otp.three = '';
            this.otp.four = '';
            el1.setFocus();
            return !1;
        }
        if (el) {
            el.setFocus();
        }
    };
    Reset_2Page.prototype.sendOtp = function () {
        var _this = this;
        if (!this.otp.one || !this.otp.two || !this.otp.three || !this.otp.four) {
            this.errMsg = true;
            return !1;
        }
        var a = this.otp.one + "" + this.otp.two + "" + this.otp.three + "" + this.otp.four;
        console.log(a);
        this.user.CommnFn({ param: { reset_code: a, email: this.email }, 'functionName': 'verifyCode' })
            .subscribe(function (data) {
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */], { email: _this.email });
                _this.base.showToast(data.message);
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Reset_2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-2',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\reset-2\reset-2.html"*/'<!--\n  Generated template for the Reset_2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Reset Password</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg_main">\n\n    <ion-list class="logo_login">\n        <img src="assets/imgs/logo.png" alt="">\n    </ion-list>\n    <h2 class="label_header">\n        Enter OTP<br>\n        <span>We have sent the OTP <br> to your registered email.</span>\n    </h2>\n\n    <ion-list padding class="form_main">\n\n\n        <ion-row>\n            <ion-col>\n                <ion-item class="inputudr">\n                    <ion-input [(ngModel)]="otp.one" #otp1 pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="next(otp2,$event,otp1)" type="tel" placeholder="0"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item class="inputudr">\n                    <ion-input [(ngModel)]="otp.two" #otp2 pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="next(otp3,$event,otp1)" type="tel" placeholder="0"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item class="inputudr">\n                    <ion-input [(ngModel)]="otp.three" #otp3 pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="next(otp4,$event,otp1)" type="tel" placeholder="0"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item class="inputudr">\n                    <ion-input [(ngModel)]="otp.four" #otp4 pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="next(\'\',$event,otp1)" type="tel" placeholder="0"></ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n        <span class="msgErr" *ngIf="errMsg && (!otp.one || !otp.two || !otp.three || !otp.four || !otp.five)">Please enter your valid OTP</span>\n\n\n        <button class="btntheme" (click)="sendOtp()" ion-button block>CONTINUE</button>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\reset-2\reset-2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Reset_2Page);
    return Reset_2Page;
}());

//# sourceMappingURL=reset-2.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(base, user, navCtrl, navParams) {
        this.base = base;
        this.user = user;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.errMsg = false;
        this.email = this.navParams.get('email');
    }
    ResetpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpasswordPage');
    };
    ResetpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.password || !this.cmpassword || (this.password != this.cmpassword)) {
            this.errMsg = true;
            return !1;
        }
        this.user.CommnFn({ param: { password: this.password, email: this.email }, 'functionName': 'resetPassword' })
            .subscribe(function (data) {
            if (data.status) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                _this.base.showToast(data.message);
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\resetpassword\resetpassword.html"*/'<!--\n  Generated template for the ResetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>resetpassword</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg_main">\n    <ion-list class="logo_login">\n        <img src="assets/imgs/logo.png" alt="">\n    </ion-list>\n    <h2 class="label_header">\n        Create New Password,<br>\n    </h2>\n\n    <ion-list padding class="form_main">\n\n        <ion-item class="inputudr">\n            <ion-input [(ngModel)]="password" type="password" value="" placeholder="New Password"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !password">Please enter your New Password</span>\n        <ion-item class="inputudr">\n            <ion-input [(ngModel)]="cmpassword" type="password" value="" placeholder="Confirm Password"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && (cmpassword != password)">Your Password and Confirmation Password do not match</span>\n\n        <button class="btntheme" (click)="resetPassword()" ion-button block>SAVE</button>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\resetpassword\resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_2__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup1_signup1__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(fcm, user, base, navCtrl, navParams) {
        this.fcm = fcm;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
        this.errMsg = false;
        this.errEmailMsg = false;
        this.terms = true;
    }
    SignupPage.prototype.next = function (eve, fld, field) {
        console.log(fld);
        if (eve.keyCode == 13 && field != 'submit') {
            fld.setFocus();
        }
        else if (eve.keyCode == 13 && field == 'submit') {
            this.userSignUp();
        }
        // fld.setFocus();
    };
    SignupPage.prototype.userSignUp = function () {
        var _this = this;
        // if (!this.terms) {
        //   this.base.showToast("Network error, Please check your connection ");
        //   return !1;
        // }
        if (!this.userData.email || !this.userData.first_name || !this.userData.last_name || !this.userData.password || !this.userData.cnfmPassword || (this.userData.password != this.userData.cnfmPassword)) {
            this.errMsg = true;
            return !1;
        }
        else if (!this.base.validateEmail(this.userData.email)) {
            this.errEmailMsg = true;
            return !1;
        }
        else {
            this.fcm.subscribeToTopic('5xtoken');
            this.fcm.getToken().then(function (token) {
                _this.userData.fcmTkn = token;
                _this.user.CommnFn({ param: _this.userData, 'functionName': 'userSignUp' }).subscribe(function (data) {
                    console.log(data);
                    if (data.status) {
                        _this.base.saveToLocal('userdata', JSON.stringify(_this.userData));
                        _this.base.saveToLocal('Tocken', data.userToken);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup1_signup1__["a" /* Signup1Page */]);
                    }
                    else {
                        _this.base.showToast(data.message);
                    }
                }, function (err) {
                    _this.base.showSpinner(!1);
                    _this.base.showToast("Network error, Please check your connection ");
                });
            });
            this.fcm.unsubscribeFromTopic('5xtoken');
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ComingsoonPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__["a" /* ComingsoonPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg_main">\n    <ion-list class="logo_login">\n        <img src="assets/imgs/logo.png" alt="">\n    </ion-list>\n    <h2 class="label_header">\n        Welcome!<br>\n        <span>Sign Up to continue</span>\n    </h2>\n    <ion-list padding class="form_main">\n\n        <ion-item class="inputudr">\n            <ion-input (keyup)="next($event,a1,\'\')" type="text" [(ngModel)]="userData.first_name" value="" placeholder="First Name*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.first_name">Please enter your First Name </span>\n        <ion-item class="inputudr">\n            <ion-input #a1 (keyup)="next($event,a2,\'\')" type="text" [(ngModel)]="userData.last_name" value="" placeholder="Last Name*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.last_name">Please enter your Last Name </span>\n        <ion-item class="inputudr">\n            <ion-input #a2 (keyup)="next($event,a3,\'\')" type="email" value="" [(ngModel)]="userData.email"  placeholder="Email*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="(errMsg && !userData.email) || errEmailMsg">Please enter your valid Email </span>\n        <ion-item class="inputudr">\n            <ion-input #a3 (keyup)="next($event,a4,\'\')" type="password" value="" [(ngModel)]="userData.password" placeholder="Password*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.password">Please enter your Password </span>\n        <ion-item class="inputudr">\n            <ion-input #a4 (keyup)="next($event,a5,\'submit\')" type="password" [(ngModel)]="userData.cnfmPassword" value="" placeholder="Confirm Password*"></ion-input>\n            \n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && ( userData.cnfmPassword != userData.password)">Password and confirm password do not match</span>\n\n\n        \n\n        <button (click)="userSignUp()" class="btntheme" ion-button block>SIGNUP</button>\n\n        \n            \n            <h2 class="forgotpass" text-right>\n                    <!-- <ion-checkbox [(ngModel)]="terms"   checked="true"></ion-checkbox> -->\n                <a href="#">By signing up you to <b (click)="ComingsoonPage()">our Terms & Privacy policy</b></a>\n            </h2>\n          \n        \n        <br>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_5__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_4__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup2_signup2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_subscription_subscription__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyAccountPage = /** @class */ (function () {
    function MyAccountPage(events, user, base, navCtrl, navParams) {
        var _this = this;
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
        this.events.unsubscribe('cropImg:profileMyacc');
        this.events.subscribe('cropImg:profileMyacc', function (data) {
            _this.userData.image = data.image;
            _this.userData.first_name = data.first_name;
            _this.userData.last_name = data.last_name;
        });
        this.basicInfo();
    }
    MyAccountPage.prototype.basicInfo = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
            .subscribe(function (data) {
            _this.userData = data.details;
            console.log(_this.userData);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    MyAccountPage.prototype.editProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    MyAccountPage.prototype.ProfileInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__my_profile_my_profile__["a" /* MyProfilePage */]);
    };
    MyAccountPage.prototype.changePassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    MyAccountPage.prototype.Subscription = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_subscription_subscription__["a" /* SubscriptionPage */]);
    };
    MyAccountPage.prototype.editHealthInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup2_signup2__["a" /* Signup2Page */], { complaint_id: this.userData.complaint_id });
    };
    MyAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyAccountPage');
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-account',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\my-account\my-account.html"*/'<ion-header class="title_main">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img src="assets/imgs/logo.png" alt=""> MY ACCOUNT</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="inner_bg">\n\n\n\n\n  <ion-list>\n\n\n    <ion-card class="crd_bg">\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img *ngIf="!userData.image" src="assets/imgs/profile_bg.jpg">\n          <img *ngIf="userData.image" src="{{userData.image}}">\n        </ion-avatar>\n        <h2>{{userData.first_name}} {{userData.last_name}}</h2>\n        <p>{{userData.address}}</p>\n      </ion-item>\n\n    </ion-card>\n\n    <button ion-item class="btn_sty_top" (click)="editProfile()">\n      <ion-icon name="ios-person-outline" item-start></ion-icon>\n      Edit Profile\n    </button>\n\n\n    <button ion-item class="btn_sty" (click)="ProfileInfo()">\n      <ion-icon name="ios-person-add-outline" item-start></ion-icon>\n      My Profile\n    </button>\n\n    <button ion-item class="btn_sty" (click)="editHealthInfo()">\n      <ion-icon name="ios-pulse-outline" item-start></ion-icon>\n      Edit Health Information\n    </button>\n    <button ion-item class="btn_sty" (click)="Subscription()">\n      <ion-icon name="ios-cash-outline" item-start></ion-icon>\n      Subscription\n    </button>\n\n    <button ion-item class="btn_sty" (click)="changePassword()">\n      <ion-icon name="ios-lock-outline" item-start></ion-icon>\n      Change Password\n    </button>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\my-account\my-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_6__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(user, base, events, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
        this.basicInfo();
    }
    MyProfilePage.prototype.basicInfo = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
            .subscribe(function (data) {
            _this.userData = data.details;
            console.log(_this.userData);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-profile',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\my-profile\my-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n  <ion-navbar>\n      <!-- <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button> -->\n      <ion-title><img src="assets/imgs/logo.png" alt=""> MY PROFILE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n  \n  <ion-content padding class="page-edit-profile">\n      <img *ngIf="!userData.image" src="assets/imgs/profile_bg.jpg" class="pro_img">\n      <img *ngIf="userData.image" src="{{userData.image}}" class="pro_img">\n    \n    \n    <ion-card class="m_top">\n          \n            <ion-card-header >\n              <h1>{{userData.first_name}} {{userData.last_name}}</h1>\n            </ion-card-header>\n          \n            <ion-card-content>\n                <ion-list>\n                    <ion-item>\n                    <h2 style="margin-top: 10px;">ABOUT</h2>  <p class="para">{{userData.about}} </p>\n                    </ion-item></ion-list>\n  \n  \n                     \n            </ion-card-content>\n          \n          </ion-card>\n  </ion-content>\n  '/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\my-profile\my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_2__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-event/add-event.module": [
		641,
		28
	],
	"../pages/addappointment/addappointment.module": [
		642,
		27
	],
	"../pages/alampage/alampage.module": [
		643,
		26
	],
	"../pages/calendar/calendar.module": [
		644,
		25
	],
	"../pages/changepassword/changepassword.module": [
		645,
		24
	],
	"../pages/chat-detail/chat-detail.module": [
		647,
		23
	],
	"../pages/chat-detail_media/chat-detail_media.module": [
		646,
		22
	],
	"../pages/chatlist/chatlist.module": [
		648,
		21
	],
	"../pages/coming_soon/coming_soon.module": [
		649,
		20
	],
	"../pages/create-goal/create-goal.module": [
		650,
		19
	],
	"../pages/edit-profile/edit-profile.module": [
		651,
		18
	],
	"../pages/forgot-password/forgot-password.module": [
		652,
		17
	],
	"../pages/login/login.module": [
		653,
		16
	],
	"../pages/my-account/my-account.module": [
		654,
		15
	],
	"../pages/my-goal-details/my-goal-details.module": [
		655,
		14
	],
	"../pages/my-profile/my-profile.module": [
		656,
		13
	],
	"../pages/reset-2/reset-2.module": [
		657,
		12
	],
	"../pages/resetpassword/resetpassword.module": [
		658,
		11
	],
	"../pages/signup/signup.module": [
		659,
		2
	],
	"../pages/signup1/signup1.module": [
		660,
		10
	],
	"../pages/signup2/signup2.module": [
		661,
		9
	],
	"../pages/signup3/signup3.module": [
		662,
		8
	],
	"../pages/signup4/signup4.module": [
		663,
		7
	],
	"../pages/signup5/signup5.module": [
		665,
		6
	],
	"../pages/signup6/signup6.module": [
		664,
		5
	],
	"../pages/signup7/signup7.module": [
		666,
		4
	],
	"../pages/signup8/signup8.module": [
		667,
		3
	],
	"../pages/subscription/subscription.module": [
		668,
		1
	],
	"../pages/video/video.module": [
		669,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrl; });
//export let BaseUrl ="http://10.10.10.87:7071/";
var BaseUrl = "http://newagesme.com:7071/";
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCropperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cropperjs__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppCropperPage = /** @class */ (function () {
    function AppCropperPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.imageData = {};
        this.imageData = this.navParams.get('imgData');
    }
    AppCropperPage.prototype.cropeNew = function () {
        console.log("oookkkk");
        var targetImage = document.getElementById("image");
        this.cropper = new __WEBPACK_IMPORTED_MODULE_2_cropperjs__["a" /* default */](targetImage, {
            viewMode: 2,
            zoomable: true,
            zoomOnTouch: true,
            zoomOnWheel: true,
            rotatable: true,
            aspectRatio: this.imageData.aspectRatio,
            cropBoxMovable: true,
            cropBoxResizable: true
        });
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
    };
    AppCropperPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.cropeNew();
        }, 300);
        console.log('ionViewDidLoad EditAccountPage');
    };
    AppCropperPage.prototype.cropImage = function () {
        this.newImg = this.cropper.getCroppedCanvas().toDataURL("image/jpeg", 0.4);
        if (this.imageData.type == 'profile') {
            this.navCtrl.pop();
            this.events.publish('cropImg:profile', { image: this.newImg });
            // this.events.publish('cropImg:profileDash', { image: this.newImg });
        }
    };
    AppCropperPage.prototype.rotate = function () {
        this.cropper.rotate(90);
    };
    AppCropperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-app-cropper',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\app-cropper\app-cropper.html"*/'<ion-header class="header-gray">\n    <ion-navbar>\n        <ion-title>CROP</ion-title>\n        <ion-buttons end>\n            <button (click)="cropImage()" class="crop-button" ion-button icon-only>\n                <ion-icon name="md-checkmark"></ion-icon>\n            </button>\n            <button (click)="rotate()" class="crop-button" ion-button icon-only>\n                <ion-icon name="refresh"></ion-icon>\n            </button>\n\n\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-row>\n        <ion-col col-12>\n            <div class="cropImage">\n                <img id="image" src="{{imageData.image}}" />\n            </div>\n        </ion-col>\n    </ion-row>\n\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\app-cropper\app-cropper.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */]])
    ], AppCropperPage);
    return AppCropperPage;
}());

//# sourceMappingURL=app-cropper.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddappointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddappointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddappointmentPage = /** @class */ (function () {
    function AddappointmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddappointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddappointmentPage');
    };
    AddappointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addappointment',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\addappointment\addappointment.html"*/'<!--\n  Generated template for the CreateGoalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n\n    <ion-navbar>\n        <ion-title><img src="../../assets/imgs/logo.png" alt=""> Add Appointment</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg_main">\n\n    <ion-list class="form_main">\n        <br>\n        <br>\n\n        <ion-item>\n            <ion-input type="text" value="" placeholder="Subject*"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-textarea placeholder="Description"></ion-textarea>\n        </ion-item>\n\n        <ion-item class="date_picker">\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate" placeholder="Date of Onset"></ion-datetime>\n        </ion-item>\n\n        <ion-item class="date_picker">\n            <ion-datetime displayFormat="h:mm A" [(ngModel)]="myDate" placeholder="Date of Onset"></ion-datetime>\n        </ion-item>\n\n        <ion-item class="select_label">\n            <ion-label *ngIf="!status" class="select_label">Repeat</ion-label>\n            <ion-select [(ngModel)]="status">\n                <ion-option value="f">Yes</ion-option>\n                <ion-option value="m">No</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <button class="btntheme" ion-button block>SAVE</button>\n\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\addappointment\addappointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AddappointmentPage);
    return AddappointmentPage;
}());

//# sourceMappingURL=addappointment.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(434);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_forgot_password_forgot_password__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reset_2_reset_2__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup1_signup1__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup2_signup2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup3_signup3__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup4_signup4__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup5_signup5__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup6_signup6__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup7_signup7__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup8_signup8__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_create_goal_create_goal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_addappointment_addappointment__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_changepassword_changepassword__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_alampage_alampage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_my_account_my_account__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_my_profile_my_profile__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_edit_profile_edit_profile__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_app_cropper_app_cropper__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_calendar_calendar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_chatlist_chatlist__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_video_video__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_my_goal_details_my_goal_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_coming_soon_coming_soon__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_add_event_add_event__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_chat_detail_chat_detail__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_chat_detail_media_chat_detail_media__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_subscription_subscription__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_charts__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_video_player__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_streaming_media__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_fcm__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic3_calendar_en__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_file_transfer__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_media_capture__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_video_editor__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ionic_img_viewer__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_in_app_purchase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_app_base__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reset_2_reset_2__["a" /* Reset_2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup1_signup1__["a" /* Signup1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup2_signup2__["a" /* Signup2Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup3_signup3__["a" /* Signup3Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup4_signup4__["a" /* Signup4Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup5_signup5__["a" /* Signup5Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup6_signup6__["a" /* Signup6Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup7_signup7__["a" /* Signup7Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup8_signup8__["a" /* Signup8Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_goal_create_goal__["a" /* CreateGoalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_addappointment_addappointment__["a" /* AddappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_alampage_alampage__["a" /* AlampagePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_app_cropper_app_cropper__["a" /* AppCropperPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_chatlist_chatlist__["a" /* ChatlistPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_my_goal_details_my_goal_details__["a" /* MyGoalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_coming_soon_coming_soon__["a" /* ComingsoonPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_chat_detail_media_chat_detail_media__["a" /* ChatDetailMediaPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_subscription_subscription__["a" /* SubscriptionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_39_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addappointment/addappointment.module#AddappointmentPageModule', name: 'AddappointmentPage', segment: 'addappointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alampage/alampage.module#AlampagePageModule', name: 'AlampagePage', segment: 'alampage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-detail_media/chat-detail_media.module#ChatDetailPageModule', name: 'ChatDetailMediaPage', segment: 'chat-detail_media', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-detail/chat-detail.module#ChatDetailPageModule', name: 'ChatDetailPage', segment: 'chat-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatlist/chatlist.module#ChatlistPageModule', name: 'ChatlistPage', segment: 'chatlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coming_soon/coming_soon.module#ComingsoonPageModule', name: 'ComingsoonPage', segment: 'coming_soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-goal/create-goal.module#CreateGoalPageModule', name: 'CreateGoalPage', segment: 'create-goal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-account/my-account.module#MyAccountPageModule', name: 'MyAccountPage', segment: 'my-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-goal-details/my-goal-details.module#MyGoalDetailsPageModule', name: 'MyGoalDetailsPage', segment: 'my-goal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-2/reset-2.module#Reset_2PageModule', name: 'Reset_2Page', segment: 'reset-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup1/signup1.module#Signup1PageModule', name: 'Signup1Page', segment: 'signup1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup2/signup2.module#Signup2PageModule', name: 'Signup2Page', segment: 'signup2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup3/signup3.module#Signup3PageModule', name: 'Signup3Page', segment: 'signup3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup4/signup4.module#Signup4PageModule', name: 'Signup4Page', segment: 'signup4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup6/signup6.module#Signup6PageModule', name: 'Signup6Page', segment: 'signup6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup5/signup5.module#Signup5PageModule', name: 'Signup5Page', segment: 'signup5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup7/signup7.module#Signup7PageModule', name: 'Signup7Page', segment: 'signup7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup8/signup8.module#Signup8PageModule', name: 'Signup8Page', segment: 'signup8', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subscription/subscription.module#SubscriptionPageModule', name: 'SubscriptionPage', segment: 'subscription', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_45_ionic3_calendar_en__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_49_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reset_2_reset_2__["a" /* Reset_2Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup1_signup1__["a" /* Signup1Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup2_signup2__["a" /* Signup2Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_signup3_signup3__["a" /* Signup3Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup4_signup4__["a" /* Signup4Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_signup5_signup5__["a" /* Signup5Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup6_signup6__["a" /* Signup6Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signup7_signup7__["a" /* Signup7Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup8_signup8__["a" /* Signup8Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_goal_create_goal__["a" /* CreateGoalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_addappointment_addappointment__["a" /* AddappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_alampage_alampage__["a" /* AlampagePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_app_cropper_app_cropper__["a" /* AppCropperPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_chatlist_chatlist__["a" /* ChatlistPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_video_video__["a" /* VideoPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_my_goal_details_my_goal_details__["a" /* MyGoalDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_coming_soon_coming_soon__["a" /* ComingsoonPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_add_event_add_event__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_chat_detail_media_chat_detail_media__["a" /* ChatDetailMediaPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_subscription_subscription__["a" /* SubscriptionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_51__providers_app_user__["a" /* AppUser */],
                __WEBPACK_IMPORTED_MODULE_52__providers_app_base__["a" /* AppBase */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_video_player__["a" /* VideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_video_editor__["a" /* VideoEditor */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_in_app_purchase__["a" /* InAppPurchase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup6_signup6__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chatlist_chatlist__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chat_detail_chat_detail__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_goal_details_my_goal_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup1_signup1__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup2_signup2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup3_signup3__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup4_signup4__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signup5_signup5__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup7_signup7__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signup8_signup8__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_video_video__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_account_my_account__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_purchase__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















////// test





var MyApp = /** @class */ (function () {
    function MyApp(iap, localNotifications, fcm, user, base, events, platform, statusBar, splashScreen) {
        this.iap = iap;
        this.localNotifications = localNotifications;
        this.fcm = fcm;
        this.user = user;
        this.base = base;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.userData = {};
        this.fullWorkOutarray = [];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__["a" /* CalendarPage */], icon: 'calendar' },
            { title: 'Messages', component: __WEBPACK_IMPORTED_MODULE_9__pages_chatlist_chatlist__["a" /* ChatlistPage */], icon: 'chatbubbles' },
            { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_20__pages_my_account_my_account__["a" /* MyAccountPage */], icon: 'person' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
        ];
    }
    MyApp.prototype.alreadySubscribed = function () {
        this.base.presentConfirm("Alert", "Please unsubscribe the currently running plan and urgade after the end date.Please check the disclaimer for further instructions.", [
            {
                text: 'Ok',
                role: 'cancel',
                handler: function () {
                }
            }
        ]);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.events.unsubscribe('cropImg:profileDash');
            _this.events.subscribe('cropImg:profileDash', function (data) {
                _this.userData.profile_image = data.image;
                _this.userData.first_name = data.first_name;
                _this.userData.last_name = data.last_name;
            });
            _this.events.unsubscribe('login:data');
            _this.events.subscribe('login:data', function (data) {
                _this.userData = data;
                _this.userData.profile_image = data.image;
            });
            if (_this.base.fetchData('Tocken')) {
                // this.userData = JSON.parse(this.base.fetchData('userdata'));
                _this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
                    .subscribe(function (data) {
                    _this.setWorkoutAlarm(data.workoutalarm);
                    if (data.details) {
                        _this.userData.first_name = data.details.first_name;
                        _this.userData.last_name = data.details.last_name;
                        _this.userData.profile_image = data.details.image;
                        _this.userData.address = data.details.address;
                        var usrD = data.details;
                        if (usrD.step_to_complete == 1) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_signup1_signup1__["a" /* Signup1Page */]);
                        }
                        else if (usrD.step_to_complete == 2) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_signup2_signup2__["a" /* Signup2Page */]);
                        }
                        else if (usrD.step_to_complete == 3) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_signup7_signup7__["a" /* Signup7Page */], { complaint_id: usrD.complaint_id });
                        }
                        else if (usrD.step_to_complete == 4) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_signup4_signup4__["a" /* Signup4Page */], { complaint_id: usrD.complaint_id });
                        }
                        else if (usrD.step_to_complete == 5) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_signup5_signup5__["a" /* Signup5Page */], { complaint_id: usrD.complaint_id });
                        }
                        else if (usrD.step_to_complete == 6) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_signup6_signup6__["a" /* Signup6Page */], { complaint_id: usrD.complaint_id });
                        }
                        else if (usrD.step_to_complete == 8) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_signup8_signup8__["a" /* Signup8Page */], { complaint_id: usrD.complaint_id });
                        }
                        else if (usrD.step_to_complete == 9) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_signup3_signup3__["a" /* Signup3Page */], { complaint_id: usrD.complaint_id });
                        }
                        else {
                            //this.events.publish('login:data', usrD);
                            _this.iap
                                .restorePurchases()
                                .then(function (arrayPurchased) {
                                if (!arrayPurchased.length) {
                                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                                }
                                else {
                                    if (data.details.step_to_complete == 11) {
                                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                                    }
                                    else {
                                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                                    }
                                }
                            });
                            //this.nav.setRoot(HomePage);
                        }
                    }
                }, function (err) {
                    _this.base.showSpinner(!1);
                });
                //this.rootPage = HomePage;
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
            _this.fcm.onNotification().subscribe(function (data) {
                console.log(_this.nav.getActive().name, 'crnt page', data.body);
                if (data.wasTapped) {
                    setTimeout(function () {
                        if (data.type == 'message') {
                            var group_id = JSON.parse(data.body).group_id;
                            var group_name = JSON.parse(data.body).group_name;
                            var i = 1;
                            console.log({ group_id: group_id, i: i, group_name: group_name });
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */], { data: { group_id: group_id, i: i, group_name: group_name } });
                        }
                        if (data.type == 'workout') {
                            // relod
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_video_video__["a" /* VideoPage */], { assigned_id: JSON.parse(data.body).assigned_id });
                        }
                        else if (data.body && data.body.assigned_id) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_video_video__["a" /* VideoPage */], { assigned_id: JSON.parse(data.body).assigned_id });
                        }
                    }, 1800);
                    console.log("Received in background");
                }
                else {
                    if (data.type == 'message') {
                        if (_this.nav.getActive().name == 'ChatDetailPage') {
                            _this.events.publish('messageList:detail', { datas: JSON.parse(data.body) });
                        }
                        if (_this.nav.getActive().name == 'ChatlistPage') {
                            _this.events.publish('messageList:list', { datas: JSON.parse(data.body) });
                        }
                        if (_this.nav.getActive().name != 'ChatDetailPage' && _this.nav.getActive().name != 'ChatlistPage') {
                            console.log(JSON.parse(data.body), data.body, data.body.group_id, data.body.group_name, "messge id");
                            var group_id = JSON.parse(data.body).group_id;
                            var group_name = JSON.parse(data.body).group_name;
                            var i = 1;
                            _this.base.presentConfirm("New Message from " + group_name, "Do you want to see", [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log({ group_id: group_id, i: i, group_name: group_name });
                                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_chat_detail_chat_detail__["a" /* ChatDetailPage */], { data: { group_id: group_id, i: i, group_name: group_name } });
                                    }
                                }
                            ]);
                        }
                    }
                    if (data.type == 'workout') {
                        // relod
                        _this.base.presentConfirm(data.message, "Do you want to see", [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    _this.events.publish('workoutNew', { data: JSON.parse(data.body) });
                                }
                            },
                            {
                                text: 'Ok',
                                handler: function () {
                                    _this.events.publish('workoutNew', { data: JSON.parse(data.body) });
                                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_video_video__["a" /* VideoPage */], { assigned_id: JSON.parse(data.body).assigned_id });
                                }
                            }
                        ]);
                        var dummyArr = [];
                        dummyArr.push(JSON.parse(data.body));
                        _this.setWorkoutNewAlarm(dummyArr);
                    }
                    else if (data.body && data.body.assigned_id) {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_video_video__["a" /* VideoPage */], { assigned_id: JSON.parse(data.body).assigned_id });
                    }
                    console.log("Received in foreground");
                }
                ;
            });
            setTimeout(function () {
                cordova.plugins.notification.local.on('click', function (notification, state) {
                    //let json = JSON.parse(notification.data);
                    console.log(notification, state, "push notification !!!!!!!!!!!!!!");
                    if (notification.data.type == 'workOut') {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_video_video__["a" /* VideoPage */], { assigned_id: notification.data.id });
                    }
                    if (notification.data.type == 'alam') {
                        console.log(notification);
                        if (notification.data.goal_id) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_my_goal_details_my_goal_details__["a" /* MyGoalDetailsPage */], { goal_id: notification.data.goal_id });
                        }
                        else {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_my_goal_details_my_goal_details__["a" /* MyGoalDetailsPage */], { goal_id: notification.data.id });
                        }
                    }
                });
                cordova.plugins.notification.local.on('trigger', function (notification, state) {
                    //let json = JSON.parse(notification.data);
                    console.log(notification, state, "push notification !!!!!!!!!!!!!!");
                });
            }, 1800);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.setWorkoutNewAlarm = function (data) {
        var _this = this;
        cordova.plugins.notification.local.getAll(function (datas) {
            var tempArr = [];
            if (datas.length) {
                datas.filter(function (item, index) {
                    console.log(index, (datas.length - 1), "wrking");
                    if (JSON.parse(item.data).type == 'workOut' && JSON.parse(item.data).id == data[0].assigned_id) {
                        tempArr.push(item.id);
                    }
                    if (index == (datas.length - 1)) {
                        _this.removeAlaram(tempArr, data);
                    }
                });
            }
            else {
                console.log("sryyyy");
                _this.removeAlaram(tempArr, data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.setWorkoutAlarm = function (data) {
        var _this = this;
        cordova.plugins.notification.local.getAll(function (datas) {
            var tempArr = [];
            if (datas.length) {
                datas.filter(function (item, index) {
                    if (JSON.parse(item.data).type == 'workOut') {
                        tempArr.push(item.id);
                    }
                    if (index == (datas.length - 1)) {
                        _this.removeAlaram(tempArr, data);
                    }
                });
            }
            else {
                _this.removeAlaram(tempArr, data);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyApp.prototype.removeAlaram = function (tempArr, datas) {
        var _this = this;
        if (tempArr.length) {
            if (tempArr.length > 1) {
                this.localNotifications.cancel(tempArr).then(function (cans) {
                    console.log(cans, "canl canlcanl canl 1");
                    _this.addNewAlaram(datas);
                });
            }
            else {
                this.localNotifications.cancel(tempArr[0]).then(function (cans) {
                    console.log(cans, "canl canlcanl canl 1");
                    _this.addNewAlaram(datas);
                });
            }
        }
        else {
            this.addNewAlaram(datas);
        }
    };
    MyApp.prototype.addNewAlaram = function (datas) {
        var _this = this;
        var anew = {};
        var yr;
        var mnth;
        var dat;
        var weekDaysNumber;
        var newaWeek = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' };
        if (datas.length) {
            datas.map(function (item, indx) {
                if (item.work_period == 'weekly') {
                    if (item.chosen_week && item.chosen_week.split(',').length) {
                        item.chosen_week.split(',').map(function (week) {
                            weekDaysNumber = Object.keys(newaWeek).find(function (key) { return newaWeek[key] === week; });
                            anew = {
                                id: +new Date(),
                                text: item.workout_details,
                                title: 'My Workout',
                                trigger: {
                                    every: { weekday: parseInt(weekDaysNumber), hour: parseInt(item.work_times.split(":")[0]), minute: parseInt(item.work_times.split(":")[1]) }
                                },
                                led: 'FF0000',
                                data: { type: 'workOut', id: item.assigned_id, goal_id: '' },
                            };
                            console.log("set workout alaram", item.assigned_id, weekDaysNumber);
                            _this.fullWorkOutarray.push(anew);
                            //  this.user.localPushNotification(fullWorkOutarray);
                        });
                    }
                }
                else if (item.work_period == 'onetime') {
                    yr = new Date(item.onetime_date).getFullYear();
                    mnth = new Date(item.onetime_date).getMonth();
                    dat = new Date(item.onetime_date).getDate();
                    anew = {
                        id: +new Date(),
                        title: 'My Workout',
                        text: item.workout_details,
                        trigger: { at: new Date(yr, mnth, dat, parseInt(item.work_times.split(":")[0]), parseInt(item.work_times.split(":")[1])) },
                        sound: null,
                        data: { type: 'workOut', id: item.assigned_id, goal_id: '' }
                    };
                    _this.fullWorkOutarray.push(anew);
                    // this.user.localPushNotification(a);
                }
                if ((datas.length - 1) == indx) {
                    _this.setWorkout();
                }
            });
        }
    };
    MyApp.prototype.setWorkout = function () {
        var _this = this;
        setTimeout(function () {
            // cordova.plugins.notification.local.schedule(this.fullWorkOutarray)
            _this.user.localPushNotification(_this.fullWorkOutarray);
            _this.fullWorkOutarray = [];
        }, 2000);
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.title == 'Logout') {
            this.base.presentConfirm("Logout", "Do you want to Logout", [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("can");
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.user.CommnFn({ param: {}, 'functionName': 'logout' })
                            .subscribe(function (data) {
                            _this.base.clearData();
                            _this.user.localPushnotificationCancelAll();
                        });
                        _this.nav.setRoot(page.component);
                    }
                }
            ]);
        }
        else {
            this.nav.setRoot(page.component);
        }
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\app\app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n\n  <ion-content class="inner_bg cus_stylemain">\n\n      <ion-item class="card_style">\n          \n  <ion-list class="lst_class">\n    \n      <img *ngIf="!userData.profile_image" class="inf_side" src="assets/imgs/profile_bg.jpg">\n      <img *ngIf="userData.profile_image" class="inf_side" src="{{userData.profile_image}}">\n\n              <!-- <img src="assets/imgs/dp.jpg" class="inf_side"> -->\n            </ion-list>\n            <h2>{{userData.first_name}} {{userData.last_name}}</h2>\n            <p class="p_style">{{userData.address}}</p>\n          \n          \n          </ion-item>\n\n    <ion-list  class="cus_style">\n      <button menuClose  ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon>  {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_22__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_23__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 282,
	"./af.js": 282,
	"./ar": 283,
	"./ar-dz": 284,
	"./ar-dz.js": 284,
	"./ar-kw": 285,
	"./ar-kw.js": 285,
	"./ar-ly": 286,
	"./ar-ly.js": 286,
	"./ar-ma": 287,
	"./ar-ma.js": 287,
	"./ar-sa": 288,
	"./ar-sa.js": 288,
	"./ar-tn": 289,
	"./ar-tn.js": 289,
	"./ar.js": 283,
	"./az": 290,
	"./az.js": 290,
	"./be": 291,
	"./be.js": 291,
	"./bg": 292,
	"./bg.js": 292,
	"./bm": 293,
	"./bm.js": 293,
	"./bn": 294,
	"./bn.js": 294,
	"./bo": 295,
	"./bo.js": 295,
	"./br": 296,
	"./br.js": 296,
	"./bs": 297,
	"./bs.js": 297,
	"./ca": 298,
	"./ca.js": 298,
	"./cs": 299,
	"./cs.js": 299,
	"./cv": 300,
	"./cv.js": 300,
	"./cy": 301,
	"./cy.js": 301,
	"./da": 302,
	"./da.js": 302,
	"./de": 303,
	"./de-at": 304,
	"./de-at.js": 304,
	"./de-ch": 305,
	"./de-ch.js": 305,
	"./de.js": 303,
	"./dv": 306,
	"./dv.js": 306,
	"./el": 307,
	"./el.js": 307,
	"./en-au": 308,
	"./en-au.js": 308,
	"./en-ca": 309,
	"./en-ca.js": 309,
	"./en-gb": 310,
	"./en-gb.js": 310,
	"./en-ie": 311,
	"./en-ie.js": 311,
	"./en-il": 312,
	"./en-il.js": 312,
	"./en-nz": 313,
	"./en-nz.js": 313,
	"./eo": 314,
	"./eo.js": 314,
	"./es": 315,
	"./es-do": 316,
	"./es-do.js": 316,
	"./es-us": 317,
	"./es-us.js": 317,
	"./es.js": 315,
	"./et": 318,
	"./et.js": 318,
	"./eu": 319,
	"./eu.js": 319,
	"./fa": 320,
	"./fa.js": 320,
	"./fi": 321,
	"./fi.js": 321,
	"./fo": 322,
	"./fo.js": 322,
	"./fr": 323,
	"./fr-ca": 324,
	"./fr-ca.js": 324,
	"./fr-ch": 325,
	"./fr-ch.js": 325,
	"./fr.js": 323,
	"./fy": 326,
	"./fy.js": 326,
	"./gd": 327,
	"./gd.js": 327,
	"./gl": 328,
	"./gl.js": 328,
	"./gom-latn": 329,
	"./gom-latn.js": 329,
	"./gu": 330,
	"./gu.js": 330,
	"./he": 331,
	"./he.js": 331,
	"./hi": 332,
	"./hi.js": 332,
	"./hr": 333,
	"./hr.js": 333,
	"./hu": 334,
	"./hu.js": 334,
	"./hy-am": 335,
	"./hy-am.js": 335,
	"./id": 336,
	"./id.js": 336,
	"./is": 337,
	"./is.js": 337,
	"./it": 338,
	"./it.js": 338,
	"./ja": 339,
	"./ja.js": 339,
	"./jv": 340,
	"./jv.js": 340,
	"./ka": 341,
	"./ka.js": 341,
	"./kk": 342,
	"./kk.js": 342,
	"./km": 343,
	"./km.js": 343,
	"./kn": 344,
	"./kn.js": 344,
	"./ko": 345,
	"./ko.js": 345,
	"./ky": 346,
	"./ky.js": 346,
	"./lb": 347,
	"./lb.js": 347,
	"./lo": 348,
	"./lo.js": 348,
	"./lt": 349,
	"./lt.js": 349,
	"./lv": 350,
	"./lv.js": 350,
	"./me": 351,
	"./me.js": 351,
	"./mi": 352,
	"./mi.js": 352,
	"./mk": 353,
	"./mk.js": 353,
	"./ml": 354,
	"./ml.js": 354,
	"./mn": 355,
	"./mn.js": 355,
	"./mr": 356,
	"./mr.js": 356,
	"./ms": 357,
	"./ms-my": 358,
	"./ms-my.js": 358,
	"./ms.js": 357,
	"./mt": 359,
	"./mt.js": 359,
	"./my": 360,
	"./my.js": 360,
	"./nb": 361,
	"./nb.js": 361,
	"./ne": 362,
	"./ne.js": 362,
	"./nl": 363,
	"./nl-be": 364,
	"./nl-be.js": 364,
	"./nl.js": 363,
	"./nn": 365,
	"./nn.js": 365,
	"./pa-in": 366,
	"./pa-in.js": 366,
	"./pl": 367,
	"./pl.js": 367,
	"./pt": 368,
	"./pt-br": 369,
	"./pt-br.js": 369,
	"./pt.js": 368,
	"./ro": 370,
	"./ro.js": 370,
	"./ru": 371,
	"./ru.js": 371,
	"./sd": 372,
	"./sd.js": 372,
	"./se": 373,
	"./se.js": 373,
	"./si": 374,
	"./si.js": 374,
	"./sk": 375,
	"./sk.js": 375,
	"./sl": 376,
	"./sl.js": 376,
	"./sq": 377,
	"./sq.js": 377,
	"./sr": 378,
	"./sr-cyrl": 379,
	"./sr-cyrl.js": 379,
	"./sr.js": 378,
	"./ss": 380,
	"./ss.js": 380,
	"./sv": 381,
	"./sv.js": 381,
	"./sw": 382,
	"./sw.js": 382,
	"./ta": 383,
	"./ta.js": 383,
	"./te": 384,
	"./te.js": 384,
	"./tet": 385,
	"./tet.js": 385,
	"./tg": 386,
	"./tg.js": 386,
	"./th": 387,
	"./th.js": 387,
	"./tl-ph": 388,
	"./tl-ph.js": 388,
	"./tlh": 389,
	"./tlh.js": 389,
	"./tr": 390,
	"./tr.js": 390,
	"./tzl": 391,
	"./tzl.js": 391,
	"./tzm": 392,
	"./tzm-latn": 393,
	"./tzm-latn.js": 393,
	"./tzm.js": 392,
	"./ug-cn": 394,
	"./ug-cn.js": 394,
	"./uk": 395,
	"./uk.js": 395,
	"./ur": 396,
	"./ur.js": 396,
	"./uz": 397,
	"./uz-latn": 398,
	"./uz-latn.js": 398,
	"./uz.js": 397,
	"./vi": 399,
	"./vi.js": 399,
	"./x-pseudo": 400,
	"./x-pseudo.js": 400,
	"./yo": 401,
	"./yo.js": 401,
	"./zh-cn": 402,
	"./zh-cn.js": 402,
	"./zh-hk": 403,
	"./zh-hk.js": 403,
	"./zh-tw": 404,
	"./zh-tw.js": 404
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 511;

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_create_goal_create_goal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_alampage_alampage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_goal_details_my_goal_details__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_video__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(zone, events, user, base, navCtrl) {
        var _this = this;
        this.zone = zone;
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.rating = {};
        this.user_home = "";
        this.myGoals = [];
        this.myWorkOut = [];
        this.dateRang = {};
        this.userdetails = {};
        this.lineChartData = [
            { data: [] },
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.userdetails = JSON.parse(localStorage.userdata);
        console.log(this.userdetails);
        events.unsubscribe('todayWorkOut');
        events.subscribe('todayWorkOut', function (data) {
            console.log(data.count, data.indx);
            _this.myWorkOut[data.indx].count = data.count;
        });
        events.unsubscribe('workoutNew');
        events.subscribe('workoutNew', function (data) {
            _this.getMyWorkOut();
        });
        this.events.unsubscribe('mygoal:edit');
        events.subscribe('mygoal:edit', function (goal) {
            goal = goal.goal;
            if (goal.goal_id) {
                _this.myGoals.map(function (item, idx) {
                    if (item.goal_id == goal.goal_id) {
                        _this.myGoals[idx] = goal;
                    }
                });
            }
            else {
                goal.goal_id = goal.id;
                _this.myGoals.unshift(goal);
            }
        });
        this.user_home = "pain_chart";
        this.getUserHealthRating();
    }
    HomePage.prototype.dateChange = function () {
        if (!this.dateRang.start_date || !this.dateRang.end_date) {
            return !1;
        }
        if (this.dateRang.start_date <= this.dateRang.end_date) {
            this.getUserHealthRating();
        }
        else {
            this.base.showToast("Start date must be before end date");
        }
        console.log(this.dateRang.start_date, this.dateRang.end_date);
    };
    HomePage.prototype.getUserHealthRating = function () {
        var _this = this;
        this.user.CommnFn({ param: { start_date: this.dateRang.start_date, end_date: this.dateRang.end_date }, 'functionName': 'getUserHealthRating' })
            .subscribe(function (data) {
            if (data.details && data.details[0] && data.details[0].td_rating_id) {
                // td_rating_id,td_rating,td_feel_today
                _this.rating.feel_today = data.details[0].td_feel_today;
                _this.rating.rating = data.details[0].td_rating;
                _this.newRaingId = data.details[0].td_rating_id;
            }
            _this.lineChartData[0].data = data.details.map(function (item) {
                return item.rating;
            });
            _this.lineChartLabels = data.details.map(function (item) {
                return item.date;
            });
            _this.changeStyle();
            _this.base.showToast(data.message);
            _this.getMyGoals();
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    HomePage.prototype.getMyGoals = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'getMyGoals' })
            .subscribe(function (data) {
            _this.myGoals = data.details;
            console.log(data.details);
            //this.base.showToast(data.message);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
        this.getMyWorkOut();
    };
    HomePage.prototype.myWorkOutDetails = function (assigned_id, indx) {
        console.log(indx);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__video_video__["a" /* VideoPage */], { assigned_id: assigned_id, indx: indx });
    };
    HomePage.prototype.deleteMyGoal = function (goal_id, inx) {
        var _this = this;
        this.base.presentConfirm("Delete My Goal", "Do you want to Delete this Record", [
            {
                text: 'Cancel',
                role: 'cancel',
                handler: function () {
                    console.log("can");
                }
            },
            {
                text: 'Ok',
                handler: function () {
                    _this.confmDeleteMyGoal(goal_id, inx);
                }
            }
        ]);
    };
    HomePage.prototype.confmDeleteMyGoal = function (goal_id, inx) {
        var _this = this;
        this.user.CommnFn({ param: { goal_id: goal_id }, 'functionName': 'deleteMyGoal' })
            .subscribe(function (data) {
            _this.myGoals.splice(inx, 1);
            _this.removeAlam(goal_id);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    HomePage.prototype.removeAlam = function (id) {
        var _this = this;
        cordova.plugins.notification.local.getAll(function (datas) {
            var newArr = datas.map(function (item) { if (item.data && JSON.parse(item.data).goal_id == id) {
                console.log(item.id);
                return item.id;
            } });
            cordova.plugins.notification.local.cancel(newArr, function (dtas) {
                console.log('remove', dtas);
            }, _this);
        });
    };
    HomePage.prototype.getMyWorkOut = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'getMyWorkOut' })
            .subscribe(function (data) {
            _this.myWorkOut = data.details;
            console.log(data.details);
            //this.base.showToast(data.message);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    HomePage.prototype.MyGoalDetailsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_goal_details_my_goal_details__["a" /* MyGoalDetailsPage */], { goal_id: id });
    };
    HomePage.prototype.changeStyle = function () {
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(19,143,213,0.7)',
                borderColor: 'rgba(19,143,213,1)',
                pointBackgroundColor: 'rgba(19,143,213,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(19,143,213,1)'
            },
        ];
        this.randomize();
    };
    HomePage.prototype.randomize = function () {
        // console.log(this.lineChartData , this.lineChartData.length ,"newkjn ")
        // let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        // for (let i = 0; i < this.lineChartData.length; i++) {
        //   _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
        //   for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        //     _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        //   }
        // }
        // this.lineChartData = _lineChartData;
        // console.log(this.lineChartData);
    };
    // events
    HomePage.prototype.chartClicked = function (e) {
        console.log(e, "1");
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e, "2");
    };
    HomePage.prototype.changeFeelToday = function (data) {
        this.rating.feel_today = data;
    };
    HomePage.prototype.addTodaysRating = function () {
        var _this = this;
        this.user.CommnFn({ param: this.rating, 'functionName': 'addHealthRating' })
            .subscribe(function (data) {
            if (_this.newRaingId) {
                _this.zone.run(function () {
                    _this.lineChartData[0].data[_this.lineChartData[0].data.length - 1] = _this.rating.rating.toString();
                    _this.lineChartLabels[_this.lineChartLabels.length - 1] = 'Today';
                    _this.changeStyle();
                });
            }
            else {
                _this.zone.run(function () {
                    _this.lineChartData[0].data.push(_this.rating.rating.toString());
                    _this.lineChartLabels.push('Today');
                    _this.newRaingId = "458749674956";
                    _this.changeStyle();
                });
            }
            console.log(_this.lineChartData, _this.lineChartLabels);
            console.log(data);
            _this.base.showToast(data.message);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ;
    HomePage.prototype.creategoal = function (id) {
        if (id === void 0) { id = ''; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_create_goal_create_goal__["a" /* CreateGoalPage */], { goal_id: id, });
    };
    HomePage.prototype.alampage = function (id, name) {
        console.log(id, name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_alampage_alampage__["a" /* AlampagePage */], { goal_id: id, type: "myGoals", name: name });
    };
    HomePage.prototype.alamPageMyGoals = function (id, name) {
        console.log(id, name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_alampage_alampage__["a" /* AlampagePage */], { assigned_id: id, type: "myworkout", name: name });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\home\home.html"*/'<ion-header class="title_main">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt=""> {{userdetails.first_name}} {{userdetails.last_name}}</ion-title>\n    </ion-navbar>\n    <ion-segment [(ngModel)]="user_home">\n        <ion-segment-button value="pain_chart">\n            Pain Chart\n        </ion-segment-button>\n        <ion-segment-button value="myworkout">\n            My Workout\n        </ion-segment-button>\n        <ion-segment-button class="my_gl" value="mygoal">\n            My Goal\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content padding class="inner_bg">\n    <div [ngSwitch]="user_home">\n        <ion-list *ngSwitchCase="\'pain_chart\'">\n\n            <h5>Select Date Range</h5>\n            <div class="main_blk">\n\n                <ion-col col-6>\n                    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dateRang.start_date" placeholder="From" class="bg_pick"\n                        (ionChange)="dateChange()"></ion-datetime>\n                </ion-col>\n\n                <ion-col col-6>\n                    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="dateRang.end_date" placeholder="To" class="bg_pick"\n                        (ionChange)="dateChange()"></ion-datetime>\n                </ion-col>\n            </div>\n\n\n\n\n            <div style="display: block;">\n                <canvas baseChart [datasets]="lineChartData" width="100%" height="100" [labels]="lineChartLabels" [options]="lineChartOptions"\n                    [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n                    (chartClick)="chartClicked($event)"></canvas>\n            </div>\n            <br>\n            <div class="btn_row" align-items-center>\n                <h4>How do you feel today?</h4>\n                <div class="btn_pos" style="margin-left: -20px;">\n                    <ion-icon style="z-index: 10;" name="ios-checkmark-circle" class="tik_btn_active" [ngClass]="{\'tik_btn \' : rating.feel_today == \'bad\'}"></ion-icon>\n                    <button (click)="changeFeelToday(\'bad\')" ion-button class="bad" [ngClass]="{\'checked\' : rating.feel_today == \'bad\'}" round>BAD\n\n                    </button>\n                </div>\n\n                <div class="btn_pos">\n                    <ion-icon style="z-index: 10;" name="ios-checkmark-circle" class="tik_btn_active" [ngClass]="{\'tik_btn\' : rating.feel_today == \'good\'}"></ion-icon>\n                    <button (click)="changeFeelToday(\'good\')" ion-button class="good" [ngClass]="{\'checked\' : rating.feel_today == \'good\'}" round>GOOD\n\n                    </button>\n                </div>\n            </div>\n            <ion-item class="rate">\n                <ion-range range-has-pin pin="true" value="upper" min="1" max="10" [(ngModel)]="rating.rating">\n                    <ion-label range-left>1</ion-label>\n                    <ion-label range-right>10</ion-label>\n                </ion-range>\n            </ion-item>\n            <div padding>\n                <button ion-button class="btn_white" block (click)="addTodaysRating()">SAVE</button>\n            </div>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'myworkout\'">\n            <!-- <ion-item class="work_list">\n                <ion-thumbnail item-start>\n                    <img src="assets/imgs/temp/thumb1.png">\n                </ion-thumbnail>\n                <h2>My Neighbor Totoro</h2>\n                <h6>\n                    <span>Rep:&nbsp; 2</span>\n                    <span>Hold:&nbsp; 3</span>\n                    <span>Set:&nbsp; 1</span>\n                </h6>\n                <p>Times Today\n                    <ion-icon class="active" name="checkmark-circle"></ion-icon>\n                    <ion-icon class="active" name="checkmark-circle"></ion-icon>\n                    <ion-icon class="active" name="checkmark-circle"></ion-icon>\n                    <ion-icon class="active" name="checkmark-circle"></ion-icon>\n                    <ion-icon name="checkmark-circle"></ion-icon>\n                </p>\n                <button ion-button (click)="alampage()" class="btn_alam" clear item-end>\n                    <img src="assets/imgs/icon-alam.png" alt="">\n                </button>\n            </ion-item> -->\n\n\n            <h3 style="text-align: center;padding-top:50%; color: #fff;" *ngIf="!myWorkOut.length">No workouts assigned yet</h3>\n\n            <ion-item class="work_list" *ngFor="let workOut of myWorkOut;let i = index">\n                <ion-grid>\n                    <ion-row>\n                        <div class="r_div">\n                            <ion-col col-5 style="float: left;">\n\n                                <img src="{{workOut.image}}" style="float: left;width:80px; margin-right: 10px">\n\n                            </ion-col>\n                            <ion-col col-6 (click)="myWorkOutDetails(workOut.assigned_id ,i)" style="float: left;">\n                                <h2>{{workOut.workout_name}}</h2>\n                                <h6>\n                                    <span>Sets : {{workOut.duration}} times</span>\n                                    <br>\n                                    <span>Rest : {{workOut.rest}} min</span> <span *ngIf="workOut.rest_sec">{{workOut.rest_sec}} sec </span>\n                                    <br>\n                                    <span>Reps: {{workOut.repeat_times}} times</span>\n                                    <br>\n                                    <span>Weight: {{workOut.weight}} lbs</span>\n                                    <br>\n                                </h6>\n                                <p>Times Today\n                                    <span class="progred">{{workOut.count}}/{{workOut.repeat_times}}</span>\n                                </p>\n\n\n                            </ion-col>\n                        </div>\n                        <ion-col col-3>\n                            <button ion-button (click)="alamPageMyGoals(workOut.assigned_id ,workOut.workout_name)" class="btn_alam" clear item-end style="float: right;">\n                                <img src="assets/imgs/icon-alam.png" alt="">\n                            </button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n            </ion-item>\n\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'mygoal\'">\n            <h3 style="text-align: center;padding-top:50%; color: #fff;" *ngIf="!myGoals.length">No goals added yet</h3>\n            <ion-item-sliding class="work_list" #item *ngFor="let goals of myGoals ; let i = index">\n\n                <ion-item class="work_list">\n\n\n                    <ion-grid>\n                        <ion-row>\n                            <div class="r_div">\n                                <ion-col col-3>\n                                    <ion-avatar item-start style="float: left; margin: 17px 17px 0px 0px;">\n                                        <img src="assets/imgs/icon_goal.png">\n                                    </ion-avatar>\n                                </ion-col>\n                                <ion-col col-6 (click)="MyGoalDetailsPage(goals.goal_id ,i)">\n                                    <h2>{{goals.title}}</h2>\n                                    <h5>{{goals.description}}</h5>\n                                </ion-col>\n                            </div>\n                            <ion-col col-3>\n                                <button ion-button class="btn_alam" clear item-end style="float: right;">\n                                    <img src="assets/imgs/icon-alam.png" alt="" (click)="alampage(goals.goal_id ,goals.title)">\n                                </button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-item>\n\n                <ion-item-options side="right">\n                    <button ion-button (click)="deleteMyGoal(goals.goal_id , i)">\n                        <ion-icon name="trash"></ion-icon>\n                    </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n    </div>\n    <ion-fab right bottom class="fab_add" *ngIf="user_home==\'mygoal\'">\n        <button ion-fab (click)="creategoal()" color="light">\n            <ion-icon name="md-add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_6__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup7_signup7__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup2Page = /** @class */ (function () {
    function Signup2Page(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaint = {};
        this.errMsg = false;
        this.complaintDta();
    }
    Signup2Page.prototype.next = function (eve, fld, field) {
        console.log(fld);
        if (eve.keyCode == 13 && field != 'submit') {
            fld.setFocus();
        }
        else if (eve.keyCode == 13 && field == 'submit') {
            this.signup3();
        }
        // fld.setFocus();
    };
    Signup2Page.prototype.complaintDta = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'complaint_Data' }).subscribe(function (data) {
            if (data.status) {
                _this.complaint = data.details;
                _this.complaint_id = data.details.complaint_id;
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup2Page');
    };
    Signup2Page.prototype.signup3 = function () {
        if (!this.complaint.major_complaint) {
            console.log("step 1");
            this.errMsg = true;
            return !1;
        }
        else {
            console.log("step 3");
            if (this.complaint_id) {
                this.updateCmpnt();
            }
            else {
                this.insertCmpnt();
            }
        }
    };
    Signup2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup2Page.prototype.updateCmpnt = function () {
        var _this = this;
        this.complaint.complaint_id = this.complaint_id;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                console.log(_this.complaint_id, "iddd..2");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup7_signup7__["a" /* Signup7Page */], { complaint_id: _this.complaint_id });
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup2Page.prototype.insertCmpnt = function () {
        var _this = this;
        this.complaint.step_to_complete = 3;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_insert' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                console.log(data, data.complaint_id);
                _this.complaint_id = data.complaint_id;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup7_signup7__["a" /* Signup7Page */], { complaint_id: _this.complaint_id });
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup2',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup2\signup2.html"*/'<!--\n  Generated template for the Signup2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="bg_main">\n    <br>\n    <br>\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button round color="light" outline>Chief Complaint</button>\n    </div>\n    <br>\n    <ion-list class="form_main">\n\n        <ion-item class="inputudr">\n            <ion-input  (keyup)="next($event,a1,\'\')" type="text" value="" [(ngModel)]="complaint.major_complaint" placeholder="Major Complaint*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !complaint.major_complaint">Please enter your Major Complaint </span>\n        <ion-item class="date_picker">\n            <ion-datetime [(ngModel)]="complaint.date_of_onset"  displayFormat="MM/DD/YYYY" [(ngModel)]="myDate" placeholder="Date of Onset"></ion-datetime>\n        </ion-item>\n        \n        <ion-item class="inputudr">\n            <ion-input  #a1 (keyup)="next($event,a2,\'\')" type="text" [(ngModel)]="complaint.prev_treatment" value="" placeholder="Previous Treatment"></ion-input>\n        </ion-item>\n        \n        <ion-item class="inputudr">\n            <ion-input  #a2 (keyup)="next($event,a3,\'submit\')" type="text" [(ngModel)]="complaint.other_complaints" value="" placeholder="Other Complaints"></ion-input>\n        </ion-item>\n        \n        <div class="row_btn">\n            <ion-row>\n                <ion-col>\n                    <button ion-button="bar-button" (click)="goBack()" class="btn_round" round ion-button block>\n                      <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <div class="pagination">\n                        1/7\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <button (click)="signup3()" class="btn_round" round ion-button block>\n                      <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup2\signup2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup2Page);
    return Signup2Page;
}());

//# sourceMappingURL=signup2.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_forgot_password_forgot_password__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup1_signup1__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup2_signup2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup3_signup3__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup4_signup4__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup5_signup5__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup6_signup6__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup7_signup7__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup8_signup8__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__subscription_subscription__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_purchase__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(iap, fcm, events, user, base, navCtrl, navParams) {
        this.iap = iap;
        this.fcm = fcm;
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userdata = {};
        this.errMsg = false;
        this.fullWorkOutarray = [];
    }
    LoginPage.prototype.next = function (eve, fld, field) {
        console.log(fld);
        if (eve.keyCode == 13 && field != 'submit') {
            fld.setFocus();
        }
        else if (eve.keyCode == 13 && field == 'submit') {
            this.login();
        }
        // fld.setFocus();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.userdata.email || !this.userdata.password) {
            this.errMsg = true;
            return !1;
        }
        this.fcm.subscribeToTopic('5xtoken');
        this.fcm.getToken().then(function (token) {
            _this.user.CommnFn({ param: { email: _this.userdata.email, password: _this.userdata.password, fcmTkn: token }, 'functionName': 'userLogin' }).subscribe(function (data) {
                if (data.status) {
                    //step_to_complete
                    if (data.workoutalarm) {
                        // this.addNewAlaram(data.workoutalarm);
                    }
                    if (data.myGoal.length) {
                        _this.myGoal(data.myGoal);
                    }
                    if (data.myWorkout.length) {
                        // this.myWorkout(data.myWorkout);
                    }
                    var usrD = data.details;
                    _this.base.saveToLocal('userdata', JSON.stringify(data.details));
                    _this.base.saveToLocal('Tocken', data.userToken);
                    if (usrD.step_to_complete == 1) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signup1_signup1__["a" /* Signup1Page */]);
                    }
                    else if (usrD.step_to_complete == 2) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__signup2_signup2__["a" /* Signup2Page */]);
                    }
                    else if (usrD.step_to_complete == 3) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__signup7_signup7__["a" /* Signup7Page */], { complaint_id: usrD.complaint_id });
                    }
                    else if (usrD.step_to_complete == 4) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__signup4_signup4__["a" /* Signup4Page */], { complaint_id: usrD.complaint_id });
                    }
                    else if (usrD.step_to_complete == 5) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__signup5_signup5__["a" /* Signup5Page */], { complaint_id: usrD.complaint_id });
                    }
                    else if (usrD.step_to_complete == 6) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__signup6_signup6__["a" /* Signup6Page */], { complaint_id: usrD.complaint_id });
                    }
                    else if (usrD.step_to_complete == 8) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__signup8_signup8__["a" /* Signup8Page */], { complaint_id: usrD.complaint_id });
                    }
                    else if (usrD.step_to_complete == 9) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signup3_signup3__["a" /* Signup3Page */], { complaint_id: usrD.complaint_id });
                    }
                    else {
                        _this.events.publish('login:data', usrD);
                        _this.iap
                            .restorePurchases()
                            .then(function (arrayPurchased) {
                            if (!arrayPurchased.length) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__subscription_subscription__["a" /* SubscriptionPage */]);
                            }
                            else {
                                console.log(data.details.complaint_id);
                                if (data.details.step_to_complete == 11) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_15__home_home__["a" /* HomePage */]);
                                }
                                else {
                                    _this.alreadySubscribed();
                                }
                            }
                        });
                        //this.navCtrl.setRoot(HomePage);
                    }
                }
                else {
                    _this.base.showToast(data.message);
                }
            }, function (err) {
                _this.base.showSpinner(!1);
                _this.base.showToast("Network error, Please check your connection ");
            });
        });
        this.fcm.unsubscribeFromTopic('5xtoken');
    };
    LoginPage.prototype.alreadySubscribed = function () {
        this.base.presentConfirm("Alert", "Sorry ! You will not be able to proceed further as your phone's google play account is associated with a different purchase. Please use a different google play account to purchase a plan and proceed further.", [
            {
                text: 'Ok',
                role: 'cancel',
                handler: function () {
                }
            }
        ]);
    };
    LoginPage.prototype.myGoal = function (mygoal) {
        var _this = this;
        console.log(mygoal, "mygoal");
        // mygoal.map(item => {
        //   this.setAlamFirst(item, 'alam', item.alam_id)
        // })
        mygoal.forEach(function (item) {
            console.log(item.alam_repeat, Object.keys(item.alam_repeat).length, "mygoal");
            _this.setAlamFirst(item, 'alam', item.alam_id);
        });
    };
    LoginPage.prototype.myWorkout = function (myWorkout) {
        var _this = this;
        console.log(myWorkout, "myWorkout");
        myWorkout.forEach(function (item) {
            console.log(item.alam_repeat, "myWorkout");
            _this.setAlamFirst(item, 'workOut', item.alam_id);
        });
        // myWorkout.map(item => {
        //   this.setAlamFirst(item, 'workOut', item.alam_id)
        // })
    };
    LoginPage.prototype.setAlamFirst = function (alam, type, id) {
        var _this = this;
        var title;
        if (type == 'alam') {
            title = "My Goal";
        }
        if (type == 'workOut') {
            title = "My Workout";
        }
        Object.keys(JSON.parse(alam.alam_repeat)).map(function (keys) {
            var a = {
                id: +new Date(),
                title: title,
                text: alam.title,
                trigger: {
                    every: { weekday: (parseInt(keys) - 1), hour: parseInt(alam.alam_time.split(":")[0]), minute: parseInt(alam.alam_time.split(":")[1]) }
                },
                sound: null,
                data: { type: type, id: id, goal_id: '' }
            };
            if (alam.goal_id) {
                a.data = { type: type, id: id, goal_id: alam.goal_id };
            }
            _this.user.localPushNotification(a);
        });
        setTimeout(function () {
            _this.user.getLocalNotification();
        }, 500);
    };
    LoginPage.prototype.Linksignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.fogpas1 = function () {
        //this.navCtrl.push(SubscriptionPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.addNewAlaram = function (datas) {
        var _this = this;
        var anew = {};
        var yr;
        var mnth;
        var dat;
        var weekDaysNumber;
        var newaWeek = { 0: 'sun', 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat' };
        if (datas.length) {
            datas.map(function (item, indx) {
                if (item.work_period == 'weekly') {
                    if (item.chosen_week && item.chosen_week.split(',').length) {
                        item.chosen_week.split(',').map(function (week) {
                            weekDaysNumber = Object.keys(newaWeek).find(function (key) { return newaWeek[key] === week; });
                            anew = {
                                id: +new Date(),
                                text: item.workout_details,
                                title: 'My Workout',
                                trigger: {
                                    every: { weekday: parseInt(weekDaysNumber), hour: parseInt(item.work_times.split(":")[0]), minute: parseInt(item.work_times.split(":")[1]) }
                                },
                                led: 'FF0000',
                                data: { type: 'workOut', id: item.assigned_id, goal_id: '' },
                            };
                            _this.fullWorkOutarray.push(anew);
                            //  this.user.localPushNotification(fullWorkOutarray);
                        });
                    }
                }
                else if (item.work_period == 'onetime') {
                    yr = new Date(item.onetime_date).getFullYear();
                    mnth = new Date(item.onetime_date).getMonth();
                    dat = new Date(item.onetime_date).getDate();
                    anew = {
                        id: +new Date(),
                        title: 'My Workout',
                        text: item.workout_details,
                        trigger: { at: new Date(yr, mnth, dat, parseInt(item.work_times.split(":")[0]), parseInt(item.work_times.split(":")[1])) },
                        sound: null,
                        data: { type: 'workOut', id: item.assigned_id, goal_id: '' }
                    };
                    _this.fullWorkOutarray.push(anew);
                    // this.user.localPushNotification(a);
                }
                if ((datas.length - 1) == indx) {
                    _this.setWorkout();
                }
            });
        }
    };
    LoginPage.prototype.setWorkout = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.fullWorkOutarray);
            _this.user.localPushNotification(_this.fullWorkOutarray);
        }, 2000);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="bg_login">\n    <ion-list class="logo_login">\n        <img src="assets/imgs/logo.png" alt="">\n    </ion-list>\n    <h2 class="label_header">\n        Welcome!\n        <br>\n        <span>Sign in to continue</span>\n    </h2>\n\n    <ion-list padding class="form_main">\n\n        <ion-item class="inputudr">\n            <ion-input (keyup)="next($event,a1,\'\')" type="text" value="" [(ngModel)]="userdata.email" placeholder="Email"></ion-input>\n\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userdata.email">Please enter your Email </span>\n        <ion-item class="inputudr">\n            <ion-input #a1 (keyup)="next($event,a1,\'submit\')" type="password" [(ngModel)]="userdata.password" value="" placeholder="Password"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userdata.password">Please enter your password </span>\n        <button class="btntheme" ion-button block (click)="login()">LOGIN</button>\n\n        <h2 class="forgotpass" text-right>\n            <a (click)="fogpas1()">Forgot Password?</a>\n        </h2>\n        <br>\n\n        <h2 class="sign_up" text-center>\n            <a (click)="Linksignup()"> Don\'t have an account? SIGN UP</a>\n        </h2>\n\n    </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_5__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup2_signup2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Signup1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup1Page = /** @class */ (function () {
    function Signup1Page(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = {};
        this.errMsg = false;
    }
    Signup1Page.prototype.next = function (eve, fld, field) {
        console.log(fld);
        if (eve.keyCode == 13 && field != 'submit') {
            fld.setFocus();
        }
        else if (eve.keyCode == 13 && field == 'submit') {
            this.signupTwo();
        }
        // fld.setFocus();
    };
    Signup1Page.prototype.signupTwo = function () {
        var _this = this;
        if (!this.userData.dob || !this.userData.mobile) {
            console.log("step 1");
            this.errMsg = true;
            return !1;
        }
        else {
            console.log("step 3");
            this.userData.step_to_complete = 2;
            this.user.CommnFn({ param: this.userData, 'functionName': 'userSignUpTwo' }).subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup2_signup2__["a" /* Signup2Page */]);
                }
                else {
                    _this.base.showToast(data.message);
                }
            }, function (err) {
                _this.base.showSpinner(!1);
                _this.base.showToast("Network error, Please check your connection ");
            });
        }
    };
    Signup1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup1Page');
    };
    Signup1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup1',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup1\signup1.html"*/'<!--\n  Generated template for the Signup1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="bg_main">\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button disabled round color="light" outline>Basic Info</button>\n    </div>\n    <br>\n    <ion-list class="form_main">\n\n        <ion-item class="date_picker">\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="userData.dob" placeholder="DOB*"></ion-datetime>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.dob">Please enter your DOB </span>\n        <!--<ion-item class="inputudr">\n            <ion-input type="text" value="" [(ngModel)]="userData.address" placeholder="Address"></ion-input>\n        </ion-item>-->\n        \n        <!--<ion-item class="inputudr">\n            <ion-input type="tel" value="" [(ngModel)]="userData.postcode" placeholder="Postcode"></ion-input>\n        </ion-item>-->\n      \n        <ion-item class="inputudr">\n            <ion-input   type="tel" value="" [(ngModel)]="userData.mobile" placeholder="Mobile*"></ion-input>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !userData.mobile">Please enter your Mobile Number </span>\n        <ion-row>\n            <ion-col col-7 no-padding>\n                <ion-item class="select_label">\n                    <ion-label *ngIf="!userData.marital_status" class="select_label">Marital Status</ion-label>\n                    <ion-select [(ngModel)]="userData.marital_status">\n                        <ion-option value="married">Married</ion-option>\n                        <ion-option value="single">Single</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n            <ion-col col-5 no-padding class="pdleft">\n                <ion-item class="select_label">\n                    <ion-label *ngIf="!userData.gender" class="select_label">Sex</ion-label>\n                    <ion-select [(ngModel)]="userData.gender">\n                        <ion-option value="male">Male</ion-option>\n                        <ion-option value="female">Female</ion-option>\n                        <ion-option value="other">Other</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n\n        <ion-item class="inputudr">\n            <ion-input  (keyup)="next($event,a1,\'\')" type="text" value="" [(ngModel)]="userData.occupation" placeholder="Occupation"></ion-input>\n        </ion-item>\n\n        <div class="label_text">\n            <p>Please indicate in the box below how you found or were referred to 5X Fitness.e.g.word of mouth, Google, Facebook or keyword search.</p>\n        </div>\n\n        <ion-item class="inputudr">\n            <ion-input #a1 (keyup)="next($event,a5,\'submit\')" type="text" value="" [(ngModel)]="userData.referred" placeholder="Enter Here"></ion-input>\n        </ion-item>\n\n        <div class="row_btn">\n            <button (click)="signupTwo()" class="btn_round" round ion-button block>\n            <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n            </button>\n            <!-- <div class="pagination">\n                1/9\n            </div> -->\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup1\signup1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup1Page);
    return Signup1Page;
}());

//# sourceMappingURL=signup1.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup8_signup8__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Signup7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup7Page = /** @class */ (function () {
    function Signup7Page(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaint = { pain_points_front: {} };
        // 
        this.complaint_id = this.navParams.get('complaint_id');
        console.log(this.complaint_id, "gdfhfg");
        this.complaintDta();
    }
    Signup7Page.prototype.complaintDta = function () {
        var _this = this;
        this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe(function (data) {
            _this.complaint = data.details;
            if (_this.complaint && _this.complaint.pain_points_front_5x && Object.keys(_this.complaint.pain_points_front_5x).length) {
                console.log("step 1");
                _this.complaint.pain_points_front = JSON.parse(_this.complaint.pain_points_front_5x);
            }
            else {
                console.log("step 2");
                _this.complaint.pain_points_front = {};
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup7Page.prototype.insertArr = function (numr) {
        if (numr in this.complaint.pain_points_front) {
            delete this.complaint.pain_points_front[numr];
        }
        else {
            this.complaint.pain_points_front[numr] = numr;
        }
    };
    Signup7Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup7Page');
    };
    Signup7Page.prototype.signup8 = function () {
        var _this = this;
        this.complaint.pain_points_front_5x = JSON.stringify(this.complaint.pain_points_front);
        if (this.complaint.step_to_complete != 11) {
            this.complaint.step_to_complete = 8;
        }
        this.complaint.complaint_id = this.complaint_id;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup8_signup8__["a" /* Signup8Page */], { complaint_id: _this.complaint_id });
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup7',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup7\signup7.html"*/'<!--\n  Generated template for the Signup7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="bg_main">\n    <br>\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button disabled round color="light" outline>Pain Points Front</button>\n    </div>\n    <br>\n\n    <div class="img_row">\n        <img src="assets/imgs/human.png" alt="">\n    </div>\n    <div class="selectwp" padding>\n        <h4>Check the numbers that correspond with the pain points you experience.</h4>\n\n        <ion-row>\n            <ion-col col-3><button (click)="insertArr(\'1\')" class="btn_select btn_selected" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[1] == \'1\'}" ion-button round>1</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'2\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[2] == \'2\'}" ion-button round>2</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'3\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[3] == \'3\'}" ion-button round>3</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'4\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[4] == \'4\'}" ion-button round>4</button></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'5\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[5] == \'5\'}" ion-button round>5</button></ion-col>\n            <ion-col col-3><button class="btn_select"  (click)="insertArr(\'6\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[6] == \'6\'}" ion-button round>6</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'7\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[7] == \'7\'}" ion-button round>7</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'8\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[8] == \'8\'}" ion-button round>8</button></ion-col>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-col></ion-col>\n            <ion-col><button class="btn_select" (click)="insertArr(\'9\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[9] == \'9\'}" ion-button round>9</button></ion-col>\n            <ion-col><button class="btn_select" (click)="insertArr(\'10\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_front[10] == \'10\'}" ion-button round>10</button></ion-col>\n            <ion-col></ion-col>\n        </ion-row>\n\n    </div>\n\n    <div class="row_btn">\n        <ion-row>\n            <ion-col>\n                <button ion-button="bar-button" (click)="goBack()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col>\n                <div class="pagination">\n                    2/7\n                </div>\n            </ion-col>\n            <ion-col>\n                <button (click)="signup8()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup7\signup7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup7Page);
    return Signup7Page;
}());

//# sourceMappingURL=signup7.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup3_signup3__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Signup8Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup8Page = /** @class */ (function () {
    function Signup8Page(events, user, base, navCtrl, navParams) {
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaint = {};
        this.complaint.pain_points_back = {};
        this.complaint_id = this.navParams.get('complaint_id');
        this.complaintDta();
    }
    Signup8Page.prototype.complaintDta = function () {
        var _this = this;
        this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe(function (data) {
            _this.complaint = data.details;
            if (_this.complaint && _this.complaint.pain_points_back_5x && Object.keys(_this.complaint.pain_points_back_5x).length) {
                console.log("step 1");
                _this.complaint.pain_points_back = JSON.parse(_this.complaint.pain_points_back_5x);
            }
            else {
                console.log("step 2");
                _this.complaint.pain_points_back = {};
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup8Page.prototype.insertArr = function (numr) {
        if (numr in this.complaint.pain_points_back) {
            delete this.complaint.pain_points_back[numr];
        }
        else {
            this.complaint.pain_points_back[numr] = numr;
        }
    };
    Signup8Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup8Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup8Page');
    };
    Signup8Page.prototype.signup8 = function () {
        var _this = this;
        this.complaint.pain_points_back_5x = JSON.stringify(this.complaint.pain_points_back);
        if (this.complaint.step_to_complete != 11) {
            this.complaint.step_to_complete = 9;
        }
        this.complaint.complaint_id = this.complaint_id;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup3_signup3__["a" /* Signup3Page */], { complaint_id: _this.complaint_id });
                //this.basicInfo();
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup8Page.prototype.basicInfo = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
            .subscribe(function (data) {
            _this.events.publish('login:data', data.details);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup8Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup8',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup8\signup8.html"*/'<!--\n  Generated template for the Signup7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="bg_main">\n    <br>\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button disabled round color="light" outline>Pain Points Back</button>\n    </div>\n    <br>\n\n    <div class="img_row">\n        <img src="assets/imgs/human-back.png" alt="">\n    </div>\n    <div class="selectwp" padding>\n        <h4>Check the numbers that correspond with the pain points you experience.</h4>\n\n        <ion-row>\n            <ion-col col-3><button class="btn_select"  (click)="insertArr(\'1\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[1] == \'1\'}" ion-button round>1</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'2\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[2] == \'2\'}" ion-button round>2</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'3\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[3] == \'3\'}" ion-button round>3</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'4\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[4] == \'4\'}"  ion-button round>4</button></ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'5\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[5] == \'5\'}" ion-button round>5</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'6\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[6] == \'6\'}" ion-button round>6</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'7\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[7] == \'7\'}" ion-button round>7</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'8\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[8] == \'8\'}" ion-button round>8</button></ion-col>\n            \n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'9\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[9] == \'9\'}" ion-button round>9</button></ion-col>\n            <ion-col col-3><button class="btn_select" (click)="insertArr(\'10\')" [ngClass]="{\'btn_selected\' : complaint.pain_points_back[10] == \'10\'}" ion-button round>10</button></ion-col>\n        </ion-row>\n\n    </div>\n\n    <div class="row_btn">\n        <ion-row>\n            <ion-col>\n                <button ion-button="bar-button" (click)="goBack()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col>\n                <div class="pagination">\n                    3/7\n                </div>\n            </ion-col>\n            <ion-col>\n                <button (click)="signup8()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n                </button>\n            </ion-col>\n            <!-- <ion-col>\n                <button (click)="signup9()" class="btn_submit" ion-button block>SUBMIT</button>\n            </ion-col> -->\n        </ion-row>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup8\signup8.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_2__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup8Page);
    return Signup8Page;
}());

//# sourceMappingURL=signup8.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup4_signup4__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Signup3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup3Page = /** @class */ (function () {
    function Signup3Page(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaint = {};
        console.log(this.navParams.get('complaint_id'), "idd..3");
        this.complaint_id = this.navParams.get('complaint_id');
        this.complaintDta();
    }
    Signup3Page.prototype.complaintDta = function () {
        var _this = this;
        this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe(function (data) {
            _this.complaint = data.details;
            console.log(_this.complaint);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    // signup4() {
    //   this.navCtrl.push(Signup4Page)
    // }
    Signup3Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup3Page');
    };
    Signup3Page.prototype.signup4 = function () {
        //     if (!this.complaint.is_large_part_work && !this.complaint.is_activity_pattern && !this.complaint.activity_type && !this.complaint.minutes_per_session &&!this.complaint.session_per_week && !this.complaint.intensity && !this.complaint.other_step_2 && !this.complaint.year_of_exercise && !this.complaint.is_regular_exercise && !this.complaint.is_activity_level_change_last_5_year && !this.complaint.is_pain_during_exercise && !this.complaint.is_stop_excercising) {
        var _this = this;
        // // alert ?
        //       this.navCtrl.push(Signup4Page, { complaint_id: this.complaint_id });
        //     } else {
        if (this.complaint.step_to_complete != 11) {
            this.complaint.step_to_complete = 4;
        }
        this.complaint.complaint_id = this.complaint_id;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup4_signup4__["a" /* Signup4Page */], { complaint_id: _this.complaint_id });
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
        //}
    };
    Signup3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup3',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup3\signup3.html"*/'<!--\n  Generated template for the Signup3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="bg_main">\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button disabled round color="light" outline>Exercise History</button>\n    </div>\n    <br>\n    <ion-list class="form_main">\n\n        <ion-item class="select_label">\n            <ion-label *ngIf="!complaint.is_large_part_work"  class="select_label">Do you sit a large part of the day during work?</ion-label>\n            <ion-select [(ngModel)]="complaint.is_large_part_work">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="select_label">\n            <ion-label *ngIf="!complaint.is_activity_pattern"  class="select_label">Do you have current activity patterns?</ion-label>\n            <ion-select [(ngModel)]="complaint.is_activity_pattern">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="inputudr">\n            <ion-input   (keyup)="next($event,a1,\'\')" type="text" value="" [(ngModel)]="complaint.activity_type"  placeholder="If yes, what type of activity?"></ion-input>\n        </ion-item>\n\n        <ion-item class="inputudr">\n            <ion-input  #a1 (keyup)="next($event,a2,\'\')" type="number" value="" [(ngModel)]="complaint.minutes_per_session" placeholder="Minutes per session"></ion-input>\n        </ion-item>\n\n        <ion-item class="inputudr">\n            <ion-input  #a2 (keyup)="next($event,a3,\'\')" type="number" value="" [(ngModel)]="complaint.session_per_week" placeholder="Sessions per week?"></ion-input>\n        </ion-item>\n\n        <!--<ion-item class="select_label">\n            <ion-label *ngIf="!complaint.intensity" class="select_label">Intensity?</ion-label>\n            <ion-select [(ngModel)]="complaint.intensity" >\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n            </ion-select>\n        </ion-item>-->\n\n        <!--<ion-item class="inputudr">\n            <ion-input type="text" value="" [(ngModel)]="complaint.other_step_2" placeholder="Other"></ion-input>\n        </ion-item>-->\n\n        <ion-item class="inputudr">\n            <ion-input  #a3  type="number" value="" [(ngModel)]="complaint.year_of_exercise" placeholder="How many years have you exercised regularly if any?"></ion-input>\n        </ion-item>\n\n        <!--<ion-item class="select_label">\n            <ion-label *ngIf="!complaint.is_regular_exercise" class="select_label">The regular exercise\'s can be...</ion-label>\n            <ion-select [(ngModel)]="complaint.is_regular_exercise">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n            </ion-select>\n        </ion-item>-->\n\n        <ion-item class="select_label">\n            <ion-label *ngIf="!complaint.is_activity_level_change_last_5_year" class="select_label">Has your activity levels changed over the past 5 years?</ion-label>\n            <ion-select [(ngModel)]="complaint.is_activity_level_change_last_5_year">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="select_label">\n            <ion-label *ngIf="!complaint.is_pain_during_exercise" class="select_label">If currently exercising do you experience pain during exercise?</ion-label>\n            <ion-select [(ngModel)]="complaint.is_pain_during_exercise">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class="select_label">\n            <ion-label *ngIf="!complaint.is_stop_excercising" class="select_label">If yes, does it stop you from exercising?</ion-label>\n            <ion-select [(ngModel)]="complaint.is_stop_excercising">\n                <ion-option value="Y">Yes</ion-option>\n                <ion-option value="N">No</ion-option>\n            </ion-select>\n        </ion-item>\n\n\n        <div class="row_btn">\n            <ion-row>\n                <ion-col>\n                    <button ion-button="bar-button" (click)="goBack()" class="btn_round" round ion-button block>\n                      <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <div class="pagination">\n                        4/7\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <button (click)="signup4()" class="btn_round" round ion-button block>\n                      <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup3\signup3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup3Page);
    return Signup3Page;
}());

//# sourceMappingURL=signup3.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup5_signup5__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Signup4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup4Page = /** @class */ (function () {
    function Signup4Page(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaint = {};
        this.errMsg = false;
        this.complaint_id = this.navParams.get('complaint_id');
        this.complaintDta();
    }
    Signup4Page.prototype.next = function (eve, fld, field) {
        console.log(fld);
        if (eve.keyCode == 13 && field != 'submit') {
            fld.setFocus();
        }
        else if (eve.keyCode == 13 && field == 'submit') {
            this.signup5();
        }
        // fld.setFocus();
    };
    Signup4Page.prototype.complaintDta = function () {
        var _this = this;
        this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe(function (data) {
            _this.complaint = data.details;
            _this.complaint.diseases = JSON.parse(data.details.diseases);
            console.log(data, data.details.diseases, "fdg");
            console.log(_this.complaint);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup4Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup4Page');
    };
    Signup4Page.prototype.signup5 = function () {
        var _this = this;
        if (!this.complaint.diseases) {
            this.errMsg = true;
            return !1;
            // this.navCtrl.push(Signup5Page, { complaint_id: this.complaint_id });
        }
        else {
            this.complaint.diseases = JSON.stringify(this.complaint.diseases);
            if (this.complaint.step_to_complete != 11) {
                this.complaint.step_to_complete = 5;
            }
            this.complaint.complaint_id = this.complaint_id;
            this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    _this.complaint.diseases = JSON.parse(_this.complaint.diseases);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup5_signup5__["a" /* Signup5Page */], { complaint_id: _this.complaint_id });
                }
                else {
                    _this.base.showToast(data.message);
                }
            }, function (err) {
                _this.base.showSpinner(!1);
                _this.base.showToast("Network error, Please check your connection ");
            });
        }
    };
    Signup4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup4',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup4\signup4.html"*/'<!--\n  Generated template for the Signup4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="bg_main">\n    <br>\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button disabled round color="light" outline>Your Medical History</button>\n    </div>\n    <br>\n    <ion-list class="form_main">\n\n        <ion-item class="select_label">\n            <ion-label *ngIf="!complaint.disease" class="select_label">Have you ever had any of the following disease?</ion-label>\n            <ion-select [(ngModel)]="complaint.diseases" multiple="true" cancelText="Cancel" okText="OK">\n                <ion-option value="diabetes">Diabetes</ion-option>\n                <ion-option value="Peripheral Vascular">Peripheral Vascular Disease</ion-option>\n                <ion-option value="Osteoporosis">Osteoporosis</ion-option>\n                <ion-option value="Blood Pressure">High Blood Pressure</ion-option>\n                <ion-option value="Anemia">Anemia</ion-option>\n                <ion-option value="Emotional Disorders">Emotional Disorders</ion-option>\n                <ion-option value="Stroke">Stroke</ion-option>\n                <ion-option value="Phlebis or Emboli">Phlebis or Emboli</ion-option>\n                <ion-option value="Easting Disorders">Easting Disorders</ion-option>\n                <ion-option value="Pulmonary Disease">Pulmonary Disease</ion-option>\n                <ion-option value="Cancer">Cancer</ion-option>\n                <ion-option value="Other">Other</ion-option>\n            </ion-select>\n        </ion-item>\n        <span class="msgErr" *ngIf="errMsg && !complaint.diseases">Please answer this </span>\n        <ion-item class="inputudr">\n            <ion-textarea [(ngModel)]="complaint.other_diseases" placeholder="If other, please specify"></ion-textarea>\n        </ion-item>\n        <div class="label_text">\n\n            <p>If you could improve anything about your health, what would be your goals?</p>\n        </div>\n\n        <ion-item class="inputudr">\n            <ion-input   (keyup)="next($event,a1,\'\')" [(ngModel)]="complaint.goal_1" type="text" value="" placeholder="1"></ion-input>\n        </ion-item>\n\n        <ion-item class="inputudr">\n            <ion-input  #a1 (keyup)="next($event,a2,\'\')" type="text" [(ngModel)]="complaint.goal_2" value="" placeholder="2"></ion-input>\n        </ion-item>\n\n        <ion-item class="inputudr">\n            <ion-input   #a2 (keyup)="next($event,a3,\'submit\')" type="text" [(ngModel)]="complaint.goal_3" value="" placeholder="3"></ion-input>\n        </ion-item>\n\n        <div class="row_btn">\n            <ion-row>\n                <ion-col>\n                    <button ion-button="bar-button" (click)="goBack()" class="btn_round" round ion-button block>\n                        <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n                    </button>\n                </ion-col>\n                <ion-col>\n                    <div class="pagination">\n                        5/7\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <button (click)="signup5()" class="btn_round" round ion-button block>\n                        <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n                    </button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup4\signup4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup4Page);
    return Signup4Page;
}());

//# sourceMappingURL=signup4.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup6_signup6__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the Signup5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup5Page = /** @class */ (function () {
    function Signup5Page(user, base, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaint = {};
        this.complaint_id = this.navParams.get('complaint_id');
        this.complaintDta();
    }
    Signup5Page.prototype.complaintDta = function () {
        var _this = this;
        this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe(function (data) {
            _this.complaint = data.details;
            console.log(_this.complaint);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup5Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup5Page');
    };
    Signup5Page.prototype.signup6 = function () {
        //     if (!this.complaint.pains && !this.complaint.shortness_of_breath && !this.complaint.dizziness && !this.complaint.attack_of_shortness && !this.complaint.woken_at_night && !this.complaint.swelling_accumulation  && !this.complaint.heart_beating_faster && !this.complaint.pains_in_calves && !this.complaint.fatigue ) {
        var _this = this;
        // // alert ?
        //       this.navCtrl.push(Signup6Page, { complaint_id: this.complaint_id });
        //     } else {
        if (this.complaint.step_to_complete != 11) {
            this.complaint.step_to_complete = 6;
        }
        this.complaint.complaint_id = this.complaint_id;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup6_signup6__["a" /* Signup6Page */], { complaint_id: _this.complaint_id });
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
        //  }
    };
    Signup5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup5',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup5\signup5.html"*/'<!--\n  Generated template for the Signup5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="bg_main">\n    <br>\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button disabled round color="light" outline>Your Risk Factors</button>\n    </div>\n    <br>\n\n\n    <ion-list radio-group [(ngModel)]="complaint.pains">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you have pain in your chest during strenuous activity or exercise?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio  item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.shortness_of_breath">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Have you, at anytime in the last 12 months, had shortness of breath that came on during the day when you were not doing anything strenuous?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.dizziness">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you feel faint or have spells of severe dizziness, particularly with excerise?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.attack_of_shortness">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Have you, had shortness of breath that came on after you stopped excercising, at anytime in the last 12 months?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.woken_at_night">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Have you at anytime in the last 12 months been woken at night by an attack of shortness of breath?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.swelling_accumulation">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you experience swelling or accumulation of fluid in the ankles?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.heart_beating_faster">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you get feeling that your heart is beating faster, racing or skipping beats either at rest or during excercise?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.pains_in_calves">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you regularly get pains in your calves and lower legs during exercise, which are not due to soreness or stiffness?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.fatigue">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you experience fatigue when you are not doing anything strenuous, or when you are not doing anything at all?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <div class="row_btn">\n        <ion-row>\n            <ion-col>\n                <button ion-button="bar-button" (click)="goBack()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col>\n                <div class="pagination">\n                    6/7\n                </div>\n            </ion-col>\n            <ion-col>\n                <button (click)="signup6()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup5\signup5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup5Page);
    return Signup5Page;
}());

//# sourceMappingURL=signup5.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_subscription_subscription__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_purchase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the Signup6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signup6Page = /** @class */ (function () {
    function Signup6Page(iap, events, user, base, navCtrl, navParams) {
        this.iap = iap;
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.complaint = {};
        this.complaint_id = this.navParams.get('complaint_id');
        this.complaintDta();
    }
    Signup6Page.prototype.complaintDta = function () {
        var _this = this;
        this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe(function (data) {
            _this.complaint = data.details;
            console.log(_this.complaint);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup6Page.prototype.basicInfo = function () {
        var _this = this;
        this.user.CommnFn({ param: {}, 'functionName': 'basicInfo' })
            .subscribe(function (data) {
            _this.events.publish('login:data', data.details);
            _this.iap
                .restorePurchases()
                .then(function (arrayPurchased) {
                if (!arrayPurchased.length) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_subscription_subscription__["a" /* SubscriptionPage */], { complaint_id: _this.complaint_id });
                    // this.navCtrl.setRoot(SubscriptionPage);
                }
                else {
                    if (_this.complaint.step_to_complete == 11) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                    }
                    else {
                        _this.alreadySubscribed();
                    }
                }
            });
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    Signup6Page.prototype.alreadySubscribed = function () {
        var _this = this;
        this.base.presentConfirm("Alert", "Sorry ! You will not be able to proceed further as your phone's google play account is associated with a different purchase. Please use a different google play account to purchase a plan and proceed further.", [
            {
                text: 'Ok',
                role: 'cancel',
                handler: function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
                }
            }
        ]);
    };
    Signup6Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup6Page');
    };
    Signup6Page.prototype.signup7 = function () {
        //     if (!this.complaint.pains && !this.complaint.shortness_of_breath && !this.complaint.dizziness && !this.complaint.attack_of_shortness && !this.complaint.woken_at_night && !this.complaint.swelling_accumulation  && !this.complaint.heart_beating_faster && !this.complaint.pains_in_calves && !this.complaint.fatigue ) {
        var _this = this;
        // // alert ?
        //       this.navCtrl.push(Signup7Page, { complaint_id: this.complaint_id });
        //     } else {
        if (this.complaint.step_to_complete != 11) {
            this.complaint.step_to_complete = 7;
        }
        this.complaint.complaint_id = this.complaint_id;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.basicInfo();
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
        // }
    };
    Signup6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup6',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\signup6\signup6.html"*/'<!--\n  Generated template for the Signup5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding class="bg_main">\n    <br>\n    <div class="boxheader" text-center>\n        <h4>COMPLETE PROFILE</h4>\n        <button ion-button disabled round color="light" outline>Cardiac Risk Factors</button>\n    </div>\n    <br>\n\n\n    <ion-list radio-group [(ngModel)]="complaint.smoke_cigarettes">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you smoke cigarettes daily?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <ion-list radio-group [(ngModel)]="complaint.quit_smoking">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>If no, have you quit smoking in the last 2 years?</p>\n            </ion-col>\n            <ion-col col no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <!--<ion-list radio-group [(ngModel)]="complaint.how_may_cigarettes">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>If yes, how many cigarettes do you smoke each day on average?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>-->\n\n\n\n\n    <ion-list>\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>If yes, how many cigarettes do you smoke each day on average?</p>\n            </ion-col>\n            <ion-col col-6 no-padding>\n                <ion-item>\n                    <ion-input class="inpt" type="tel" value="" [(ngModel)]="complaint.how_may_cigarettes"></ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n    </ion-list>\n\n\n\n\n    <ion-list radio-group [(ngModel)]="complaint.close_relative">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Do you have a close relative(i.e Father, mother, brother or sister) who has had a stroke, heart attack or\n                    other cardiovascular disease?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <!--<ion-list radio-group [(ngModel)]="complaint.relation">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>If yes, what relation was this person (e.g. father, sister)</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>-->\n\n\n\n\n    <ion-list>\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>If yes, what relation was this person (e.g. father, sister)</p>\n            </ion-col>\n            <ion-col col-6 no-padding>\n                <ion-item>\n                    <ion-input class="inpt" type="text" value="" [(ngModel)]="complaint.relation"></ion-input>\n                </ion-item>\n            </ion-col>\n\n        </ion-row>\n    </ion-list>\n\n\n\n\n    <ion-list radio-group [(ngModel)]="complaint.blood_pressure">\n        <ion-row class="row_chklist">\n            <ion-col col-6>\n                <p>Has your doctor ever told you that you have high blood pressure?</p>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>Yes</ion-label>\n                    <ion-radio item-left checked="false" value="Yes"></ion-radio>\n                </ion-item>\n            </ion-col>\n            <ion-col col-3 no-padding>\n                <ion-item>\n                    <ion-label>No</ion-label>\n                    <ion-radio item-left checked="false" value="No"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n\n    <div class="row_btn">\n        <ion-row>\n            <ion-col>\n                <button ion-button="bar-button" (click)="goBack()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col>\n                <div class="pagination">\n                    7/7\n                </div>\n            </ion-col>\n            <ion-col>\n                <button (click)="signup7()" class="btn_round" round ion-button block>\n                  <ion-icon name="ios-arrow-round-forward-outline"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\signup6\signup6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_7__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_6__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], Signup6Page);
    return Signup6Page;
}());

//# sourceMappingURL=signup6.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(user, base, iap, navCtrl, navParams) {
        this.user = user;
        this.base = base;
        this.iap = iap;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentSubscription = [];
        this.complaint = {};
        this.userData = {};
        this.userData = JSON.parse(this.base.fetchData('userdata'));
        console.log(this.navParams.get('complaint_id'), this.userData, '1234567890000000000000');
        if (this.navParams.get('complaint_id')) {
            this.complaint_id = this.navParams.get('complaint_id');
        }
        else {
            this.complaint_id = this.userData.complaint_id;
        }
        this.complaintDta();
        this.getReceipt();
    }
    SubscriptionPage.prototype.complaintDta = function () {
        var _this = this;
        if (this.complaint_id) {
            this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe(function (data) {
                _this.complaint = data.details;
                console.log(_this.complaint);
            }, function (err) {
                _this.base.showSpinner(!1);
                _this.base.showToast("Network error, Please check your connection ");
            });
        }
    };
    SubscriptionPage.prototype.finalStep = function () {
        var _this = this;
        this.userData.complaint = this.complaint;
        this.userData.step_to_complete = 11;
        this.base.saveToLocal('userdata', JSON.stringify(this.userData));
        this.complaint.step_to_complete = 11;
        this.complaint.complaint_id = this.complaint_id;
        this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    SubscriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscriptionPage');
    };
    SubscriptionPage.prototype.subscribeNewProduct = function (prodctid) {
        if (!this.currentSubscription.length) {
            this.subscribeNewProductFinal(prodctid);
        }
        else {
            this.base.presentConfirm("Alert", "Please unsubscribe the currently running plan and urgade after the end date.Please check the disclaimer for further instructions.", [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]);
        }
    };
    SubscriptionPage.prototype.subscribeNewProductFinal = function (prodctid) {
        var _this = this;
        this.iap
            .getProducts(['5xfitness_monthlyplan', '5xfitness_yearlyplan', '5xfitness_lifetimeplan'])
            .then(function (products) {
            console.log(products, 'first recd');
            if (prodctid == '5xfitness_lifetimeplan') {
                _this.iap
                    .buy(prodctid)
                    .then(function (data) {
                    console.log(data, " 5xfitness_lifetimeplan  final recd");
                    if (_this.complaint.step_to_complete = 11) {
                        _this.finalStep();
                        _this.updateInapp(prodctid);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
                    }
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
            else {
                _this.iap
                    .subscribe(prodctid)
                    .then(function (data) {
                    _this.updateInapp(prodctid);
                    console.log(data, "other ------final recd");
                    if (_this.complaint.step_to_complete = 11) {
                        _this.finalStep();
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
                    }
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SubscriptionPage.prototype.updateInapp = function (prodctid) {
        var _this = this;
        this.user.CommnFn({
            param: {
                subscription_id: prodctid,
                device: 'android'
            }, 'functionName': 'saveSubscriptionDetails'
        }).subscribe(function (data) {
        }, function (err) {
            _this.base.showSpinner(!1);
        });
    };
    SubscriptionPage.prototype.getReceipt = function () {
        var _this = this;
        this.iap
            .restorePurchases()
            .then(function (arrayPurchased) {
            console.log(arrayPurchased);
            arrayPurchased.map(function (item) {
                if (item.productId == '5xfitness_lifetimeplan') {
                    _this.productCnsum = item;
                }
                _this.currentSubscription.push(item.productId);
            });
            console.log(_this.currentSubscription);
        });
    };
    SubscriptionPage.prototype.consumProduct = function () {
        if (this.productCnsum.signature) {
            this.iap.consume(this.productCnsum.productType, this.productCnsum.receipt, this.productCnsum.signature)
                .then(function () { return console.log('product was successfully consumed!'); })
                .catch(function (err) { return console.log(err); });
        }
    };
    SubscriptionPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SubscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-subscription',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\subscription\subscription.html"*/'<!--\n  Generated template for the Signup7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n  <ion-navbar>\n      <ion-title>\n          <img src="assets/imgs/logo.png" alt="">SUBSCRIPTION</ion-title>\n     \n   \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="bg_main">\n  <br>\n  <div class="boxheader" text-center>\n    \n    <button ion-button disabled round color="light" outline>CHOOSE PLAN</button>\n  </div>\n  <br>\n\n  <ion-card class="subscription_list">\n    <ion-item>\n      <h2>Monthly Plan</h2>\n      <p>$24.99 \n\n\n      </p>\n      <button class="btn_select" ion-button (click)="subscribeNewProduct(\'5xfitness_monthlyplan\')" *ngIf="currentSubscription.indexOf(\'5xfitness_yearlyplan\') == -1 && currentSubscription.indexOf(\'5xfitness_lifetimeplan\') == -1 && \n          currentSubscription.indexOf(\'5xfitness_monthlyplan\') == -1 ">SELECT</button>\n      <ion-icon *ngIf="currentSubscription.indexOf(\'5xfitness_monthlyplan\') > -1" item-end name="md-checkmark-circle"></ion-icon>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="subscription_list">\n    <ion-item>\n      <h2>Yearly Plan</h2>\n      <p>$299.99</p>\n      <button class="btn_select" ion-button (click)="subscribeNewProduct(\'5xfitness_yearlyplan\')" *ngIf="currentSubscription.indexOf(\'5xfitness_yearlyplan\') == -1 && currentSubscription.indexOf(\'5xfitness_lifetimeplan\') == -1">\n        SELECT</button>\n      <ion-icon *ngIf="currentSubscription.indexOf(\'5xfitness_yearlyplan\') > -1" item-end name="md-checkmark-circle"></ion-icon>\n    </ion-item>\n  </ion-card>\n\n  <ion-card class="subscription_list">\n    <ion-item>\n      <h2>Life Time Plan</h2>\n      <p>$399.99</p>\n      <button class="btn_select" ion-button (click)="subscribeNewProduct(\'5xfitness_lifetimeplan\')" *ngIf="currentSubscription.indexOf(\'5xfitness_lifetimeplan\') == -1">SELECT</button>\n      <ion-icon *ngIf="currentSubscription.indexOf(\'5xfitness_lifetimeplan\') > -1" item-end name="md-checkmark-circle"></ion-icon>\n    </ion-item>\n  </ion-card>\n    <div class="add-list">\n      <h2>DISCLAIMER</h2>\n      <ul>\n        <li>Payment will be charged to Play Store Account at confirmation of purchase</li>\n        <li>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period</li>\n        <li> Account will be charged for renewal within 24-hours prior to the end of the current period, and identify the cost of the renewal</li>\n        <li> Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user\'s Account Settings after purchase</li>\n        <li>Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable </li>\n      </ul>\n    </div>\n\n\n\n  <!-- <div class="row_btn">\n    <ion-row>\n      <ion-col>\n        <button ion-button="bar-button" (click)="consumProduct()" class="btn_round" round ion-button block>\n          <ion-icon name="ios-arrow-round-back-outline"></ion-icon>\n        </button>\n      </ion-col>\n      \n    </ion-row>\n  </div> -->\n \n\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\subscription\subscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_4__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase__["a" /* InAppPurchase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], SubscriptionPage);
    return SubscriptionPage;
}());

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlampagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlampagePage = /** @class */ (function () {
    function AlampagePage(zone, user, base, localNotifications, navCtrl, navParams) {
        this.zone = zone;
        this.user = user;
        this.base = base;
        this.localNotifications = localNotifications;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alam = { is_repeat: true };
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
    AlampagePage.prototype.repeatReset = function () {
        var _this = this;
        this.zone.run(function () {
            _this.alam.is_repeat;
        });
    };
    AlampagePage.prototype.insertArr = function (numr, int) {
        var _this = this;
        this.zone.run(function () {
            if (int in _this.alam.alam_repeat) {
                delete _this.alam.alam_repeat[int];
            }
            else {
                _this.alam.alam_repeat[int] = numr;
            }
            console.log(_this.alam.alam_repeat, "fghd gfdh gfdh gfdh gfd");
        });
    };
    AlampagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlampagePage');
    };
    AlampagePage.prototype.getalamDetails = function (goal_id) {
        var _this = this;
        this.user.CommnFn({ param: { goal_id: goal_id }, 'functionName': 'getAlam' })
            .subscribe(function (data) {
            console.log(data);
            if (data.details.alam_repeat) {
                data.details.alam_repeat = JSON.parse(data.details.alam_repeat);
            }
            else {
                data.details.alam_repeat = {};
            }
            _this.alam = data.details;
            if (_this.alam.alam_on == 'Yes') {
                _this.alam.alam_on == true;
            }
            else {
                _this.alam.alam_on == false;
            }
            if (_this.alam.is_repeat == 'Yes') {
                _this.alam.is_repeat == true;
            }
            else {
                _this.alam.is_repeat == false;
            }
            console.log(_this.alam, "neww......");
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    AlampagePage.prototype.getWorkalamDetails = function (assigned_id) {
        var _this = this;
        this.user.CommnFn({ param: { assigned_id: assigned_id }, 'functionName': 'getWorkoutAlam' })
            .subscribe(function (data) {
            console.log(data);
            if (data.details.alam_repeat) {
                data.details.alam_repeat = JSON.parse(data.details.alam_repeat);
            }
            else {
                data.details.alam_repeat = {};
            }
            _this.alam = data.details;
            if (_this.alam.alam_on == 'Yes') {
                _this.alam.alam_on == true;
            }
            else {
                _this.alam.alam_on == false;
            }
            if (_this.alam.is_repeat == 'Yes') {
                _this.alam.is_repeat == true;
            }
            else {
                _this.alam.is_repeat == false;
            }
            console.log(_this.alam, "neww......");
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    AlampagePage.prototype.saveAlam = function () {
        var _this = this;
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
        }
        else {
            fnName = 'setAlam';
        }
        console.log(this.alam, "alam array");
        if (!this.alam.is_repeat) {
            this.alam.alam_repeat = "{}";
        }
        this.user.CommnFn({ param: this.alam, 'functionName': fnName })
            .subscribe(function (data) {
            console.log(_this.alam);
            if (data.status) {
                if (fnName == 'setAlam') {
                    if (_this.alam.alam_id) {
                        _this.removeAlam('alam', _this.alam.alam_id);
                    }
                    else {
                        _this.setAlamFirst('alam', data.id);
                    }
                }
                if (fnName == 'setWorkOutAlam') {
                    if (_this.alam.assigned_id) {
                        _this.removeAlam('workOut', _this.alam.assigned_id);
                    }
                }
                _this.navCtrl.pop();
            }
            _this.base.showToast('Alarm set successfully');
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    AlampagePage.prototype.removeAlam = function (type, id) {
        var _this = this;
        cordova.plugins.notification.local.getAll(function (datas) {
            var newArr = datas.map(function (item) { if (item.data && JSON.parse(item.data).id == id && JSON.parse(item.data).type == type) {
                console.log(item.id);
                return item.id;
            } });
            cordova.plugins.notification.local.cancel(newArr, function (dtas) {
                console.log('remove', dtas);
                if (_this.alam.alam_on) {
                    _this.setAlamFirst(type, id);
                }
            }, _this);
        });
    };
    AlampagePage.prototype.setAlamFirst = function (type, id) {
        var _this = this;
        var title;
        if (type == 'alam') {
            title = "My Goal";
        }
        if (type == 'workOut') {
            title = "My Workout";
        }
        Object.keys(JSON.parse(this.alam.alam_repeat)).map(function (keys) {
            var a = {
                id: +new Date(),
                title: title,
                text: _this.alarmName,
                trigger: {
                    every: { weekday: (parseInt(keys) - 1), hour: parseInt(_this.alam.alam_time.split(":")[0]), minute: parseInt(_this.alam.alam_time.split(":")[1]) }
                },
                sound: null,
                data: { type: type, id: id, goal_id: '' }
            };
            if (_this.alam.goal_id) {
                a.data = { type: type, id: id, goal_id: _this.alam.goal_id };
            }
            _this.user.localPushNotification(a);
        });
        setTimeout(function () {
            _this.user.getLocalNotification();
        }, 500);
    };
    AlampagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alampage',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\alampage\alampage.html"*/'<!--\n  Generated template for the AlampagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n\n    <ion-navbar>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt=""> Set Alarm</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="inner_bg">\n\n    <ion-item class="tongle_btn">\n        <ion-label> Set Your Alarm</ion-label>\n        <ion-toggle [(ngModel)]="alam.alam_on"></ion-toggle>\n    </ion-item>\n\n    <ion-item class="time_style">\n        <ion-label *ngIf="!alam.alam_time">Select Time</ion-label>\n        <ion-datetime [(ngModel)]="alam.alam_time" displayFormat="h:mm A" pickerFormat="h mm A"></ion-datetime>\n    </ion-item>\n\n    <ion-item class="time_style">\n        <ion-label>Repeat</ion-label>\n        <ion-checkbox [(ngModel)]="alam.is_repeat" (click)="repeatReset()"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item class="time_style" *ngIf="alam.is_repeat">\n        <button ion-button round clear class="alam" (click)="insertArr(\'S\',1)" [ngClass]="{\'alam_clear\' : alam.alam_repeat[1] != \'S\'}">S </button>\n        <button ion-button round clear class="alam" (click)="insertArr(\'M\',2)" [ngClass]="{\'alam_clear\' : alam.alam_repeat[2] != \'M\'}">M </button>\n        <button ion-button round clear class="alam" (click)="insertArr(\'T\',3)" [ngClass]="{\'alam_clear\' : alam.alam_repeat[3] != \'T\'}">T </button>\n        <button ion-button round clear class="alam" (click)="insertArr(\'W\',4)" [ngClass]="{\'alam_clear\' : alam.alam_repeat[4] != \'W\'}">W </button>\n        <button ion-button round clear class="alam" (click)="insertArr(\'TH\',5)" [ngClass]="{\'alam_clear\' : alam.alam_repeat[5] != \'TH\'}">T </button>\n        <button ion-button round clear class="alam" (click)="insertArr(\'F\',6)" [ngClass]="{\'alam_clear\' : alam.alam_repeat[6] != \'F\'}">F</button>\n        <button ion-button round clear class="alam" (click)="insertArr(\'SA\',7)" [ngClass]="{\'alam_clear\' : alam.alam_repeat[7] != \'SA\'}">SA </button>\n\n    </ion-item>\n\n\n    <div padding>\n        <button class="btnteme" ion-button block (click)="saveAlam()">SAVE</button>\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\alampage\alampage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_3__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AlampagePage);
    return AlampagePage;
}());

//# sourceMappingURL=alampage.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_video_editor__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_app_user__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__url__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_detail_media_chat_detail_media__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ChatDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatDetailPage = /** @class */ (function () {
    function ChatDetailPage(videoPlayer, streamingMedia, events, videoEditor, camera, transfer, _zone, user, base, navCtrl, navParams, mediaCapture) {
        var _this = this;
        this.videoPlayer = videoPlayer;
        this.streamingMedia = streamingMedia;
        this.events = events;
        this.videoEditor = videoEditor;
        this.camera = camera;
        this.transfer = transfer;
        this._zone = _zone;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mediaCapture = mediaCapture;
        this.chat = [];
        this.groupDetails = {};
        this.userdetails = {};
        this.baseurl = __WEBPACK_IMPORTED_MODULE_10__url__["a" /* BaseUrl */];
        this.stattusProgress = false;
        this.reqNewArr = {};
        this.mesgArray = {};
        this.tempObject = {};
        this.userCount = '1';
        events.unsubscribe('messageList:detail');
        events.subscribe('messageList:detail', function (data) {
            console.log(data, "get srt");
            data = data.datas;
            if (_this.groupDetails.group_id == data.group_id) {
                _zone.run(function () {
                    _this.chat.push(data);
                    setTimeout(function () {
                        _this.content.scrollToBottom(1); //300ms animation speed
                    }, 100);
                });
            }
            else {
                var group_id = data.group_id;
                var group_name = data.group_name;
                var i = 1;
                _this.base.presentConfirm("New Message from " + group_name, "Do you want to see", [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            _this.events.publish('messageList:list', { datas: data });
                            console.log("can");
                        }
                    },
                    {
                        text: 'Ok',
                        handler: function () {
                            console.log({ group_id: group_id, i: i, group_name: group_name });
                            _this.navCtrl.push(ChatDetailPage_1, { data: { group_id: group_id, i: i, group_name: group_name } });
                        }
                    }
                ]);
            }
        });
        this.userdetails = JSON.parse(localStorage.userdata);
        this.groupDetails = this.navParams.get('data');
        console.log(this.groupDetails, "group Details");
        this.getMessage(this.groupDetails.group_id);
        events.unsubscribe('sendMultiMessage');
        events.subscribe('sendMultiMessage', function (data) {
            _this.tempObject = data;
            console.log(data, "new ent");
            //this.sendMediaMessage(data)
            _this.sendMessageMedia('', _this.tempObject.message);
            setTimeout(function () {
                _this.content.scrollToBottom(1); //300ms animation speed
            }, 100);
        });
    }
    ChatDetailPage_1 = ChatDetailPage;
    ChatDetailPage.prototype.getMessage = function (group_id) {
        var _this = this;
        this.user.CommnFn({ param: { group_id: group_id }, 'functionName': 'getMessage' })
            .subscribe(function (data) {
            _this.userCount = data.count;
            _this.chat = data.details;
            if (_this.chat.length) {
                _this.updateReadCount(_this.chat[_this.chat.length - 1].message_id);
            }
            setTimeout(function () {
                _this.content.scrollToBottom(1); //300ms animation speed
            }, 100);
            setTimeout(function () {
                _this.content.scrollToBottom(1); //300ms animation speed
            }, 1300);
            console.log(_this.chat);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ChatDetailPage.prototype.updateReadCount = function (message_id) {
        var _this = this;
        this.user.CommnFn({ param: { message_id: message_id, group_id: this.groupDetails.group_id }, 'functionName': 'updateReadCount' })
            .subscribe(function (data) {
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ChatDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatDetailPage');
    };
    // //////////////////////////////////////////////// file trans
    ChatDetailPage.prototype.sendMessage = function () {
        if (!this.video_url) {
            this.sendTextMsg();
        }
        else {
            //  this.sendMessageMedia();
        }
    };
    ChatDetailPage.prototype.sendTextMsg = function () {
        var _this = this;
        if (!this.mesgArray.message) {
            return !1;
        }
        this.user.CommnFn({ param: { message: this.mesgArray.message, group_id: this.groupDetails.group_id }, 'functionName': 'addMessage' })
            .subscribe(function (data) {
            var newOb = {
                date: "Now",
                group_id: _this.groupDetails.group_id,
                image: _this.userdetails.image,
                media_url: '',
                member_id: _this.userdetails.member_id,
                message: _this.mesgArray.message,
                message_from: _this.userdetails.first_name,
                message_id: 1,
                thumb_nail: '',
                type: 'text'
            };
            _this.chat.push(newOb);
            setTimeout(function () {
                _this.mesgArray.message = '';
                _this.content.scrollToBottom(300); //300ms animation speed
            }, 100);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    ChatDetailPage.prototype.sendMessageMedia = function (type, message) {
        var _this = this;
        if (type === void 0) { type = ''; }
        this.reqNewArr.group_id = this.groupDetails.group_id;
        this.reqNewArr.type = this.typeMedia;
        this.reqNewArr.message = message;
        this.stattusProgress = true;
        this.base.showSpinner(!0, 'Please Wait.. Uploading might take few seconds..');
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'video_url',
            fileName: this.videoName,
            headers: this.user.headerOptionsForFormData(),
            params: this.reqNewArr
        };
        fileTransfer.upload(this.video_url, this.baseurl + 'users/saveRequestsnew', options)
            .then(function (data) {
            _this.stattusProgress = false;
            var data1 = JSON.parse(data.response);
            if (data1.status) {
                _this.tempObject.message_id = data1.message_id;
                _this.tempObject.media_url = data1.media_url;
                _this.tempObject.image = _this.userdetails.image;
                _this.chat.push(_this.tempObject);
                setTimeout(function () {
                    _this.content.scrollToBottom(1);
                }, 100);
                _this.base.showSpinner(!1);
            }
            else {
                console.log(data1);
                _this.base.showToast(data1.message);
                _this.base.showSpinner(!1);
                return !1;
            }
            console.log(typeof (data.response), data, "datataaa......");
            _this.base.showSpinner(!1);
            // success
        }, function (err) {
            console.log(err, "error......");
            _this.stattusProgress = false;
            _this.base.showSpinner(!1);
        });
        var that = this;
        fileTransfer.onProgress(function (e) {
            _this._zone.run(function () {
                that.progress = (e.lengthComputable) ? Math.floor(e.loaded / e.total * 100) : -1;
            });
        });
    };
    ChatDetailPage.prototype.takePic = function () {
        var _this = this;
        this.base.presentActionSheet("Add Picture With", [
            {
                text: 'Gallery',
                role: 'destructive',
                icon: 'images',
                handler: function () {
                    _this.getImageGallery();
                }
            }, {
                text: 'Camera',
                icon: 'camera',
                handler: function () {
                    _this.getImageFromCamera();
                }
            }, {
                text: 'Video Gallery',
                icon: 'camera',
                handler: function () {
                    _this.getVideoGallery();
                }
            }, {
                text: 'Video Capture',
                icon: 'camera',
                handler: function () {
                    _this.getVideoCamGallery();
                }
            }, {
                text: 'Cancel',
                role: 'cancel',
                icon: 'undo',
                handler: function () {
                }
            }
        ]);
    };
    ChatDetailPage.prototype.getImageGallery = function () {
        var _this = this;
        var options = {
            quality: 50,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: false,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData, 'new im');
            if (imageData.substring(0, 21) == "content://com.android") {
                var photo_split = imageData.split("%3A");
                _this.video_url = "content://media/external/images/media/" + photo_split[1];
            }
            else {
                _this.video_url = imageData;
            }
            _this.typeMedia = 'image';
            _this.addNewObjectToMessageArray('', _this.video_url, '', 'image');
        }, function (err) {
            // Handle error
        });
    };
    ChatDetailPage.prototype.getImageFromCamera = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: false,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData, 'new im');
            _this.typeMedia = 'image';
            _this.video_url = imageData;
            _this.addNewObjectToMessageArray('', _this.video_url, '', 'image');
        }, function (err) {
            // Handle error
        });
    };
    ChatDetailPage.prototype.getVideoGallery = function () {
        var _this = this;
        var options = {
            quality: 50,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.VIDEO,
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData, 'new im');
            _this.media_url = imageData;
            _this.video_url = imageData;
            _this.videoName = imageData.split('/')[imageData.split('/').length - 1];
            _this.typeMedia = 'video';
            _this.createvideoThumb(_this.video_url);
            // this.addNewObjectToMessageArray('', this.video_url, '', 'video');
            console.log(imageData, "new one ");
        }, function (err) {
            // Handle error
        });
    };
    ChatDetailPage.prototype.getVideoCamGallery = function () {
        var _this = this;
        var options = { limit: 1 };
        this.mediaCapture.captureVideo(options)
            .then(function (data) {
            _this.videoName = data[0]['name'];
            _this.reqNewArr.video_url = data[0]['localURL'];
            _this.video_url = data[0]['localURL'];
            _this.createvideoThumb(data[0].fullPath);
            _this.typeMedia = 'video';
        }, function (err) { return console.error(err); });
    };
    ChatDetailPage.prototype.createvideoThumb = function (file) {
        var _this = this;
        this.videoEditor.createThumbnail({
            fileUri: file,
            outputFileName: new Date().getTime().toString(),
            atTime: 1
        }).then(function (fileUri) {
            console.log('video transcode success', fileUri);
            _this.thumbImg = fileUri;
            _this.addNewObjectToMessageArray('', _this.video_url, '', 'video');
        }).catch(function (error) {
            //console.log('video transcode error', error)
            return '';
        });
    };
    ChatDetailPage.prototype.addNewObjectToMessageArray = function (image, media_url, message, type) {
        var _this = this;
        if (image === void 0) { image = ''; }
        if (media_url === void 0) { media_url = ''; }
        if (message === void 0) { message = ''; }
        if (type === void 0) { type = ''; }
        if (type == 'video') {
            setTimeout(function () {
                var newOb = {
                    date: "Now",
                    group_id: _this.groupDetails.group_id,
                    image: image,
                    media_url: media_url,
                    member_id: _this.userdetails.member_id,
                    message: message,
                    message_from: _this.userdetails.first_name,
                    message_id: 1,
                    thumb_nail: _this.thumbImg,
                    type: type
                };
                console.log("show two tim");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__chat_detail_media_chat_detail_media__["a" /* ChatDetailMediaPage */], { data: newOb });
            }, 700);
        }
        else {
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
            };
            console.log("show img tim");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__chat_detail_media_chat_detail_media__["a" /* ChatDetailMediaPage */], { data: newOb });
        }
    };
    ChatDetailPage.prototype.playVideo = function (video) {
        // this.videoPlayer.play(video).then(() => {
        //   console.log('video completed');
        //   setTimeout(() => {
        //     this.videoPlayer.close();
        //   }, 100);
        // }).catch(err => {
        //   console.log(err);
        // });
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            shouldAutoClose: true,
        };
        this.streamingMedia.playVideo(video, options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], ChatDetailPage.prototype, "content", void 0);
    ChatDetailPage = ChatDetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-detail',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\chat-detail\chat-detail.html"*/'<ion-header class="title_main">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt=""> {{groupDetails.group_name}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content #content padding class="inner_bg">\n\n\n\n\n    <ion-list *ngFor="let chatlist of chat">\n\n        <ion-item class="work_list" *ngIf="chatlist.member_id != userdetails.member_id && chatlist.type == \'text\'">\n            <ion-avatar item-start>\n                <img *ngIf="chatlist.image" src="{{chatlist.image}}">\n                <img *ngIf="!chatlist.image" src="assets/imgs/profile_bg.jpg">\n            </ion-avatar>\n            <div class="work_list_out">{{chatlist.message}}</div>\n            <h5 class="bwrds">{{chatlist.message_from}} {{chatlist.timeInsec}}</h5>\n\n        </ion-item>\n\n\n\n        <ion-item class="work_list_rte" *ngIf="chatlist.member_id == userdetails.member_id && chatlist.type == \'text\'">\n\n            <div class="work_list_img">\n                <div>{{chatlist.message}}</div>\n            </div>\n            <h5 class="bwrds">{{chatlist.message_from}} {{chatlist.timeInsec}}</h5>\n            <ion-avatar item-end>\n                <img *ngIf="chatlist.image" src="{{chatlist.image}}">\n                <img *ngIf="!chatlist.image" src="assets/imgs/profile_bg.jpg">\n            </ion-avatar>\n        </ion-item>\n\n\n        <ion-item class="work_list_rte" *ngIf="chatlist.type == \'image\'">\n\n            <div class="work_list_img">\n                <div class="img_pos">\n                    <img imageViewer src="{{chatlist.media_url}}">\n                </div>\n                <div [ngClass]="{\'videoMsdOther\' : chatlist.member_id != userdetails.member_id}">\n                    <p class="lngtext">{{chatlist.message}}</p></div>\n            </div>\n            <h5 class="bwrds">{{chatlist.message_from}} {{chatlist.timeInsec}}</h5>\n            <ion-avatar item-end *ngIf="chatlist.member_id == userdetails.member_id">\n                <img *ngIf="chatlist.image" src="{{chatlist.image}}">\n                <img *ngIf="!chatlist.image" src="assets/imgs/profile_bg.jpg">\n            </ion-avatar>\n            <ion-avatar item-start *ngIf="chatlist.member_id != userdetails.member_id">\n                <img *ngIf="chatlist.image" src="{{chatlist.image}}">\n                <img *ngIf="!chatlist.image" src="assets/imgs/profile_bg.jpg">\n            </ion-avatar>\n        </ion-item>\n\n\n\n        <ion-item class="work_list_rte" *ngIf="chatlist.type == \'video\'">\n\n            <div class="work_list_blok img_pos" *ngIf="chatlist.play == 0" (click)="playVideo(chatlist.media_url)">\n\n\n                <div class="bg_gray img_pos">\n                    <img style=" z-index: 100000;\n                    width: 54px;" src="assets/imgs/play.png" class="pos">\n                </div>\n                <img src="{{chatlist.thumb_nail}}">\n\n\n            </div>\n            <!-- <div class="work_list_blok " *ngIf="chatlist.play == 1">\n                <video style="width: 100%; height: auto; max-height: 200px;" autoplay id="video1" controls="controls" preload="metadata"\n                    webkit-playsinline="webkit-playsinline" class="videoPlayer" controlsList="nodownload">\n                    <source src="{{chatlist.media_url}}" type="video/mp4" />\n                </video>\n\n            </div> -->\n            <div class="videoMsd" [ngClass]="{\'videoMsdOther\' : chatlist.member_id != userdetails.member_id}">   <p class="lngtext">{{chatlist.message}}</p>      </div>\n            <h5 class="bwrds">{{chatlist.timeInsec}} </h5>\n            <ion-avatar item-end *ngIf="chatlist.member_id == userdetails.member_id">\n                <img *ngIf="chatlist.image" src="{{chatlist.image}}">\n                <img *ngIf="!chatlist.image" src="assets/imgs/profile_bg.jpg">\n            </ion-avatar>\n            <ion-avatar item-start *ngIf="chatlist.member_id != userdetails.member_id">\n                <img *ngIf="chatlist.image" src="{{chatlist.image}}">\n                <img *ngIf="!chatlist.image" src="assets/imgs/profile_bg.jpg">\n            </ion-avatar>\n        </ion-item>\n\n\n    </ion-list>\n\n\n\n\n\n\n\n</ion-content>\n\n\n<ion-footer keyboard-attach="" class="bar-stable item-input-inset bar bar-footer">\n    <label class="item-input-wrapper">\n        <input placeholder="Type your message" [(ngModel)]="mesgArray.message" type="text" class="msg_input">\n    </label>\n    <button class="button button-clear btn_snd" (click)="takePic()">\n        <ion-icon name="ios-attach-outline"></ion-icon>\n    </button>\n    <button class="button button-clear btn_snd" (click)="sendMessage()">\n        <ion-icon name="ios-send"></ion-icon>\n    </button>\n</ion-footer>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\chat-detail\chat-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__["a" /* VideoPlayer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__["a" /* StreamingMedia */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_9__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_8__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */]])
    ], ChatDetailPage);
    return ChatDetailPage;
    var ChatDetailPage_1;
}());

//# sourceMappingURL=chat-detail.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyGoalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyGoalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyGoalDetailsPage = /** @class */ (function () {
    function MyGoalDetailsPage(zone, events, user, base, navCtrl, navParams) {
        this.zone = zone;
        this.events = events;
        this.user = user;
        this.base = base;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.goal = {};
        this.errMsg = false;
        this.goal.progress_range = 0;
        if (this.navParams.get('goal_id')) {
            this.getGoal(this.navParams.get('goal_id'));
        }
    }
    MyGoalDetailsPage.prototype.change = function () {
        var _this = this;
        this.zone.run(function () {
            _this.goal.progress_range;
            console.log(_this.goal.progress_range);
        });
    };
    MyGoalDetailsPage.prototype.getGoal = function (id) {
        var _this = this;
        this.user.CommnFn({ param: { goal_id: id }, 'functionName': 'getGoal' })
            .subscribe(function (data) {
            if (data.status) {
                _this.goal = data.details;
            }
            else {
                _this.navCtrl.pop();
                _this.base.showToast(data.message);
            }
            console.log(data);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    MyGoalDetailsPage.prototype.addGoal = function () {
        var _this = this;
        if (!this.goal.title) {
            this.errMsg = true;
            return !1;
        }
        this.user.CommnFn({ param: this.goal, 'functionName': 'addMyGoal' })
            .subscribe(function (data) {
            _this.base.showToast(data.message);
            if (data.status) {
                _this.goal.id = data.id;
                _this.events.publish("mygoal:edit", { goal: _this.goal });
                _this.navCtrl.pop();
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    MyGoalDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyGoalDetailsPage');
    };
    MyGoalDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-goal-details',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\my-goal-details\my-goal-details.html"*/'<ion-header class="title_main">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt="">\n        </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="inner_bg">\n\n\n\n\n    <ion-list>\n        <ion-item center style="background: none!important; border: none!important" text-center>\n            <p class="fnt">Today’s Progress</p>\n            <!-- <div class="progress-circle p80">\n                <span>12%</span>\n                <div class="left-half-clipper">\n                    <div class="first80-bar"></div>\n                    <div class="value-bar"></div>\n                </div>\n            </div> -->\n\n            <div class="r_out">\n                <svg viewBox="0 0 36 36">\n                    <path d="M18 2.0845\n                                                     a 15.9155 15.9155 0 0 1 0 31.831\n                                                     a 15.9155 15.9155 0 0 1 0 -31.831" fill="#fff" stroke="#626466" stroke-width="3"\n                        stroke-dasharray="100, 100"></path>\n                    <path d="M18 2.0845\n                                                       a 15.9155 15.9155 0 0 1 0 31.831\n                                                       a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="#eeae24"\n                        stroke-width="3" [attr.stroke-dasharray]="goal.progress_range *10 +\', 100\'"></path>\n                </svg>\n                <span class="spanstyle">{{goal.progress_range *10}}%</span>\n            </div>\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n    <ion-item class="item_style_top">\n\n        <h2 class="i_label">{{goal.title}}</h2>\n    </ion-item>\n\n\n    <ion-item class="item_style_btm">\n\n        <ion-label stacked style="margin-bottom: 5px; color: #fff;">Edit Goal </ion-label>\n        <ion-input type="text" class="inp_style" [(ngModel)]="goal.title"> </ion-input>\n\n\n    </ion-item>\n\n\n    <ion-list class="item_style">\n\n        <ion-list class="fnt_style">Rate your progress aginst your goal.</ion-list>\n        <ion-item class="rate">\n\n            <ion-range range-has-pin pin="true" value="upper" min="0" max="10" [(ngModel)]="goal.progress_range" (ionChange)="change()">\n                \n            </ion-range>\n        </ion-item>\n\n    </ion-list>\n\n    <ion-item class="item_style_top" style="margin-top: 14px;" >\n\n        <h2 class="i_label">Description</h2>\n\n    </ion-item>\n    <ion-item class="item_style_btm">\n        <ion-textarea rows="4" [(ngModel)]="goal.description" placeholder="Description"></ion-textarea>\n    </ion-item>\n\n\n\n    <div padding>\n        <button (click)="addGoal()" class="btnteme" ion-button block>SAVE</button>\n    </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\my-goal-details\my-goal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_3__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_2__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], MyGoalDetailsPage);
    return MyGoalDetailsPage;
}());

//# sourceMappingURL=my-goal-details.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_player__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_streaming_media__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alampage_alampage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_base__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_user__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoPage = /** @class */ (function () {
    function VideoPage(zone, events, user, base, streamingMedia, videoPlayer, navCtrl, navParams) {
        this.zone = zone;
        this.events = events;
        this.user = user;
        this.base = base;
        this.streamingMedia = streamingMedia;
        this.videoPlayer = videoPlayer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isPlay = false;
        this.workout = {};
        this.workout1 = 'http://10.10.10.254/bibinv/1.mp4';
        this.isVideo = false;
        this.indx = this.navParams.get('indx');
        this.assigned_id = this.navParams.get('assigned_id');
        console.log(this.navParams.get('assigned_id'), "fdsgjh fsjdhgsjfd jfhdsg");
        if (this.navParams.get('assigned_id')) {
            this.getWorkout();
        }
    }
    VideoPage.prototype.alamPageMyGoals = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__alampage_alampage__["a" /* AlampagePage */], { assigned_id: id, type: "myworkout" });
    };
    VideoPage.prototype.changeCount = function (cond) {
        if (cond == 'add') {
            if (this.workout.repeat_times > this.workout.count) {
                this.workout.count += 1;
            }
            else {
                this.base.showToast("You have already reached the total no.of Reps assigned");
            }
        }
        else {
            if (this.workout.count > 0) {
                this.workout.count -= 1;
            }
            else {
                this.base.showToast("You cannot choose a value below 0");
            }
        }
    };
    VideoPage.prototype.updateWorkoutCount = function () {
        var _this = this;
        this.user.CommnFn({ param: { assigned_id: this.workout.assigned_id, count: this.workout.count, workout_progress_id: this.workout.workout_progress_id }, 'functionName': 'updateWorkoutCount' })
            .subscribe(function (data) {
            if (data.status) {
                _this.events.publish('todayWorkOut', { count: _this.workout.count, indx: _this.indx });
                _this.navCtrl.pop();
            }
            else {
                _this.base.showToast(data.message);
            }
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    VideoPage.prototype.startVideo = function () {
        var _this = this;
        this.zone.run(function () {
            _this.isVideo = true;
        });
    };
    VideoPage.prototype.getWorkout = function () {
        var _this = this;
        this.user.CommnFn({ param: { assigned_id: this.assigned_id }, 'functionName': 'getWorkout' })
            .subscribe(function (data) {
            if (data.status) {
                _this.workout = data.details;
            }
            else {
                _this.navCtrl.pop();
                _this.base.showToast(data.message);
            }
            console.log(data);
        }, function (err) {
            _this.base.showSpinner(!1);
            _this.base.showToast("Network error, Please check your connection ");
        });
    };
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
    };
    VideoPage.prototype.playPause = function () {
        this.myVideo = document.getElementById("video1");
        if (this.myVideo.paused) {
            this.myVideo.play();
            this.isPlay = true;
        }
        else {
            this.myVideo.pause();
            this.isPlay = false;
        }
    };
    VideoPage.prototype.makeBig = function () {
        this.myVideo = document.getElementById("video1");
        this.myVideo.width = 560;
    };
    VideoPage.prototype.makeSmall = function () {
        this.myVideo = document.getElementById("video1");
        this.myVideo.width = 320;
    };
    VideoPage.prototype.makeNormal = function () {
        this.myVideo = document.getElementById("video1");
        this.myVideo.width = 420;
    };
    VideoPage.prototype.showAlert = function () {
        console.log(this.workout);
        this.base.showAlert({
            title: 'Details',
            subTitle: this.workout.workout_details,
            buttons: ['Dismiss']
        });
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-video',template:/*ion-inline-start:"D:\ionic3\5x\5xfitness\src\pages\video\video.html"*/'<!--\n  Generated template for the AlampagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="title_main">\n\n    <ion-navbar>\n        <ion-title>\n            <img src="assets/imgs/logo.png" alt=""> </ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="inner_bg no-padding">\n\n\n\n    <!-- <div style="text-align:center"> \n        <button (click)="playPause()">Play/Pause</button> \n        <button (click)="makeBig()">Big</button>\n        <button (click)="makeSmall()">Small</button>\n        <button (click)="makeNormal()">Normal</button>\n        <br><br>\n        <video id="video1" width="420">\n          <source src="http://10.10.10.254/bibinv/1.mp4" type="video/mp4">\n         </video>\n      </div> -->\n\n\n    <!-- class="video_cover" -->\n    <div class="video_cover" *ngIf="!isVideo"> <img (click)="startVideo()" src="{{workout.image}}"></div>\n\n    <video *ngIf="isVideo" autoplay id="video1" controls="controls" preload="metadata" webkit-playsinline="webkit-playsinline"\n        class="videoPlayer">\n        <source src="{{workout.video}}" type="video/mp4" />\n    </video>\n    <!-- <ion-item class="item_cstm">\n        <button (click)="playPause()" class="ply">\n            <ion-icon name="play" *ngIf="!isPlay"></ion-icon>\n            <ion-icon name="pause" *ngIf="isPlay"></ion-icon>\n        </button>\n    </ion-item> -->\n\n\n    <button ion-button class="btn_alam" clear item-end (click)="alamPageMyGoals(workout.assigned_id)">\n        <img src="assets/imgs/icon-alam.png" alt="">\n    </button>\n    <ion-item class="tongle_btn lines">\n\n\n\n        <ion-label> {{workout.workout_name}}  <ion-icon *ngIf="workout.workout_details"style="color:#eeae24;font-size: 20px ;margin-left: 15px" (click)="showAlert()" name="information-circle"></ion-icon></ion-label>\n       \n    </ion-item>\n\n\n    <ion-item class="video_style" style="display: flex;">\n\n        <ion-row>\n            <ion-col col-12>\n                <ion-list class="lbl">\n                    <img src="assets/imgs/dot.png" alt=""> Sets : {{workout.duration}} times</ion-list>\n                <ion-list class="lbl">\n                    <img src="assets/imgs/dot.png" alt=""> Rest : {{workout.rest}} min  <span *ngIf="workout.rest_sec"> {{workout.rest_sec}} sec</span></ion-list>\n            </ion-col>\n        </ion-row>\n\n\n\n        <ion-row>\n            <ion-col col-12>\n                <ion-list class="lbl">\n                    <img src="assets/imgs/dot.png" alt=""> Reps : {{workout.repeat_times}} times</ion-list>\n                    <ion-list class="lbl">\n                        <img src="assets/imgs/dot.png" alt=""> Weight : {{workout.weight}} lbs</ion-list>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-item>\n\n    <ion-item class="time_style">\n        <ion-item item-start class="lbl">Times (S) today</ion-item>\n        <div class="tday">\n            <ion-icon name="remove-circle" class="newIcon" (click)="changeCount(\'remove\')"></ion-icon>\n            <span class="newspn">{{workout.count}}</span>\n            <ion-icon name="add-circle" class="newIcon" (click)="changeCount(\'add\')"></ion-icon>\n        </div>\n\n\n    </ion-item>\n\n    <div padding>\n        <button class="btnteme" ion-button block (click)="updateWorkoutCount()">SAVE</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\ionic3\5x\5xfitness\src\pages\video\video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_app_user__["a" /* AppUser */], __WEBPACK_IMPORTED_MODULE_5__providers_app_base__["a" /* AppBase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_streaming_media__["a" /* StreamingMedia */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_player__["a" /* VideoPlayer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ })

},[426]);
//# sourceMappingURL=main.js.map