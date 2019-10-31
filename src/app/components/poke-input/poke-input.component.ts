import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-poke-input',
  templateUrl: './poke-input.component.html',
  styleUrls: ['./poke-input.component.css']
})
export class PokeInputComponent implements OnInit {

  pokeInput = '';

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
  }

  search() {
    this.pokedexService.search(this.pokeInput);
  }
}
