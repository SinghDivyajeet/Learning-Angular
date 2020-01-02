import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverName = "NO";
  logIt(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
