import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {

  constructor(private http: HttpClient) {

  }
  getMonedas() {
    let httpOption = {
      headers: new HttpHeaders({
        'apikey': 'PH0CDITgOcSC1smfOiONlb6fH0TnL2bY'
      })
    }
    return this.http.get("https://api.apilayer.com/currency_data/list",httpOption);
  }
  convertirMonedas(cantidad: number, origen:string, destino:string){
    let httpOption={
      headers: new HttpHeaders({
        'apikey': 'PH0CDITgOcSC1smfOiONlb6fH0TnL2bY'
      })
    }
    return this.http.get(`https://api.apilayer.com/currency_data/convert?to=${destino}&from=${origen}&amount=${cantidad}`,httpOption);
  }
}

