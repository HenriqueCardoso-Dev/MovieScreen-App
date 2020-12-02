import { Component, OnInit } from '@angular/core';
import { ToastController, MenuController} from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.page.html',
  styleUrls: ['./acesso.page.scss'],
})
export class AcessoPage implements OnInit {
  
  usuario="";
  senha="";
  fotoPerfil="";
  
  constructor(public toastController:ToastController, private route:Router, public menu:MenuController) {}
  
  ngOnInit() {}

  async MostrarMensagem(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  } 

  LogIn() {

    //atribuindo a imagem de perfil de acordo com o nome do usuário;
    if (this.usuario === "henrique123") {
      this.fotoPerfil = "../../assets/img/perfilPhotos/henrique.jpg";
    }

    let userAcess = {
      username : this.usuario,
      password : this.senha,
      fotoPerfil : this.fotoPerfil
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

        
      } else if (this.usuario === "cachorroChupado" && this.senha === "doguinSinistro") {
      
        this.MostrarMensagem("Usuário Logado");
        this.route.navigate(['home'], navigationExtras);
      
      } else if (this.usuario === "DuduDaZl123" && this.senha === "edu8327") {
      
        this.MostrarMensagem("Usuário Logado");
        this.route.navigate(['home'], navigationExtras);
      
      } else {
        this.MostrarMensagem("Usuário ou senha inválidos");   
      }
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
    if (this.usuario === "" && this.senha === "") {
      this.MostrarMensagem("Preencher o campos");      
      return false;
    } else if (this.usuario.length < 1) {
      this.MostrarMensagem("O campo usuário normalmente necessita de pelo menos 1 caracter");
      return false;
    } else if (this.usuario.length >= 1 && this.senha === "") {
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


