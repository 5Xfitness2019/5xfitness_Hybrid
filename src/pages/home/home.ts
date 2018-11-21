import { Component, NgZone } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { CreateGoalPage } from '../../pages/create-goal/create-goal';
import { AlampagePage } from '../../pages/alampage/alampage';
import { MyGoalDetailsPage } from '../my-goal-details/my-goal-details';
import { VideoPage } from '../video/video'

import { AppBase } from '../../providers/app-base';
import { AppUser } from '../../providers/app-user';

declare var cordova;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rating: any = {};
  user_home = "";
  myGoals: any = [];
  myWorkOut: any = [];
  newRaingId: any;
  dateRang: any = {};
  userdetails: any = {};


  public lineChartData: Array<any> = [
    { data: [] },
    // label: 'Series A'
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(private zone: NgZone, public events: Events, public user: AppUser, public base: AppBase, public navCtrl: NavController) {

    this.userdetails = JSON.parse(localStorage.userdata);
    console.log(this.userdetails);
    events.unsubscribe('todayWorkOut');
    events.subscribe('todayWorkOut', (data) => {

      console.log(data.count, data.indx);
      this.myWorkOut[data.indx].count = data.count;
    });


    events.unsubscribe('workoutNew');
    events.subscribe('workoutNew', (data) => {
      this.getMyWorkOut();
    });

    this.events.unsubscribe('mygoal:edit');
    events.subscribe('mygoal:edit', (goal) => {
      goal = goal.goal;
      if (goal.goal_id) {
        this.myGoals.map((item, idx) => {
          if (item.goal_id == goal.goal_id) {
            this.myGoals[idx] = goal;
          }
        })
      } else {
        goal.goal_id = goal.id;
        this.myGoals.unshift(goal);
      }
    });

    this.user_home = "pain_chart";
    this.getUserHealthRating()
  }
  dateChange() {
    if (!this.dateRang.start_date || !this.dateRang.end_date) {
      return !1;
    }
    if (this.dateRang.start_date <= this.dateRang.end_date) {
      this.getUserHealthRating();

    } else {
      this.base.showToast("Start date must be before end date");
    }
    console.log(this.dateRang.start_date, this.dateRang.end_date);
  }

  getUserHealthRating() {

    this.user.CommnFn({ param: { start_date: this.dateRang.start_date, end_date: this.dateRang.end_date }, 'functionName': 'getUserHealthRating' })
      .subscribe(
        data => {

          if (data.details && data.details[0] && data.details[0].td_rating_id) {
            // td_rating_id,td_rating,td_feel_today
            this.rating.feel_today = data.details[0].td_feel_today;
            this.rating.rating = data.details[0].td_rating;
            this.newRaingId = data.details[0].td_rating_id;
          }

          this.lineChartData[0].data = data.details.map((item) => {
            return item.rating;
          })
          this.lineChartLabels = data.details.map((item) => {
            return item.date;
          })

          this.changeStyle();
          this.base.showToast(data.message);
          this.getMyGoals();
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  getMyGoals() {
    this.user.CommnFn({ param: {}, 'functionName': 'getMyGoals' })
      .subscribe(
        data => {
          this.myGoals = data.details;
          console.log(data.details);
          //this.base.showToast(data.message);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
    this.getMyWorkOut();
  }
  myWorkOutDetails(assigned_id, indx) {

    console.log(indx);
    this.navCtrl.push(VideoPage, { assigned_id: assigned_id, indx: indx });
  }

  deleteMyGoal(goal_id, inx) {
    this.base.presentConfirm("Delete My Goal", "Do you want to Delete this Record", [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("can")
        }
      },
      {
        text: 'Ok',
        handler: () => {
          this.confmDeleteMyGoal(goal_id, inx)
        }
      }
    ])
  }

  confmDeleteMyGoal(goal_id, inx) {
    this.user.CommnFn({ param: { goal_id: goal_id }, 'functionName': 'deleteMyGoal' })
      .subscribe(
        (data) => {
          this.myGoals.splice(inx, 1)
          this.removeAlam(goal_id);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }

  removeAlam(id) {
    cordova.plugins.notification.local.getAll((datas) => {
      var newArr = datas.map((item) => { if (item.data && JSON.parse(item.data).goal_id == id) { console.log(item.id); return item.id; } });
      cordova.plugins.notification.local.cancel(newArr, (dtas) => {
        console.log('remove', dtas);
      }, this)
    })
  }

  getMyWorkOut() {
    this.user.CommnFn({ param: {}, 'functionName': 'getMyWorkOut' })
      .subscribe(
        data => {
          this.myWorkOut = data.details;
          console.log(data.details);
          //this.base.showToast(data.message);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  }
  MyGoalDetailsPage(id) {
    this.navCtrl.push(MyGoalDetailsPage, { goal_id: id })
  }
  changeStyle() {
    this.lineChartColors = [
      { // grey
        backgroundColor: 'rgba(19,143,213,0.7)',
        borderColor: 'rgba(19,143,213,1)',
        pointBackgroundColor: 'rgba(19,143,213,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(19,143,213,1)'
      },
    ];

    this.randomize();
  }
  randomize(): void {
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
  }

  // events
  public chartClicked(e: any): void {
    console.log(e, "1");
  }

  public chartHovered(e: any): void {
    console.log(e, "2");
  }

  changeFeelToday(data) {
    this.rating.feel_today = data;
  }

  addTodaysRating() {
    this.user.CommnFn({ param: this.rating, 'functionName': 'addHealthRating' })
      .subscribe(
        data => {

          if (this.newRaingId) {
            this.zone.run(() => {
              this.lineChartData[0].data[this.lineChartData[0].data.length - 1] = this.rating.rating.toString()
              this.lineChartLabels[this.lineChartLabels.length - 1] = 'Today';
              this.changeStyle();
            });

          } else {
            this.zone.run(() => {
              this.lineChartData[0].data.push(this.rating.rating.toString());
              this.lineChartLabels.push('Today');
              this.newRaingId = "458749674956";
              this.changeStyle();
            });

          }

          console.log(this.lineChartData, this.lineChartLabels);



          console.log(data);
          this.base.showToast(data.message);
        }, (err) => {
          this.base.showSpinner(!1);
          this.base.showToast("Network error, Please check your connection ")
        })
  };


  creategoal(id = '') {
    this.navCtrl.push(CreateGoalPage, { goal_id: id, });
  }
  alampage(id, name) {
    console.log(id, name);
    this.navCtrl.push(AlampagePage, { goal_id: id, type: "myGoals", name: name });
  }
  alamPageMyGoals(id, name) {
    console.log(id, name);
    this.navCtrl.push(AlampagePage, { assigned_id: id, type: "myworkout", name: name });
  }


}
