import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
class Libro {
  titulo: string;
  autor: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dtOptions: DataTables.Settings = {};
  libros:any;
  usuarios:any;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();
  constructor(private http: HttpClient){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('http://www.mocky.io/v2/5a54ae822d00005f235b1cd2')
      .subscribe(libros => {
        this.libros = libros;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });

    this.dtOptions = {
      ajax: '',
      columns: [{
        title: 'Título',
        data: 'titulo'
      }, {
        title: 'Autor',
        data: 'autor'
      },]
    };
  }
}
