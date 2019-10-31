import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginService } from 'src/app/services/login.service';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeInputComponent } from './components/poke-input/poke-input.component';
import { PokeImgComponent } from './components/poke-img/poke-img.component';
import { PokeTitleComponent } from './components/poke-title/poke-title.component';
import { PokeHistoryComponent } from './components/poke-history/poke-history.component';
import { PokedexService } from 'src/app/services/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PokedexComponent,
    PokeInputComponent,
    PokeImgComponent,
    PokeTitleComponent,
    PokeHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
