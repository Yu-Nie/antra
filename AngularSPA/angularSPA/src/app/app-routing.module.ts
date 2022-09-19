import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './Core/Guards/admin.guard';
import { AuthGuard } from './Core/Guards/auth.guard';
import { CastDetailsComponent } from './Public/cast-details.component';
import { GenresComponent } from './Public/genres.component';
import { MovieDetailsComponent } from './Public/movie-details.component';
import { MoviesComponent } from './Public/movies.component';

const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "Genre", component: GenresComponent },
  { path: "Movie-Details/:Movieid", component: MovieDetailsComponent },
  { path: "Cast-Details/:Castid", component:CastDetailsComponent },
  { path: "Account", loadChildren: () => import("./Account/account.module").then(mod => mod.AccountModule) },
  { path: "User", loadChildren: () => import("./User/user.module").then(mod => mod.UserModule), canActivateChild: [AuthGuard] },
  { path: "Admin", loadChildren: () => import("./Admin/admin.module").then(mod => mod.AdminModule), canLoad: [AdminGuard] }
];
//localhost:4200/Account/login or localhost:4200/Account/register

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
