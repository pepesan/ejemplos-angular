import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit, OnDestroy {

  iden:any;
  sub:any;
    
  constructor(private route: ActivatedRoute) {
      this.sub=this.route.params.subscribe( parameters => this.iden=parameters.id );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
   this.sub.unsubscribe();
  }

}
