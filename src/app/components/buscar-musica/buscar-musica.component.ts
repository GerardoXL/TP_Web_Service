import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BuscarMusicaService } from '../../services/buscar-musica.service';

@Component({
  selector: 'app-buscar-musica',
  imports: [CommonModule,FormsModule],
  templateUrl: './buscar-musica.component.html',
  styleUrl: './buscar-musica.component.css',
})
export class BuscarMusicaComponent {
  constructor(private listaCanciones: BuscarMusicaService){

  }
  artista: string="";
  canciones: any[]=[]
  buscarCancion(artista: string){
    this.listaCanciones.buscarMusica(artista).subscribe(
      (musicaData)=>{
        this.canciones=musicaData.data;
    })
  }
}
