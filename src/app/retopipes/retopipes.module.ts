import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reto2Component } from './reto2/reto2.component';
import { FormsModule } from '@angular/forms';
import { AsincornaComponent } from './asincorna/asincorna.component';


@NgModule({
  declarations: [
    Reto2Component,
    AsincornaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Reto2Component,
    AsincornaComponent
  ]
})
export class RetopipesModule { }
