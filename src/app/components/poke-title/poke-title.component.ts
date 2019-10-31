import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poke-title',
  templateUrl: './poke-title.component.html',
  styleUrls: ['./poke-title.component.css']
})
export class PokeTitleComponent implements OnInit, OnDestroy {

  pokeName = '';
  pokeSubscription: Subscription;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokeSubscription = this.pokedexService.$pokeData
      .subscribe(data =>
        this.pokeName = `#${data.id} ${data.name}`);
  }

  ngOnDestroy() {
    if (this.pokeSubscription) {
      this.pokeSubscription.unsubscribe();
    }
  }
}
