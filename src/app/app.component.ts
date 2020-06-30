import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFinalIonic';

  constructor(private _platform: Platform, private _toastCtrl: ToastController){

    this._platform.ready().then(
      platform => this.displayToastInstall()
    )
    this.displayToastInstall();

  }

  displayToastInstall(platform = null) {
    // Detects if device is on iOS 
    //console.log('window.navigator.userAgent.toLowerCase()', window.navigator.userAgent.toLowerCase());

    const isIos = () => {
      const userAgent = platform || window.navigator.userAgent.toLowerCase();
      console.log('userAgent', userAgent);
      return /iphone|ipad|ipod/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    console.log('isInStandaloneMode()', !isInStandaloneMode())
    console.log('isIos()', isIos())
    if (isIos() && !isInStandaloneMode()) {
      console.log('isInStandalone or isIos');
      this.presentToast()
    }
  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'You can install this PWA.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this._toastCtrl.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
