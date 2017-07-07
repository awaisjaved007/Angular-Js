import {Component} from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {

  status = "";
  serverId: number = 0;

  constructor() {
    this.status = Math.random() >= 0.5 ? "online" : "offline"
  }

  getColor() {
    return this.status === "offline" ? "red" : "green"
  }


}
