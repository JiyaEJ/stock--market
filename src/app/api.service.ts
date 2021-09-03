import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiBaseUrl: string = "https://stock-market-api-php.herokuapp.com/";
  private apiBaseUrl: string = "http://localhost/stockMarket/";
  token:string|any;
  httpOptions: any = {
    "token": this.getSessionToken()

  };
  constructor(private http: HttpClient, private autenticate: AuthenticationService) { }

  getAllStockData() {

    return this.http.post(this.apiBaseUrl + "GetName/index_get", JSON.stringify(this.httpOptions));
  }

  getCurrentStockData(id: any) {
    id['token'] = this.getSessionToken();
    return this.http.post(this.apiBaseUrl + 'GetCurrent', JSON.stringify(id));

  }

  getSessionToken() {
    this.token= localStorage.getItem('sessionData');
    if(this.token!=null){
      return this.token;
    }
    else{
      return "invalid";
    }
  }




}
