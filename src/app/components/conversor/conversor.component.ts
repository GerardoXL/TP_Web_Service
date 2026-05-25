import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../../services/conversor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css',
})
export class ConversorComponent implements OnInit {

  constructor(private listaMonedas: ConversorService) {

  }
  moneda: any = {};

  convertido: any = {};
  origen: string = "";
  destino: string = "";
  cantidad: number = 0;

  ngOnInit(): void {
    this.listaMonedas.getMonedas().subscribe(
      (monedaData) => {
        this.moneda = monedaData;
      })

  }



  conversion() {
    this.listaMonedas.convertirMonedas(this.cantidad, this.origen, this.destino).subscribe(
      (conversionData) => {
        this.convertido = conversionData;
      })

  }
}
