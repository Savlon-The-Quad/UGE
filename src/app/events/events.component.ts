import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '../events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  elist:Array<Events>=[];
  events=new Events('','','');
  //constructor( private _service: RegistrationService, private _router: Router) { }
  constructor(private _router: Router){}
  ngOnInit(): void {
  }
  
  eventList: any = ['Event1', 'Event2', 'Event3'];
  eventTypeList: any = ['Type1', 'Type2', 'Type3'];

  form = new FormGroup({ gameCategory: new FormControl('', Validators.required)});

  addEvents(){
    let e=new Events('','','');
    e.eventName=this.events.eventName;
    e.eventType=this.events.eventType;
    e.eventDesc=this.events.eventDesc;
    console.log(e);
    this.elist.push(e);
    console.log(this.elist);
  }

  submit(){
    this._router.navigate(['/loginsuccess']);
    let e=new Events('','','');
    e.eventName=this.events.eventName;
    e.eventType=this.events.eventType;
    e.eventDesc=this.events.eventDesc;
    console.log(e);
    this.elist.push(e);
    console.log(this.elist);
    /*this._service.eventsFromRemote(this.elist).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/loginsuccess'])
    }
  }*/
}
}
