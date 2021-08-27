import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Registration } from './registration';
import { Games } from './games';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  /*public loginCompanyFromRemote(login:Login):Observable<any>{
    return this._http.post<any>("http://localhost:8090/login", login);

  }*/

  /*public registrationFromRemote(registration:Registration):Observable<any>{
    return this._http.post<any>("http://localhost:8090/register", registration);

  }*/

   /*public gamesFromRemote(games:Games):Observable<any>{
    return this._http.post<any>("http://localhost:8090/gamesdetails", games);

  }*/
   /*public eventsFromRemote(events:Events):Observable<any>{
    return this._http.post<any>("http://localhost:8090/eventsdetails", events);

  }*/
    /*public usersFromRemote(users:Users):Observable<any>{
    return this._http.post<any>("http://localhost:8090/eventsdetails", users);

  }*/
}
