import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  agentList: any[];

  constructor(public navCtrl: NavController, public postsService: ServiceProvider) {

  }

   ionViewDidLoad(){
    //this.postsService.load();

    this.getAgentList2();
  }

  getAgentList2(){
    this.agentList = this.postsService.getAgentList();
    console.log("agent List here",this.agentList)
  }

}
