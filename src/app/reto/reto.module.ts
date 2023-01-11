import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRetoComponent } from './formulario-reto/formulario-reto.component';



@NgModule({
  declarations: [
    FormularioRetoComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    FormularioRetoComponent
  ]
})
export class RetoModule { }
