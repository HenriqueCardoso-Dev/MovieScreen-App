import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HenriquePage } from './henrique.page';

const routes: Routes = [
  {
    path: '',
    component: HenriquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HenriquePageRoutingModule {}
