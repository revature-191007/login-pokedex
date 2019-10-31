import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private httpClient: HttpClient) { }

  search(pokemon: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    this.httpClient.get(url).toPromise();
  }
}
