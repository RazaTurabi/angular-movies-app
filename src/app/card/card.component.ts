import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  movies=[
 
    {
      id:1,
      name:"Khichdi 2",
      price:300.123,
      release_date:"6/21/1999",
      rating:4.9,
      img:"./assets/images/moviec.jpg",
      genre:"comedy",
      movie_code:"C-1"

    },
    {
      id:2,
      name:"Krazzy 4",
      price:500,
      release_date:"7/15/1999",
      rating:4,
      img:"./assets/images/movieco.jpg",
      genre:"comedy",
      movie_code:"C-2"
    },
    {
      id:3,
      name:"Grocery Store",
      price:250,
      release_date:"6/20/1999",
      rating:3.2,
      img:"./assets/images/movie3.jpg",
      genre:"action",
      movie_code:"A-1"
    },
    {
      id:4,
      name:"U-AMC",
      price:370,
      release_date:"5/20/1999",
      rating:2.9,
      img:"./assets/images/movie4.jpg",
      genre:"action",
      movie_code:"A-2"
    },
    {
      id:5,
      name:"RAAZ",
      price:320,
      release_date:"5/20/1999",
      rating:5,
      img:"./assets/images/movie1.jpg",
      genre:"horror",
      movie_code:"H-1"
    },
    {
      id:6,
      name:"Crackle",
      price:400,
      release_date:"5/20/1999",
      rating:1.3,
      img:"./assets/images/movie2.jpg",
      genre:"horror",
      movie_code:"H-2"
    }

  ]

  filter_movies = this.movies
  filtermovies(genre:string) {
    if(genre=="all"){
      this.filter_movies=this.movies
    }
    else{
     this.filter_movies=
     this.movies.filter(movie=>movie.genre==(genre))
    }
  }

  _movie_name = ""

    get movie_name() {
      return this._movie_name
    }
    
    set movie_name(movie:string) {
      this._movie_name=movie
      
      this.filter_movies=
        this.movies.filter(movie=>movie.name.includes(this._movie_name))
    }

  card_width = "15"
  font_size = "20px"
  card_border = "3px dotted red"
  font_art={
    "font-family":"Lucida Sans",
    "color":"red",
    "background-color":"pink"
  }

  form_child(data:string) {
    console.log(data);
    
  }
   
  constructor(
    private movieService:MovieService
  ){}
  add_to_cart() {
    this.movieService.update_cart_value()
  }

}
