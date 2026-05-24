import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TextToSpeachService {
  constructor(private http: HttpClient) {

  }
  textoToAudio(entrada: string, voz: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '639520cc17mshbc25ffe6df8b0a3p1002acjsnad973a795f26',
        'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type': 'application/json',
      }),
      responseType: 'blob' as 'blob'
    }
    
    let body = {
      "model": "tts-1",
      "input": `${entrada}`,
      "instructions": "Speak in a lively and optimistic tone",
      "voice": `${voz}`
    }
    return this.http.post("https://open-ai-text-to-speech1.p.rapidapi.com/",body,httpOption);
  }
}
