import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { BeerHomeComponent } from './beer-home/beer-home.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerComponent } from './beer/beer.component';
import { ComponentsModule } from '../components/components.module';
import { BeerSearchComponent } from './beer-search/beer-search.component';



@NgModule({
  declarations: [
    BeerHomeComponent,
    BeerListComponent,
    BeerComponent,
    BeerSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
