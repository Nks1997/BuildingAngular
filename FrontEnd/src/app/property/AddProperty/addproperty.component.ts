import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  @ViewChild('Form') addFormProperty:any;
  addpropertyform:FormGroup;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.addpropertyform= new FormGroup(
      {
        Type:new FormControl(null,Validators.required),
        Price:new FormControl(0,[Validators.required,Validators.min(1000)])
      }
    );

  }
  onBack()
  {
    this.route.navigate(['/']);
  }

  onSubmit(Form:NgForm)
  {
    console.log("congrats Form submitted successfully");
    console.log(this.addFormProperty);
  }

  get type()
  {
    return this.addpropertyform.get('Type') as FormControl
  }

  get price()
  {
    return this.addpropertyform.get('Price') as FormControl
  }

}
