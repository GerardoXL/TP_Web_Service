import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CardMakerComponent } from './components/card-maker/card-maker.component';
import { TextToSpeachComponent } from './components/text-to-speach/text-to-speach.component';
import { ConversorComponent } from './components/conversor/conversor.component';


export const routes: Routes = [
    {path: "peliculas", component : PeliculasComponent },
    {path: "cardMaker", component: CardMakerComponent},
    {path: "conversor", component: ConversorComponent},
    {path: "textToSpeach", component: TextToSpeachComponent},
];
