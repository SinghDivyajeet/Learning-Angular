import { Component } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    server = "Anton";
    serverStatus = "";

    constructor(){
        this.serverStatus = Math.random()>0.5?"Online":"Offline";
    }
}