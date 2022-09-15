import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateMovieComponent } from '../Admin/create-movie.component';
import { CreateCastComponent } from '../Admin/create-cast.component';
import { TopPurchasesComponent } from '../Admin/top-purchases.component';
import { AddGenreComponent } from './add-genre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateMovieComponent,
    CreateCastComponent,
    TopPurchasesComponent,
    AddGenreComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
