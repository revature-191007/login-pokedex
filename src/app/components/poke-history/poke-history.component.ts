import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-poke-history',
  templateUrl: './poke-history.component.html',
  styleUrls: ['./poke-history.component.css']
})
export class PokeHistoryComponent implements OnInit {

  pokeHistory: string[] = [];
  pokeSubscription: Subscription;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokeSubscription = this.pokedexService
      .$pokeData.subscribe(data =>
        this.pokeHistory.push(data.sprites.front_default));
  }

}
