import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // model: any = {
  //   username: '',
  //   password:''
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  firstModal(){
    this.navCtrl.setRoot(HomePage);
  }

  // loginForm(){
  //   console.log(this.model.username);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
