import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.interface';

@Component({
  selector: 'beer-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() beer!: Beer;

  ngOnInit(): void {
      if (!this.beer) throw Error('Beer property is required')
  }

}
