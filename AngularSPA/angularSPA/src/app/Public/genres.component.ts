import { Component, OnInit } from '@angular/core';
import { GenreService } from '../Core/Services/genre.service';
import { Genre } from '../Shared/Models/Genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  deleteFlag: boolean = false;
  genres!: Genre[];
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(g => {
      this.genres = g;
      console.log(this.genres);
    });
  }

  deleteGenre(id: number) {
    //mock code to simulate deleting a Genre
    if (this.genreService.deleteGenre(id)) {
      this.deleteFlag = true;
    };
  }

}
