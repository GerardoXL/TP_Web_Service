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
  
  marcaSeleccionada:string="";
  ngOnInit(): void {
    this.listaMarcas.getMarcas().subscribe(
      (marcasData) => {
        this.marcas = marcasData;
      })
  }
  
  modelos: any[] = [];
  cargarModelos(id: number,nombre: string) {
    this.listaMarcas.getModelos(id).subscribe(
      (modelosData) => {
        this.modelos = modelosData;
      })
    this.marcaSeleccionada=nombre
  }
}
