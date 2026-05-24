import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextToSpeachService } from '../../services/text-to-speach.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-to-speach',
  imports: [CommonModule,FormsModule],
  templateUrl: './text-to-speach.component.html',
  styleUrl: './text-to-speach.component.css',
})
export class TextToSpeachComponent {
  constructor(private audio: TextToSpeachService){

  }
  entrada: string="";
  voz: string="";
  url: string="";
  voces:string[]=[
    "Alloy","Echo","Fable","Onyx","Nova","Shimmer"
  ];
  conversionAudio(){
    this.audio.textoToAudio(this.entrada,this.voz).subscribe(
      (audioData)=>{
        this.url=URL.createObjectURL(audioData);
    })
  }
}
