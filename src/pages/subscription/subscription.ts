import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { HomePage } from '../../pages/home/home';
import { AppBase } from '../../providers/app-base';

import { AppUser } from '../../providers/app-user'
/**
 * Generated class for the SubscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subscription',
  templateUrl: 'subscription.html',
})
export class SubscriptionPage {
  currentSubscription: any = []
  productCnsum: any;
  complaint: any = {};
  complaint_id: any;
  userData: any = {}
  constructor(public user: AppUser, public base: AppBase, public iap: InAppPurchase, public navCtrl: NavController, public navParams: NavParams) {
    this.userData = JSON.parse(this.base.fetchData('userdata'));

    console.log(this.navParams.get('complaint_id'), this.userData, '1234567890000000000000');

    if (this.navParams.get('complaint_id')) {
      this.complaint_id = this.navParams.get('complaint_id');
    } else {
      this.complaint_id = this.userData.complaint_id;
    }
    this.complaintDta()
    this.getReceipt();
  }
  complaintDta() {
    if (this.complaint_id) {
      this.user.CommnFn({ param: { complaint_id: this.complaint_id }, 'functionName': 'complaintUserCmpId' }).subscribe((data) => {
        this.complaint = data.details;
        console.log(this.complaint);
      }, (err) => {
        this.base.showSpinner(!1);
        this.base.showToast("Network error, Please check your connection ")
      })
    }

  }

  finalStep() {
    this.userData.complaint = this.complaint;
    this.userData.step_to_complete = 11;
    this.base.saveToLocal('userdata', JSON.stringify(this.userData));

    this.complaint.step_to_complete = 11;

    this.complaint.complaint_id = this.complaint_id
    this.user.CommnFn({ param: this.complaint, 'functionName': 'complaint_updates' }).subscribe((data) => {


      console.log(data);
      if (data.status) {
        this.navCtrl.setRoot(HomePage);
      } else {
        this.base.showToast(data.message);
      }

    }, (err) => {
      this.base.showSpinner(!1);
      this.base.showToast("Network error, Please check your connection ")
    })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscriptionPage');
  }
  subscribeNewProduct(prodctid) {
    if (!this.currentSubscription.length) {
      this.subscribeNewProductFinal(prodctid);
    } else {


      this.base.presentConfirm("Alert", "Please unsubscribe the currently running plan and urgade after the end date.Please check the disclaimer for further instructions.", [

        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {

          }
        }
      ])


    }

  }
  subscribeNewProductFinal(prodctid) {



    this.iap
      .getProducts(['5xfitness_monthlyplan', '5xfitness_yearlyplan', '5xfitness_lifetimeplan'])
      .then((products) => {
        console.log(products, 'first recd');

        if (prodctid == '5xfitness_lifetimeplan') {
          this.iap
            .buy(prodctid)
            .then((data) => {
              console.log(data, " 5xfitness_lifetimeplan  final recd");
              if (this.complaint.step_to_complete! = 11) {
                this.finalStep();
                this.updateInapp(prodctid)
              } else {
                this.navCtrl.setRoot(HomePage);
              }


            })
            .catch((err) => {
              console.log(err);
            });

        } else {
          this.iap
            .subscribe(prodctid)
            .then((data) => {
              this.updateInapp(prodctid);
              console.log(data, "other ------final recd");
              if (this.complaint.step_to_complete! = 11) {
                this.finalStep();
               
              } else {
                this.navCtrl.setRoot(HomePage);
              }


            })
            .catch((err) => {
              console.log(err);
            });
        }

      })
      .catch((err) => {
        console.log(err);
      });




  }
  updateInapp(prodctid) {
    this.user.CommnFn({
      param: {
        subscription_id: prodctid,
        device: 'android'

      }, 'functionName': 'saveSubscriptionDetails'
    }).subscribe((data) => {

    }, (err) => {
      this.base.showSpinner(!1);

    })
  }
  getReceipt() {

    this.iap
      .restorePurchases()
      .then((arrayPurchased) => {
        console.log(arrayPurchased);
        arrayPurchased.map((item) => {
          if (item.productId == '5xfitness_lifetimeplan') {
            this.productCnsum = item
          }
          this.currentSubscription.push(item.productId)
        })

        console.log(this.currentSubscription);
      })

  }
  consumProduct() {
    if (this.productCnsum.signature) {
      this.iap.consume(this.productCnsum.productType, this.productCnsum.receipt, this.productCnsum.signature)
        .then(() => console.log('product was successfully consumed!'))
        .catch(err => console.log(err))
    }

  }
  goBack() {
    this.navCtrl.pop();
  }

}
