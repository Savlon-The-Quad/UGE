import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component: RegistrationComponent},
  {path:'loginsuccess', component:LoginsuccessComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'gamesdetails', component: GamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
