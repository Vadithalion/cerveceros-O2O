import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'beers',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
