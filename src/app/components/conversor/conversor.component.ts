import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../../services/conversor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  imports: [CommonModule,FormsModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css',
})
export class ConversorComponent implements OnInit {

  constructor(private listaMonedas: ConversorService) {

  }
  moneda: any = {};
  // monedaPrueba: any = {
  //   "success": true,
  //   "currencies": {
  //     "AED": "United Arab Emirates Dirham",
  //     "AFN": "Afghan Afghani",
  //     "ALL": "Albanian Lek",
  //     "AMD": "Armenian Dram",
  //     "ANG": "Netherlands Antillean Guilder",
  //     "AOA": "Angolan Kwanza",
  //     "ARS": "Argentine Peso",
  //     "USD": "United States Dollar",
  //     "GBP": "British Pound Sterling",
  //   }
  // }
  // convertidoPrueba: any = {
  //   "date": "2005-01-01",
  //   "historical": true,
  //   "info": {
  //     "quote": 0.51961,
  //     "timestamp": 1104623999
  //   },
  //   "query": {
  //     "amount": 10,
  //     "from": "USD",
  //     "to": "GBP"
  //   },
  //   "result": 5.1961,
  //   "success": true
  // }
  convertido: any = {};
  origen: string = "";
  destino: string = "";
  cantidad: number = 0;

  ngOnInit(): void {
    this.listaMonedas.getMonedas().subscribe(
      (monedaData) => {
        this.moneda = monedaData;
      })
    // this.moneda=this.monedaPrueba;
  }
  // cargarListaMonedas(){

  // }
  conversion() {
    this.listaMonedas.convertirMonedas(this.cantidad, this.origen, this.destino).subscribe(
      (conversionData) => {
        this.convertido = conversionData;
      })
    // this.convertido=this.convertidoPrueba;
  }
}
