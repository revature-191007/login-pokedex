import { TestBed, getTestBed, async, tick, fakeAsync } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from '../../app/app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { PokedexComponent } from 'src/app/components/pokedex/pokedex.component';
import { LoginHttpComponent } from 'src/app/components/login-with-http/login.component';
import { PokeTitleComponent } from 'src/app/components/poke-title/poke-title.component';
import { PokeImgComponent } from 'src/app/components/poke-img/poke-img.component';
import { PokeHistoryComponent } from 'src/app/components/poke-history/poke-history.component';
import { PokeInputComponent } from 'src/app/components/poke-input/poke-input.component';

describe('LoginService', () => {
  let mockRouter: Router;
  let loginService: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule
      ],
      declarations: [
        LoginComponent,
        ProfileComponent,
        PokedexComponent,
        LoginHttpComponent,
        PokeTitleComponent,
        PokeImgComponent,
        PokeHistoryComponent,
        PokeInputComponent
      ]
    });
    mockRouter = TestBed.get(Router);
    loginService = TestBed.get(LoginService);
});



  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should navigate when valid credenitals input', fakeAsync(() => {
      const navigateSpy = spyOn(mockRouter, 'navigateByUrl');

      loginService.login(
        { email: 'abby@aol.com', password: 'abs' },
      );

      tick();

      expect(navigateSpy).toHaveBeenCalledWith('/profile');
    }));
  });

});
