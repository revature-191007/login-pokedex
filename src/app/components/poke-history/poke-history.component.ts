import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-history',
  templateUrl: './poke-history.component.html',
  styleUrls: ['./poke-history.component.css']
})
export class PokeHistoryComponent implements OnInit {

  pokeHistory: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
