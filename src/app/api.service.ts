import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl: string = "http://localhost/stockMarket/";
  constructor(private http: HttpClient) { }

  getAllStockData()
  {
    return this.http.get(this.apiBaseUrl+"api/index_get");
  }

  getCurrentStockData(id:any)
  {

    return this.http.post(this.apiBaseUrl +'GetCurrent',JSON.stringify(id));

  }
}
