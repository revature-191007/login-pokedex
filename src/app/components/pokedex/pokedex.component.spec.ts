import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexComponent } from './pokedex.component';
import { PokeTitleComponent } from 'src/app/components/poke-title/poke-title.component';
import { PokeHistoryComponent } from 'src/app/components/poke-history/poke-history.component';
import { PokeImgComponent } from 'src/app/components/poke-img/poke-img.component';
import { PokeInputComponent } from 'src/app/components/poke-input/poke-input.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexComponent,
      PokeTitleComponent, 
      PokeHistoryComponent, 
      PokeImgComponent, 
      PokeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
