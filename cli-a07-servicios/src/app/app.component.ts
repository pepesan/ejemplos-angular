import {Component, OnDestroy, OnInit} from '@angular/core';
import { MiServicioService } from './mi-servicio.service';
import {DatosService} from "./datos.service";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [MiServicioService,DatosService]
})
export class AppComponent implements OnInit, OnDestroy{


  title = 'app';
  data:any;
  libros:any;
  datos:any;
  constructor(private miServicio: MiServicioService, public datosService: DatosService){
    this.datos=this.datosService.getDatos();
    console.log(this.datos);
    this.data=this.miServicio.getData();
    console.log(this.data);
  }
  ngOnInit(){
    this.data.subscribe(this.muestraLibros.bind(this));
  }
  muestraLibros(datos){
    console.log(datos);
    this.libros=datos;
  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }
}
