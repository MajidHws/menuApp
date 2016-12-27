import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any = 0; 
  constructor(public navCtrl: NavController, public data: Data) {
    this.data.loadData().then(result =>{
      this.items = result;
    });
  }

}
