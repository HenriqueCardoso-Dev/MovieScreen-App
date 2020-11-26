import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HenriquePageRoutingModule } from './henrique-routing.module';

import { HenriquePage } from './henrique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HenriquePageRoutingModule
  ],
  declarations: [HenriquePage]
})
export class HenriquePageModule {}
