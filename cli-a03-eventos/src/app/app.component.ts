import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  texto="";
  values:string;
  value = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  pulsado(){
      this.texto="Botón pulsado";
  }
  onKey(event: any) { // without type info
    this.values = "Texto introducido: "+event.target.value ;
  }

  update(value: string) { 
      this.value = value; 
  }
    
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
