import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravisPageRoutingModule } from './travis-routing.module';

import { TravisPage } from './travis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravisPageRoutingModule
  ],
  declarations: [TravisPage]
})
export class TravisPageModule {}
