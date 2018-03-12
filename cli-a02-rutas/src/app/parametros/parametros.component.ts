import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit, OnDestroy {

  iden:string;
  sub:any;
  objeto:any;
  //route: ActivatedRoute;
  constructor(private route: ActivatedRoute) {
      //this.route=new ActivatedRoute();
      this.sub=this.route.params.subscribe(
        /*
            function (parameters){
              this.iden=parameters.id;
            }
         */
        parameters => this.iden=parameters.id
      );
      this.objeto={
        att1:"hola",
        att2:"mundo"
      };
  }

  ngOnInit() {
  }
  ngOnDestroy() {
   this.sub.unsubscribe();
  }

}
