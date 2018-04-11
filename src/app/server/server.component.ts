/* 
 * Server component file
 * 
 */
 import { Component } from '@angular/core';
 
 @Component({
     selector : 'app-server',
     templateUrl : './server.component.html'
 })
 
 export class ServerComponent {
     serverId = 10;
     serverStatus = "offline";
     showCondition = false;
     
     serverCreationStatus = "Server is not Created";
     serverName = "DemoServer";
     servers = ['TestServer', 'ServerTwo'];
     
     constructor(){
         this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
     }
     
     getServerStatus() {
         return this.serverStatus;
     }
     
     getServerName(){
         return this.serverName;
     }
     
     getColor() {
         return this.serverStatus === 'online' ? 'green': 'red';
     }
     
     updateServer() {
         this.showCondition = true;
         this.serverCreationStatus = "Server is created";
         this.servers.push(this.serverName);
     }
 }


