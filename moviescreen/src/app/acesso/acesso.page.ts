import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.page.html',
  styleUrls: ['./acesso.page.scss'],
})
export class AcessoPage implements OnInit {
usuario="";
senha="";
  constructor(public toastController:ToastController, private route:Router) { }
  
  ngOnInit() {}

  async MostrarMensagem(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  } 

  LogIn() {

    let userAcess = {
      username : this.usuario,
      password : this.senha
    }
    let navigationExtras : NavigationExtras = {
      queryParams: {
        special: JSON.stringify(userAcess)
      }
    }

    if (this.Verificar()) { 
      if (this.usuario === "henrique123" && this.senha === "12345") {

        this.MostrarMensagem("Usuário Logado");
        this.route.navigate(['home'], navigationExtras);
        
      } else  {
        this.MostrarMensagem("Usuário ou senha inválidos");   
      }
    }
  }

  LogOut(){
    this.usuario = "";
    this.senha = "";
    this.MostrarMensagem("Deslogado");
  }

  Verificar(){
    if (this.usuario === "" && this.senha === "") {
      this.MostrarMensagem("Preencher o campos");      
      return false;
    } else if (this.usuario.length < 10) {
      this.MostrarMensagem("O campo usuário normalmente necessita de pelo menos 10 caracteres");
      return false;
    } else if (this.usuario.length >= 10 && this.senha === "") {
      this.MostrarMensagem("Você está tentando entrar sem a senha, por favor insira e tente novamente");
      return false;
    }
    return true;
  }

}


