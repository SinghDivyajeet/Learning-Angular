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
  constructor() { 
    if(this.serverName!=""){
      this.allowNewServer=true;
    }
    
  }
  getServerStatus(){
    return this.serverStatus = Math.random()>0.5?"Online":"Offline";
  }
  ngOnInit() {
  }
  
  
  makeNewServer(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    if(this.serverName){
      this.allowNewServer = true;
    }
    else{
      this.allowNewServer = false;
    }
  }
  CreateNewServer(){
    this.counter++;
    alert(`${this.serverName} Created!!`)
    this.serverName="";
    this.allowNewServer = false;
  }
}
