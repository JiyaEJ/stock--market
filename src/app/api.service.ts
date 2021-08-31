import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllStockData()
  {
    return this.http.get("http://localhost/stockMarket/api/index_get");
  }


}
