import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../Shared/Models/Movie-Details';
import { MovieService } from '../Core/Services/movie.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails!: MovieDetails;
  id!: number;
  relaseDate: DatePipe;
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('Movieid')!);
    console.log(this.id);
    this.movieService.getMovieDetails(this.id).subscribe(m => {
      this.movieDetails = m;
      console.table(this.movieDetails);
    });
  }

}