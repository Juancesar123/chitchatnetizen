import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[AuthenticationProvider]
})
export class RegisterPage {
  username:String;
  password:String;
  constructor(public authservice:AuthenticationProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  SendRegister(){
    let data = {
      email:this.username,
      password:this.password
    }
    this.authservice.Register(data).subscribe(val =>{
      this.navCtrl.pop();
    })
  }
}
