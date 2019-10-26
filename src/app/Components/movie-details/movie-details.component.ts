import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Response } from '../../Models/response';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private Service: MoviesService, private route: ActivatedRoute) { }
  Id;
  movie;
  Cast;
  Similar:Response[];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('movieId');
      parseInt(this.Id);
      this.Service.getMovieDetails(this.Id).subscribe(detail => {
        this.movie = detail;
      })

      this.Service.getCast(this.Id).subscribe(members => {
        this.Cast = members.cast;
      })

      this.Service.getSimilarMovies(this.Id).subscribe(alike => {
        this.Similar = alike.results;
      })
    });
  }

}
