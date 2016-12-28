import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SportPage } from '../sport/sport';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage{
    homeTab: any = HomePage;
    sportTab: any = SportPage;
    constructor(){

    }
}