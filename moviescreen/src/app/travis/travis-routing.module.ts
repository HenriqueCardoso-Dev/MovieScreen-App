import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravisPage } from './travis.page';

const routes: Routes = [
  {
    path: '',
    component: TravisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravisPageRoutingModule {}
