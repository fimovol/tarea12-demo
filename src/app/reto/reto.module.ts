import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRetoComponent } from './formulario-reto/formulario-reto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioRetoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormularioRetoComponent
  ]
})
export class RetoModule { }
