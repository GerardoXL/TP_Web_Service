import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardMakerService } from '../../services/card-maker.service';

@Component({
  selector: 'app-card-maker',
  imports: [CommonModule],
  templateUrl: './card-maker.component.html',
  styleUrl: './card-maker.component.css',
})
export class CardMakerComponent implements OnInit {
  constructor(private listaMarcas: CardMakerService) {

  }
  marcas: any[] = [];
  marcasPrueba: any[]=[
    {
        "id": "71268",
        "name": "AC"
    },
    {
        "id": "71295",
        "name": "Acura"
    },
    {
        "id": "71460",
        "name": "Adler"
    },
    {
        "id": "71469",
        "name": "Alfa Romeo"
    },
    {
        "id": "71948",
        "name": "Alpina"
    },
    {
        "id": "72229",
        "name": "Alpine"
    },
    {
        "id": "72259",
        "name": "AMC"
    },
    {
        "id": "72274",
        "name": "Apal"
    },
    {
        "id": "72279",
        "name": "Aro"
    },
    {
        "id": "72308",
        "name": "Asia"
    },
    {
        "id": "72318",
        "name": "Aston Martin"
    },
    {
        "id": "72541",
        "name": "Audi"
    },
    {
        "id": "75388",
        "name": "Aurus"
    },
    {
        "id": "75395",
        "name": "Austin"
    },
    {
        "id": "75432",
        "name": "Austin Healey"
    },
    {
        "id": "75449",
        "name": "Autobianchi"
    },
    {
        "id": "75456",
        "name": "Autocam"
    },
    {
        "id": "75473",
        "name": "Baic"
    },
    {
        "id": "75534",
        "name": "Bajaj"
    },
  ]
  marcaSeleccionada:string="";
  ngOnInit(): void {
    this.listaMarcas.getMarcas().subscribe(
      (marcasData) => {
        this.marcas = marcasData;
      })
    // this.marcas=this.marcasPrueba;
  }
  modelosPrueba: any[]=[
    {
        "id": "71296",
        "name": "CL"
    },
    {
        "id": "71308",
        "name": "CSX"
    },
    {
        "id": "71313",
        "name": "EL"
    },
    {
        "id": "71318",
        "name": "ILX"
    },
    {
        "id": "71322",
        "name": "Integra"
    },
    {
        "id": "71340",
        "name": "MDX"
    },
    {
        "id": "71357",
        "name": "NSX"
    },
    {
        "id": "71369",
        "name": "RDX"
    },
    {
        "id": "71387",
        "name": "RL"
    },
    {
        "id": "71404",
        "name": "RLX"
    },
    {
        "id": "71409",
        "name": "RSX"
    },
    {
        "id": "71413",
        "name": "SLX"
    },
    {
        "id": "71418",
        "name": "TL"
    },
    {
        "id": "71437",
        "name": "TLX"
    },
    {
        "id": "71447",
        "name": "TSX"
    },
    {
        "id": "71456",
        "name": "ZDX"
    },
    {
        "id": "150380",
        "name": "ADX"
    }

  ]
  modelos: any[] = [];
  cargarModelos(id: number,nombre: string) {
    this.listaMarcas.getModelos(id).subscribe(
      (modelosData) => {
        this.modelos = modelosData;
      })
    // this.modelos=this.modelosPrueba;
    this.marcaSeleccionada=nombre
  }
}
