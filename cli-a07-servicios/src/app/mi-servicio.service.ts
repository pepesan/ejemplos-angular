import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
@Injectable()
export class MiServicioService {

  data:any;
  url:string;

  constructor(private http:HttpClient) {
    this.url="http://www.mocky.io/v2/5a54ae822d00005f235b1cd2";
    this.data=this.http.get(this.url);
  }
  getData(): Observable<any>{
    return this.data;
  }

}
