import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Upcoming;
  TopRated;
  Popular;
  constructor(private Serivice:MoviesService) { }

  ngOnInit() {
    this.Serivice.getUpcomingMovies().subscribe(upcoming =>{
      this.Upcoming = upcoming.results.splice(0,8)
     
    })
    this.Serivice.getTopRated().subscribe(top =>{
      this.TopRated = top.results;
    })
    this.Serivice.getPopularMovies().subscribe(popular =>{
      this.Popular = popular.results;
    })
    }
}
