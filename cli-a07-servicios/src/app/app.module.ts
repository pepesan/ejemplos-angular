import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatosService } from './datos.service';

import { AppComponent } from './app.component';
import { CompartidoComponent } from './compartido/compartido.component';
import { MiServicioService } from './mi-servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    CompartidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DatosService,
    MiServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
