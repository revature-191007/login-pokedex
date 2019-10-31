import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeHistoryComponent } from './poke-history.component';

describe('PokeHistoryComponent', () => {
  let component: PokeHistoryComponent;
  let fixture: ComponentFixture<PokeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
