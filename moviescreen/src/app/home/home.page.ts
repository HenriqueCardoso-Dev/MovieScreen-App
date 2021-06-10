import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = {
    user_nick: "",
    user_email: "",
    user_foto: ""
  }

  mediaVideos : any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public mensagem:ToastController
  ) {

    
    //dados dos filmes
    this.mediaVideos = [
      {nome:"Coringa", genero:"Ação, Ficção Científica, Terror", ano:"2020", capa:"../../assets/img/capas/movies/coringa.jpeg", pAssistido:"18"},
      {nome:"Peaky Blinders", genero:"Drama, Histórico, Policial", ano:"2013", capa:"../../assets/img/capas/series/peaky_blinders.jpeg", pAssistido:"45"},
      {nome:"One Piece", genero:"Ficção de aventura, Fantasia", ano:"1997", capa:"../../assets/img/capas/animes/onepiece.jpeg",  pAssistido:"2"}
    ];


    route.queryParams.subscribe(params => {
      if (params && params.special){
        //conversão de JSON para string
        let loginData = JSON.parse(params.special);
        this.user.user_nick = loginData.user_nick;
        this.user.user_email = loginData.user_email;        
        this.user.user_foto = loginData.user_foto;
      }
    });


  }


  async MostrarMensagem(msg) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }



  

  LogOut(){

    this.MostrarMensagem("Deslogado");
    this.router.navigate(['acesso'])
  }

  /*
  selecionarContato(contato : Contato)  {
    
    //criação de objeto
    let contact = {
      contactName : contato.nome,
      contactNumber : contato.telefone,
      contactImage : contato.imagem
    }

    //Transformando o objeto em documento JSON para transportar os dados
    let navigationsExtras : NavigationExtras = {
      queryParams: {
        special: JSON.stringify(contact)
      }
    }

    if (contato.nome == 'Henrique') {

      this.router.navigate(['henrique'], navigationsExtras);

    } else if (contato.nome == 'Travis Scott') {

      this.router.navigate(['travis'], navigationsExtras);

    }
    
  }*/
}
