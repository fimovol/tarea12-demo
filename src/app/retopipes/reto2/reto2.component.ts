import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Listado,Regestrarse } from 'src/app/modelo/lista';

@Component({
  selector: 'app-reto2',
  templateUrl: './reto2.component.html',
  styleUrls: ['./reto2.component.css']
})
export class Reto2Component implements OnInit {
  constructor(private formbuilder:FormBuilder) {
    
   }
  ngOnInit(): void {
    for(let item in Listado){
      console.log(typeof item)
      console.log(item)
      if(isNaN(Number(item))){
        this.paises.push({text:item,value: Listado[item]})
      }
    }
  }
  model:Regestrarse={valor:0,pais:Listado.pordefecto,}
  paises :{text:string,value:string}[] = []
  resultado : Listado = this.model.pais
  Refrescar(){

  }
  onSubmit(){
 
  }
  onWriterChange(){
    this.model.valor
    this.resultado = this.model.pais
  }
}
