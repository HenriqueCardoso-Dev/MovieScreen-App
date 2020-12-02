import { Component, OnInit } from '@angular/core';
import { Serie } from "src/modelos/serie";

@Component({
  selector: 'app-animes',
  templateUrl: './animes.page.html',
  styleUrls: ['./animes.page.scss'],
})
export class AnimesPage implements OnInit {

  animes : Serie[];

  constructor() { 

    this.animes = [
      {nome:"", genero:"", ano:"", capa:"", temporadas:"", sinopse:""}
    ]

  }

  ngOnInit() {
  }

}
