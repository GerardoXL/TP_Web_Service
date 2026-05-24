import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CardMakerService {
  constructor(private http: HttpClient){

  }
  getMarcas():Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
        'x-rapidapi-key':'639520cc17mshbc25ffe6df8b0a3p1002acjsnad973a795f26',
        'x-rapidapi-host':'car-specs.p.rapidapi.com',
        'Content-Type':'application/json',
      })
    }
    return this.http.get("https://car-specs.p.rapidapi.com/v2/cars/makes",httpOption)
  }

  getModelos(id: number):Observable<any>{
    let httpOption={
      headers: new HttpHeaders({
       'x-rapidapi-key':'639520cc17mshbc25ffe6df8b0a3p1002acjsnad973a795f26',
        'x-rapidapi-host':'car-specs.p.rapidapi.com',
        'Content-Type':'application/json',
      })
    }
    return this.http.get(`https://car-specs.p.rapidapi.com/v2/cars/makes/${id}/models`,httpOption)
  }
}

