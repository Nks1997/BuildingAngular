import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      username: new FormControl("mark",Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmpassword: new FormControl(null,[Validators.required,Validators.minLength(8)]),
      mobile: new FormControl(null,[Validators.maxLength(10)]),

    },this.passwordmatching);
  }

  passwordmatching(fg: AbstractControl): Validators{
    return fg.get("password").value===fg.get("confirmpassword").value ? null :
    {notmatching:true}

  }

  onSubmit()
  {
    console.log(this.registrationForm);

  }

  get userName()
  {
    return this.registrationForm.get('username') as FormControl
  }
  get password()
  {
    return this.registrationForm.get('password') as FormControl
  }
  get confirmpassword()
  {
    return this.registrationForm.get('confirmpassword') as FormControl
  }
  get email()
  {
    return this.registrationForm.get('email') as FormControl
  }

  get mobile()
  {
    return this.registrationForm.get('mobile') as FormControl
  }



}
