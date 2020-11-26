import { Component } from '@angular/core';
import { Contato } from 'src/modelos/contato';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  senha : "";
  username : "";  

  contatos : Contato[];
  constructor(private route:ActivatedRoute, private router:Router) {

    
    //dados dos contatos
    this.contatos = [
      {nome:"Henrique",telefone:"(11) 98265-2190", imagem:"assets/img/henrique.jpg"},
      {nome:"Travis Scott",telefone:"(1) (917) 765-2266 ", imagem:"assets/img/travisscott.jpg"}
    ];


    route.queryParams.subscribe(params => {
      if (params && params.special){
        //conversão de JSON para string
        let loginData = JSON.parse(params.special);
        this.senha = loginData.password;
        this.username = loginData.username;
      }
    });


  }

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
    
  }
}
