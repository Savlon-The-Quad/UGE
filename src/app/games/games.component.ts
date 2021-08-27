import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Games } from '../games';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games=new Games('','','','');
  //constructor( private _service: RegistrationService, private _router: Router) { }
  constructor(private _router: Router){}
  ngOnInit(): void {
  }

  categoryList: any = ['Category1', 'Category2', 'Category3'];
  subCategoryList: any = ['SubCategory1', 'SubCategory2', 'SubCategory3'];
  
  form = new FormGroup({
    gameCategory: new FormControl('', Validators.required)
  });
  
  /*get f(){
    return this.form.controls;
  }*/
  
  gotoevents(){
    this._router.navigate(['/eventdetails']);
    console.log(this.games);
    /*this._service.gamesFromRemote(this.games).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/eventdetails']);
    }*/
  }

}
