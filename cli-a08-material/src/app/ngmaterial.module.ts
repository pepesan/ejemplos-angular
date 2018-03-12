import { NgModule } from '@angular/core';
import {  MatButtonModule, MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule } from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {LayoutModule} from '@angular/cdk/layout';


@NgModule({
  imports: [LayoutModule,CdkTableModule,MatButtonModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule],
  exports: [LayoutModule,CdkTableModule,MatButtonModule,MatIconModule,MatToolbarModule,MatSidenavModule,MatListModule]
})
export class MaterialAppModule { }
