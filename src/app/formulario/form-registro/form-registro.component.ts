import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  registroform = this.formbuilder.group({
    dni: ['',
      {
        validators:[
          Validators.required,
          Validators.pattern('[0-9]{8}')
        ]
      }],
    nombres: ['',Validators.required],
    apellidos: ['',Validators.required],
    fechanan: ['',Validators.required],
    sueldo: ['',Validators.required],
    comision: ['',{
      validators:[
        Validators.required,
        Validators.max(1),
        Validators.min(0.01)
      ]
    }],

  })
  get dni(){return this.registroform.get('dni')}
  get nombres(){return this.registroform.get('nombres')}
  get apellidos(){return this.registroform.get('apellidos')}
  get fechanan(){return this.registroform.get('fechanan')}
  get comision(){return this.registroform.get('comision')}
  get sueldo(){return this.registroform.get('sueldo')}

  send(){
    console.log(this.registroform.value);
  }
  refrescar(){
    location.reload();
  }
}
