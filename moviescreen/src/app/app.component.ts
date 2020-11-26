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
      {title : "Home",url : "/home",icon : "home"},
      {title : "Chat",url : "/chat",icon : "chatbubbles-outline"},
      {title : "Contatos",url : "/contatos", icon : "call-outline"},
      {title : "Sobre",url : "/sobre", icon : "information-circle-outline"}
    ]
  }
}
