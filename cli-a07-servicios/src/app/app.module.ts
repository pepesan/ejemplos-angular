import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MiServicioService } from './mi-servicio.service';
import { DatosService } from './datos.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MiServicioService,
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
