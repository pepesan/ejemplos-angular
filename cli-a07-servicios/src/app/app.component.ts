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
  promesaDatos:any;
  libros:any;
  datos:any;
  logged:Observable<boolean>;
  login:boolean;
  constructor(private miServicio: MiServicioService, public datosService: DatosService){
    this.datos=this.datosService.getDatos();
    console.log(this.datos);
    this.promesaDatos=this.miServicio.getData();
    console.log(this.promesaDatos);
      this.login=false;
    this.logged=this.miServicio.getLogged();
      this.logged.subscribe(
        this.actualizaLogin.bind(this)
      );
  }
  actualizaLogin(datos){
      this.login=datos;
  }
  ngOnInit(){
    this.promesaDatos.subscribe(this.muestraLibros.bind(this));
  }
  muestraLibros(datos){
    //console.log(datos);
    this.libros=datos;
  }
  loguear(){
        //console.log("logueando");
        this.miServicio.setLogged(true);
        //this.logged=this.miServicio.getLogged();
  }
  desloguear(){
      //console.log("deslogueando");
        this.miServicio.setLogged(false);
        //this.logged=this.miServicio.getLogged();
  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }
}
