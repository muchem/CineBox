import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Upcoming;
  constructor(private Serivice:MoviesService) { }

  ngOnInit() {
    this.Serivice.getUpcomingMovies().subscribe(upcoming =>{
      this.Upcoming = upcoming;
      console.log(this.Upcoming);
    })
    }
}
