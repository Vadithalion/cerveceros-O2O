import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Beer } from '../models/beer.interface';
import { enviroments } from 'src/enviroments/enviroments';


@Injectable({providedIn: 'root'})

export class BeersService {

  public baseUrl: string = enviroments.baseUrl;

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${ this.baseUrl }/beers`);
  }

  getBeerById(id: string): Observable<Beer[] | undefined> {
    return this.http.get<Beer[]>(`${ this.baseUrl }/beers/${id}`).pipe(catchError(error => of(undefined)))
  }

  onSearchBeers( params: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${ this.baseUrl }/beers?q=${params}`)
  }

}
