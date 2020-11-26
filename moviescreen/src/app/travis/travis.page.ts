import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-travis',
  templateUrl: './travis.page.html',
  styleUrls: ['./travis.page.scss'],
})
export class TravisPage implements OnInit {

  contactName : "";
  contactNumber : "";
  contactImage : "";

  constructor(private route:ActivatedRoute) { 

    route.queryParams.subscribe(params => {
      if (params && params.special) {
        //conversão de JSON para String
        let contactData = JSON.parse(params.special);

        //Tirando os valores transportados da variável de recebimento e armazenando em variáveis separadas
        this.contactName = contactData.contactName;
        this.contactNumber = contactData.contactNumber;
        this.contactImage = contactData.contactImage;
      }
    });

  }

  ngOnInit() {
  }

}
