import { Component, OnInit } from '@angular/core';
import { all } from 'q';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName="";
  allowNewServer = false;
  serverCreationStatus = "Server was Created."
  counter = 0;
  serverStatus = "offline";
  allServers = [];
  stamps=[];
  showDetail = false;

  constructor() { 
    if(this.serverName!=""){
      this.allowNewServer=true;
    }
    
  }
  getServerStatus(){
    return Math.random()>0.5?"Online":"Offline";
  }
  ngOnInit() {
  }
  
  createNewServer(){
    this.counter++;
    this.allServers.push(this.serverName);
    this.serverName="";
  }
  saveClicks(){
    this.stamps.push(Date.now())
  }
}
