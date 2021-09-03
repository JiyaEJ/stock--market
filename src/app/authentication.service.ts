import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  userId!: string;
  private apiBaseUrl: string = "https://stock-market-api-php.herokuapp.com/";
  // private apiBaseUrl: string = "http://localhost/stockMarket/";
  constructor(private http: HttpClient) { }


  verifyUser(userData: any) {
    return this.http.post(this.apiBaseUrl + 'VerifyUser', JSON.stringify(userData));
  }

  setLocalStorage(data: any) {
    localStorage.setItem('sessionData', data.token);
    this.userId = data.userid;
  }

  getUserID(){
    return this.userId;
  }
  clearLogindata(){
    localStorage.removeItem('sessionData');
    this.userId = '';
  }
  logout(){
    this.clearLogindata();
  }
  checkSession(){
    if(localStorage.getItem('sessionData')!=null)
    {
      return true;
    }
    else{
      return false;
    }
  }
}
