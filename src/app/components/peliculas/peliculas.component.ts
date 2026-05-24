import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-peliculas',
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
})
export class PeliculasComponent implements OnInit {
  constructor(private listaPeliculas: PeliculasService) {

  }
  // peliculasPrueba: any[] = [
  //   {
  //     "rank": 1,
  //     "title": "The Shawshank Redemption",
  //     "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  //     "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
  //     "big_image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
  //     "genre": [
  //       "Drama"
  //     ],
  //     "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  //     "rating": "9.3",
  //     "id": "top1",
  //     "year": 1994,
  //     "imdbid": "tt0111161",
  //     "imdb_link": "https://www.imdb.com/title/tt0111161"
  //   },
  //   {
  //       "rank": 2,
  //       "title": "The Godfather",
  //       "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
  //       "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
  //       "big_image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
  //       "genre": [
  //           "Crime",
  //           "Drama"
  //       ],
  //       "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  //       "rating": "9.2",
  //       "id": "top2",
  //       "year": 1972,
  //       "imdbid": "tt0068646",
  //       "imdb_link": "https://www.imdb.com/title/tt0068646"
  //   },
  //   {
  //       "rank": 3,
  //       "title": "The Dark Knight",
  //       "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  //       "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  //       "big_image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  //       "genre": [
  //           "Action",
  //           "Crime",
  //           "Drama"
  //       ],
  //       "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
  //       "rating": "9.0",
  //       "id": "top3",
  //       "year": 2008,
  //       "imdbid": "tt0468569",
  //       "imdb_link": "https://www.imdb.com/title/tt0468569"
  //   },
  //   {
  //       "rank": 4,
  //       "title": "The Godfather Part II",
  //       "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  //       "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
  //       "big_image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
  //       "genre": [
  //           "Crime",
  //           "Drama"
  //       ],
  //       "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
  //       "rating": "9.0",
  //       "id": "top4",
  //       "year": 1974,
  //       "imdbid": "tt0071562",
  //       "imdb_link": "https://www.imdb.com/title/tt0071562"
  //   },
  //   {
  //       "rank": 5,
  //       "title": "12 Angry Men",
  //       "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
  //       "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
  //       "big_image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
  //       "genre": [
  //           "Crime",
  //           "Drama"
  //       ],
  //       "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
  //       "rating": "9.0",
  //       "id": "top5",
  //       "year": 1957,
  //       "imdbid": "tt0050083",
  //       "imdb_link": "https://www.imdb.com/title/tt0050083"
  //   },
  // ]
  peliculas: any[] = [];
  ngOnInit(): void { // ejecuta apenas cargue el componente
    this.listaPeliculas.getPeliculas().subscribe(
      (peliculasData) => {
        this.peliculas = peliculasData
        console.log(this.peliculas);
      })
    // this.peliculas= this.peliculasPrueba;
    // console.log(this.peliculas)
  }
}
