import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(public http: Http) {
    console.log("test")
  }

  test(){
    console.log('Oooops');
  }
}
