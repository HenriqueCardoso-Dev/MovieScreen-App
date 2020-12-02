import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navegacao : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navegacao =
    [
      {title:"Perfil", url:"/home", icon:"../assets/ion-icons/happy-outline.svg"},
      {title:"Filmes", url:"/movies", icon:"../assets/ion-icons/film-outline.svg"},
      {title:"Séries", url:"/series", icon:"../assets/ion-icons/planet-outline.svg"},
      {title:"Animes", url:"/animes", icon:"../assets/ion-icons/nutrition-outline.svg"}
    ]
  }
}
