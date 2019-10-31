import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTitleComponent } from './poke-title.component';

describe('PokeTitleComponent', () => {
  let component: PokeTitleComponent;
  let fixture: ComponentFixture<PokeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
