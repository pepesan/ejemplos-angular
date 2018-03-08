import { Component, OnInit } from '@angular/core';
import {Usuario} from "./usuario"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usuario:Usuario;
  tipos_usuario=['Admin', 'Invitado',
    'Normal'];
  submitted = false;

  constructor() {
    this.usuario=new Usuario(12,"Pepe","Admin","p@p.com","912345678");
  }
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.usuario);
  }

}
