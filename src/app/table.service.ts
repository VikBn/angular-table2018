import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTable } from './models/data.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private serviceUrl = "https://api.myjson.com/bins/13ubwu";

  constructor(private _http: HttpClient) { }

  getData():Observable<DataTable[]> {
    return this._http.get<DataTable[]>(this.serviceUrl).map((response:any) => {
      return response.colorsArray;
    });
  }
}

