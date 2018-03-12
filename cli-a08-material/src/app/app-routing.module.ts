import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';

import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'about',
    component: AcercaDeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
