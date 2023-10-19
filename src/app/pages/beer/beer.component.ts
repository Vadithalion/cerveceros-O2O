import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Beer } from 'src/app/models/beer.interface';
import { BeersService } from 'src/app/services/beers.services';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent {

  public beer?: Beer

  constructor (private beersSevice: BeersService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
      this.activatedRoute.params.pipe(
        switchMap( ({id}) => this.beersSevice.getBeerById(id))
      ).subscribe(
        beer => {
          if (!beer) return this.router.navigate(['/beers/list'])

          this.beer = beer.slice(0,1)[0];
          return;
        }
      )
  }

  public goBack(): void {
    this.router.navigateByUrl('beers/list');
  }
}
