import { Component, OnInit } from '@angular/core';
import { Serie } from "src/modelos/serie";

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  seriados: Serie[];

  constructor() {

    //adicionando Seriados:
    this.seriados = [
      {nome:"", genero:"", ano:"", capa:"", temporadas:"", sinopse:""}
    ]

   }

  ngOnInit() {
  }

}
