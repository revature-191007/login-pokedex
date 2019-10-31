import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHttpComponent as LoginHttpComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginHttpComponent;
  let fixture: ComponentFixture<LoginHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
