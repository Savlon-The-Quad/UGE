import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  ulist:Array<Users>=[];
  users=new Users('','');
  //constructor( private _service: RegistrationService, private _router: Router) { }
  constructor(private _router: Router){}
    
  ngOnInit(): void {
  }

  userParamNameList: any = ['Param1', 'Param2', 'Param3'];
  userParamTypeList: any = ['Type1', 'Type2', 'Type3'];

  form = new FormGroup({ gameCategory: new FormControl('', Validators.required)});

  addUsers(){
    let u=new Users('','');
    u.userParamName=this.users.userParamName;
    u.userParamType=this.users.userParamType;
    console.log(u);
    this.ulist.push(u);
    console.log(this.ulist);
  }

  submit(){
    this._router.navigate(['/loginsuccess']);
    let e=new Users('','');
    e.userParamName=this.users.userParamName;
    e.userParamType=this.users.userParamType;
    console.log(e);
    this.ulist.push(e);
    console.log(this.ulist);
    /*this._service.usersFromRemote(this.ulist).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/loginsuccess'])
    }
  }*/
}
}
