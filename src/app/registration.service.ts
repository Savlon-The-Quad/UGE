import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  /*public loginCompanyFromRemote(login:Login):Observable<any>{
    return this._http.post<any>("http://localhost:8090/login", login);

  }*/

  /*public registration(registration:Registration):Observable<any>{
    return this._http.post<any>("http://localhost:8090/register", registration);

  }*/
}
