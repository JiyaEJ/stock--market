import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authenticate:boolean=true;
  constructor(private authentication: AuthenticationService,
    private router: Router,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.authenticate= this.authentication.checkSession();
  }

  authenticationAction(){
    if(this.authenticate!=true)
    {

    }
    else{
      this.authenticate = false;
      this.authentication.logout();
      this.toastr.success('','User Successfully Logged out');
      this.router.navigate(['']);
    }
  }
}
