import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:any;
  constructor(private http: HttpClient){
    var url="http://www.mocky.io/v2/5a54ae822d00005f235b1cd2";
    this.http.get(url).subscribe(data => this.data = data);
  }
}
