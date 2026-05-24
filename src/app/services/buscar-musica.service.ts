import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarMusicaService {

  constructor(private http: HttpClient) {

  }
  buscarMusica(artistaOmusica: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '639520cc17mshbc25ffe6df8b0a3p1002acjsnad973a795f26',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistaOmusica}`, httpOption);
  }
}
