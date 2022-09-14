import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../Shared/Models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }
  
  getTopGrossingMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>('https://yumovieshop.azurewebsites.net/');
  }

  getMovieDetails(id:number){

  }

  getMoviesByGenre(genreId:number){

  }
}
