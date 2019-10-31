import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-title',
  templateUrl: './poke-title.component.html',
  styleUrls: ['./poke-title.component.css']
})
export class PokeTitleComponent implements OnInit {

  pokeName = '';

  constructor() { }

  ngOnInit() {
  }

}
