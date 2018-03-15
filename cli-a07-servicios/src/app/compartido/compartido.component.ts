import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-compartido',
  templateUrl: './compartido.component.html',
  styleUrls: ['./compartido.component.css'],

})
export class CompartidoComponent implements OnInit {
  logged:Observable<boolean>;
  login:boolean;
  constructor(private miServicio: MiServicioService) {
    this.logged=this.miServicio.getLogged();
      this.logged.subscribe(
        this.actualizaLogin.bind(this)
      );
  }
  actualizaLogin(datos){
      this.login=datos;
  }
  ngOnInit() {
  }

}
