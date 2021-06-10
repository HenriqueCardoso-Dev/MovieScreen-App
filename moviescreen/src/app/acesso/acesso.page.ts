import { Component, OnInit } from '@angular/core';
import { ToastController, MenuController} from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { UserService } from '../services/api/user.service';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.page.html',
  styleUrls: ['./acesso.page.scss'],
})
export class AcessoPage implements OnInit {
  
  email_user="";
  pass_user="";
  
  constructor(
    public toastController:ToastController,
    private route:Router,
    public menu:MenuController,
    private userService:UserService
  ) {}
  
  ngOnInit() {}

  async MostrarMensagem(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  } 

  LogIn() {

    if (this.Verificar()) { 
      let userAcess = {
        email_user : this.email_user,
        pass_user : this.pass_user,
      }

      let navigationExtras : NavigationExtras = {
        queryParams: {
          special: JSON.stringify(userAcess)
        }
      }

      this.userService.login(userAcess).subscribe(response => {
        if(response['status']=='false'){
          this.MostrarMensagem(response['reason']);
        }else{
          this.route.navigate(['home'], navigationExtras);
        }
      })
    }
  }
  /*
  LogOut(){
    this.usuario = "";
    this.senha = "";
    this.MostrarMensagem("Deslogado");
  }*/

  cadastro(){
    this.route.navigate(['cadastro']);
  }

  Verificar(){
    if (this.email_user === "" && this.pass_user === "") {
      this.MostrarMensagem("Preencher o campo");      
      return false;
    } else if (this.email_user.length >= 1 && this.pass_user === "") {
      this.MostrarMensagem("Você está tentando entrar sem a senha, por favor insira e tente novamente");
      return false;
    }
    return true;
  }

  ionViewDidEnter(){
    this.menu.enable(false);
  }

  ionViewWillLeave(){
    this.menu.enable(true);
  }

}


