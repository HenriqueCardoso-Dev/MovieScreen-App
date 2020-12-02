import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  fotoPerfil:"";
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route:ActivatedRoute
  ) {

    route.queryParams.subscribe(params => {
      if (params && params.special){
        //conversão de JSON para string
        let loginData = JSON.parse(params.special);
        this.fotoPerfil = loginData.fotoPerfil;
      }
    });

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
      {title:"Perfil", url:"/home", icon:"../assets/ion-icons/person-outline.svg"},
      {title:"Filmes", url:"/movies", icon:"../assets/ion-icons/film-outline.svg"},
      {title:"Séries", url:"/series", icon:"../assets/ion-icons/planet-outline.svg"},
      {title:"Animes", url:"/animes", icon:"../assets/ion-icons/nutrition-outline.svg"}
    ]
  }
}
