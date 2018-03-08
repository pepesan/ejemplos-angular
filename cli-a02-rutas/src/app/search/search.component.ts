import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  texto:string;
  sub:any;
    
  constructor(private route: ActivatedRoute) { 
    this.sub=this.route.params.subscribe( parameters => this.texto=parameters.texto );
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}
