import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  food:any = 0; 
  constructor(public navCtrl: NavController, public data: Data) {
    this.data.loadFood().then(result =>{
      this.food = result;
    });
  }

}
