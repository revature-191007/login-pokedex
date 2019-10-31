import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
