import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimesPageRoutingModule } from './animes-routing.module';

import { AnimesPage } from './animes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimesPageRoutingModule
  ],
  declarations: [AnimesPage]
})
export class AnimesPageModule {}
