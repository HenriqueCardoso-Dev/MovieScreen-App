import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'acesso',
    pathMatch: 'full'
  },
  {
    path: 'acesso',
    loadChildren: () => import('./acesso/acesso.module').then( m => m.AcessoPageModule)
  },
  {
    path: 'henrique',
    loadChildren: () => import('./henrique/henrique.module').then( m => m.HenriquePageModule)
  },
  {
    path: 'travis',
    loadChildren: () => import('./travis/travis.module').then( m => m.TravisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
