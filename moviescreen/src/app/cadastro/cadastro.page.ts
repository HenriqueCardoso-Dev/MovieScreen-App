//importações necessárias;
import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController} from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  constructor(public menu:MenuController, public msgReturn:ToastController, private navegacao:Router) { }

  ngOnInit() {
  }

  async retornarMensagem(msg) {
    const toast = await this.msgReturn.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  userRegister(){
    this.navegacao.navigate(['acesso']);
    this.retornarMensagem("Entre com a conta nova!");
  }
  

  //manter o menu bloqueado nesta tela
  ionViewDidEnter(){
    this.menu.enable(false);
  }

  //desbloquear o menu quando sair
  ionViewWillLeave(){
    this.menu.enable(true);
  }

}
