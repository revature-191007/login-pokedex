import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { PokedexComponent } from 'src/app/components/pokedex/pokedex.component';
import { LoginHttpComponent } from 'src/app/components/login-with-http/login.component';

export const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  redirectTo: '/http-login',
  pathMatch: 'full'
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'pokedex',
  component: PokedexComponent
}, {
  path: 'http-login',
  component: LoginHttpComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
