import { Component } from '@angular/core';
import { Data } from '../../providers/data';


@Component({
    selector: '',
    templateUrl: 'sport.html'
})

export class SportPage{
    sports:any;
    counter:number = 1;
    constructor(public data: Data){
        this.data.loadsport().then(result => {
            this.sports = result;
        });
    }
    
}