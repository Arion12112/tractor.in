import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { delay } from 'q';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private splashScreen: SplashScreen) {
    this.splashScreen.show();
    delay(5000);
    this.splashScreen.hide();
   }

  ngOnInit() {
  }
  

}
