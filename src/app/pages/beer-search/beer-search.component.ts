import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.services';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent {


  public searchInput = new FormControl('')

  public beers: Beer[] = [];
  public selectedBeer?: Beer

  constructor (private beersService: BeersService, private router: Router) {

  }

  searchBeer(): void {
    const value: string = this.searchInput.value || '';

    this.beersService.onSearchBeers(value).subscribe(
      beers => this.beers = beers
    )
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedBeer = undefined;
      return;
    }

    const beer: Beer = event.option.value;
    this.searchInput.setValue(beer.name);
    this.selectedBeer = beer;

    this.router.navigate(['/beers', beer.id])
  }
}
