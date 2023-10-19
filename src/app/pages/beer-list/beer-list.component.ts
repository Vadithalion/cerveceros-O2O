import { Component } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.services';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {

  public beers: Beer[] = [];

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
      this.beersService.getBeers().subscribe(
        beers => this.beers = beers
      );
  }
}
