import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { TVSeriesComponent } from './Components/tv-series/tv-series.component';
import { ResultsComponent } from './Components/results/results.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'searchResults',component:ResultsComponent },
  { path:'Movies',component:MoviesComponent },
  { path:'TV',component:TVSeriesComponent },
  { path:'searchResults',component:ResultsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
