import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-listado',
  templateUrl: './form-listado.component.html',
  styleUrls: ['./form-listado.component.css']
})
export class FormListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() inp_datos = new Array
}
