//importações necessárias;
import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController} from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../services/api/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit {

  constructor(
    public menu:MenuController,
    public msgReturn:ToastController,
    private navegacao:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
  }

  async retornarMensagem(msg) {
    const toast = await this.msgReturn.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  userRegister(form:NgForm){
    const user = form.value;

    this.userService.newUser(user).subscribe(response => {
      if (response['status'] == 'false') {
        this.retornarMensagem(response['reason']);
      }else {
        this.retornarMensagem(response['reason']);

        this.navegacao.navigate(['acesso']);
        
      }
    })
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
