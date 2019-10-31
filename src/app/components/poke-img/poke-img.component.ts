import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-img',
  templateUrl: './poke-img.component.html',
  styleUrls: ['./poke-img.component.css']
})
export class PokeImgComponent implements OnInit {

  imgSrc = 'https://via.placeholder.com/250';
  constructor() { }

  ngOnInit() {
  }

}
