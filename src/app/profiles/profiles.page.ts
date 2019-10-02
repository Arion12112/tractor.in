import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { User, AuthService } from '../auth-service.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})
export class ProfilesPage {

  saveSuccess = false;
  info: User;

  constructor( private router: Router,
    private auth: AuthService, private alertCtrl: AlertController, 
    private loading: LoadingController ) { 

      if( this.auth.checkLogged() ) {
        this.info = this.auth.getUserInfo(); 
      } else {
        console.log('not logged');
        this.router.navigateByUrl('/login');
      }
  }

  public save() {
    this.auth.register(this.info).subscribe(success => {
      if (success) {
        this.saveSuccess = true;
        this.showPopup("Success", "Thanks! Profile updated.");
      } else {
        this.showPopup("Error", "Problem updating profile.");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }

  async showPopup(title, text) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.saveSuccess) {
              // console.log('create successs');
              this.router.navigateByUrl('/home');
            }
          }
        }
      ]
    });

    return await alert.present();
  }

}