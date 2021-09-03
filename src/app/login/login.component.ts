import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router,
    private toastr: ToastrService) {

    this.loginForm = this.fb.group({
      "username": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
    });

  }

  get f() { return this.loginForm.controls; }

  ngOnInit(): void {
    this.authentication.logout();
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      const postData = {
        'username': this.loginForm.value.username,
        'password': this.loginForm.value.password,

      }
      this.authentication.verifyUser(postData).subscribe((res: any) => {


        // alert("success");
        this.authentication.setLocalStorage(res.data);
        this.toastr.success('', 'Welcome');
        this.router.navigate(['/dashboard']);


      }, error => {
        this.toastr.error('','Invalid Credentials');
        this.loginForm.reset();
      });

    } else {
      this.toastr.error('', 'Invalid Credentials');
    }
  }

}
