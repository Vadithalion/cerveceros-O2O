import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerHomeComponent } from './beer-home/beer-home.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerComponent } from './beer/beer.component';
import { BeerSearchComponent } from './beer-search/beer-search.component';


const routes: Routes = [
  {
    path: '',
    component: BeerHomeComponent,
    children: [
      { path: 'list', component: BeerListComponent },
      { path: 'search', component: BeerSearchComponent },
      { path: ':id', component: BeerComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
