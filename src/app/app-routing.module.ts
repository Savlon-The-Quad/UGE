import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'loginsuccess', component: LoginsuccessComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'gamesdetails', component: GamesComponent },
  {path:'eventdetails', component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
