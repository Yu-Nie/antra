import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Core/Services/movie.service';
import { Movie } from '../Shared/Models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!:Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getTopGrossingMovies().subscribe(m => {
      this.movies = m;
      console.table(this.movies);
    });
  }

}
