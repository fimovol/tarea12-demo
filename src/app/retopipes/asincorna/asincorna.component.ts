import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincorna',
  templateUrl: './asincorna.component.html',
  styleUrls: ['./asincorna.component.css']
})
export class AsincornaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  json= [
    {
      "apellidos": "arcilia",
      "casado":false,
      "direccion":"calle 35 # 12 45",
      "nombre": "diego",
      "telefono": 312654
    },
    {
      "apellidos": "bueno",
      "casado":false,
      "direccion":"crt 12 # 43 65",
      "nombre": "kevin",
      "telefono": 6549874
    },
    {
      "apellidos": "palomino",
      "casado":false,
      "direccion":"crt 25 # 52 81",
      "nombre": "natalia",
      "telefono": 3265895
    },
  ]
}
