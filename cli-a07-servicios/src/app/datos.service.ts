import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  datos:any;

  constructor() {
    this.datos=[
      {
        nombre:"Pepe",
        edad:21
      },
      {
        nombre:"Juan",
        edad:34
      }
    ];
    console.log(this.datos);
  }
  getDatos(){
    return this.datos;
  }

}
