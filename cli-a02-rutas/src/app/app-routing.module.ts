import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component'; 
import { ParametrosComponent } from './parametros/parametros.component'; 
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'acerca-de',
    component: AcercaDeComponent
  },
  {
    path: 'parametros/:id',
    component: ParametrosComponent
  },
  {
    path: 'search/:texto',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
