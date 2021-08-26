import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login('','');
  
  msg ='';
  //constructor( private _service : RegistrationService, private _router: Router) { }
  constructor(private _router: Router){
  }
  ngOnInit(): void {
  }

  loginCompany(){

    this._router.navigate(['/loginsuccess']);
    console.log(this.login);
    /*this._service.loginCompanyFromRemote(this.login).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/loginsuccess'])
    },
      error => {
        console.log("exception occured");
        this.msg="Bad Credentials, Enter valid Email ID ans password";
      }
    )*/
    
  }
  gotoregistration(){
    this._router.navigate(['/registration']);
  }
}

