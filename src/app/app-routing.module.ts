import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { PokedexComponent } from 'src/app/components/pokedex/pokedex.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'pokedex',
  component: PokedexComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
