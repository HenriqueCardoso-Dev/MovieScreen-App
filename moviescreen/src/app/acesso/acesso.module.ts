import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessoPageRoutingModule } from './acesso-routing.module';

import { AcessoPage } from './acesso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessoPageRoutingModule
  ],
  declarations: [AcessoPage]
})
export class AcessoPageModule {}
