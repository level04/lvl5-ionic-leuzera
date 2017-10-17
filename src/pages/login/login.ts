import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any = [];
  @ViewChild('email') email: any;
  private logged: boolean;

  //constructor(public navCtrl: NavController) {}

  ionViewDidLoad(): void {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }

  login(): void {
    this.user = [
      {email: this.email}
    ]
    this.logged = true;
  }

  isLogged(): boolean {
    return this.logged;
  }
}
