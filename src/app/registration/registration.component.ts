import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registration = new Registration('','','',0,'','');
  //constructor( private _service: RegistrationService, private _router: Router) { }
  constructor(private _router: Router){}
  ngOnInit(): void {
  
  }
  gotogames(){
    this._router.navigate(['/gamesdetails']);
    console.log(this.registration);
    /*this._service.registrationFromRemote(this.registration).subscribe(
      data => {
        console.log("Registered succesfully");
        this._router.navigate(['/gamesdetails']);
    }
    )*/
  }

}
