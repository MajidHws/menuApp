import { Component } from '@angular/core';
import { Data } from '../../providers/data';
@Component({
    selector:'sport-page',
    templateUrl: 'sport.html'
})

export class SportPage{
    items:any=0;
    constructor(public data: Data){
        this.data.loadData().then(result => {
            this.data = result;
        });
    }
    
}