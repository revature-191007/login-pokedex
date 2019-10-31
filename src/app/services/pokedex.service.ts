import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { PokeData } from 'src/app/components/models/PokeData';



@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  // If I expose the subject directly then consumers can push
  // new data to it. I don't want this, because the service should
  // be responsible for the data piped into the subject. So I will
  // make this subject private. I will expose an Observable that
  // pipes new values from the subject that components can then
  // subscribe to. The $ syntax is frequently used in Angular to
  // designate that a property is a some kind of data producer that
  // can be subscribed to.

  private pokeSubject: Subject<PokeData> = new Subject();
  public $pokeData: Observable<PokeData>
        = this.pokeSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  search(pokemon: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    this.httpClient.get(url)
      .subscribe((data: PokeData) => this.pokeSubject.next(data));
  }
}
