import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Services } from '../services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services= new Services('');
  //constructor() { }

  ngOnInit(): void {
  }

  form: FormGroup;
  serviceList: any = [
    { id: 1, name: 'ItSolutionStuff.com' },
    { id: 2, name: 'HDTuto.com' },
    { id: 3, name: 'NiceSnippets.com' }
  ];
  //serviceList: any = ['ItSolutionStuff.com','HDTuto.com','NiceSnippets.com'];
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      service: this.formBuilder.array([], [Validators.required])
    })  
  }
 

  onCheckboxChange(e:any) {
    const service: FormArray = this.form.get('service') as FormArray;
  
    if (e.target.checked) {
      service.push(new FormControl(e.target.value));
    } else {
       const index = service.controls.findIndex(x => x.value === e.target.value);
       service.removeAt(index);
    }
  }
    
  submit(){
    console.log(this.services);
  }
    
}

