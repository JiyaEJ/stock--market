import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm:FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    });
   }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    });
  }
  onSubmitLogin(){}

}
