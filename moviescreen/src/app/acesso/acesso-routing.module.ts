import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessoPage } from './acesso.page';

const routes: Routes = [
  {
    path: '',
    component: AcessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessoPageRoutingModule {}
