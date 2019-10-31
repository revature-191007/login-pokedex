import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poke-img',
  templateUrl: './poke-img.component.html',
  styleUrls: ['./poke-img.component.css']
})
export class PokeImgComponent implements OnInit, OnDestroy {

  imgSrc = 'https://via.placeholder.com/250';
  pokeSubscription: Subscription;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokeSubscription = this.pokedexService.$pokeData
      .subscribe((data) => {
        this.imgSrc = data.sprites.front_default;
    });
  }

  ngOnDestroy() {
    // ensure that subscription is removed when component is
    // destroyed
    if (this.pokeSubscription) {
      this.pokeSubscription.unsubscribe();
    }
  }

}
