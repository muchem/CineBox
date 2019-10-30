import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { ResultsComponent } from './Components/results/results.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { ActorDetailsComponent } from './Components/actor-details/actor-details.component';
const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'searchResults',component:ResultsComponent },
  { path:'Movies',component:MoviesComponent },
  { path:'searchResults/:searchValue',component:ResultsComponent },
  { path:'movieDetails/:movieId', component: MovieDetailsComponent },
  {path:'actorDetails/:credit_Id',component:ActorDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
