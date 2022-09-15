import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenreService } from '../Core/Services/genre.service';
import { Genre } from '../Shared/Models/Genre';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  name: string='';
  tnc: boolean = false;
  genre: Genre={id:0, name:''};
  flag: boolean = false;
  constructor(private gnereService: GenreService) { }

  ngOnInit(): void {
  }

  addGenre(genreForm: NgForm) {
    this.genre.name = genreForm.value.name;
    if (this.tnc) {
      this.gnereService.addGenre(this.genre).subscribe(g => {
        this.flag = true;
      });
    }

  }

  resetForm(genreForm: NgForm) {
    genreForm.resetForm();
  }
}
