import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-home',
  templateUrl: './beer-home.component.html',
  styleUrls: ['./beer-home.component.scss']
})
export class BeerHomeComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Buscar', icon: 'search', url: './search'}
  ];
}
