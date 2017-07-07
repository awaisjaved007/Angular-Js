import {Component, OnInit} from '@angular/core';


@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false
  serverInfo: string = 'No server available'
  serverName: string = 'Hello'
  userName:string=''
  servers = ['server1','server2']
  password = ''
  showSecret = false
  flag = false
  log=[]
 // isUserNameEmpty : string = ''
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.flag =true;
    this.servers.push(this.serverName);
    this.serverInfo = 'Server is available '+this.serverName;

  }

  onUpdateServerName(event: Event) {
    console.log(event);

    this.serverName=(<HTMLInputElement>event.target).value
  }

  makeUesrEmpty()
  {
    this.userName = '';
  }
  isUserNameEmpty()
  {
    return this.userName == '' ? true:false;
  }
  showDetails()
  {
    this.log.push(this.log.length+1)
    this.showSecret = !this.showSecret;
    this.password = 'Secret password - tuna';
  }
}
