import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  agentList = [{ agentId: 1, name: "Jo Repair&Service", address: "Shaftsbury Square", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 2.923701, logitude: 101.661746, distance: 20, image: "assets/img/shop1.jpg", phoneNumber: "019-9089123", rating: "4.5" },
  { agentId: 2, name: "Shah Repair&Service", address: "DPULZE Shopping Centre", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 2.922514, logitude: 101.651020, distance: 40, image: "assets/img/shop.jpg", phoneNumber: "014-5089123", rating: "4.5" },
  { agentId: 3, name: "Abdul Repair&Service", address: "The Street Mall 2", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 2.921024, logitude: 101.651167, distance: 15, image: "assets/img/shop.jpg", phoneNumber: "014-5089123", rating: "4.5" },
  { agentId: 4, name: "Sidek Repair&Service", address: "HP Tower", poscode: 61300, city: "Cyberjaya", state: "Selangor", latitude: 3.151116, logitude: 101.664059, distance: 10, image: "assets/img/shop3.jpg", phoneNumber: "014-5089123", rating: "4.5" },];
 
  constructor() {
    
  }

  ionViewDidLoad(){
   
  }

  getAgentList(){
    return this.agentList;
  }

}
