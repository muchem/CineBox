import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  Id;
  Movie;
  Cast;
  showActor:boolean = true;
  constructor(private Service: MoviesService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('movieId');
      parseInt(this.Id);
      this.Service.getMovieDetails(this.Id).subscribe(movie =>{
       this.Movie = movie;
      })
      this.Service.getCast(this.Id).subscribe(cast =>{
          this.Cast = cast.cast;
          console.log(this.Cast);
      })
      if (this.Cast.profile_path === null){
        this.showActor = false; 
      }
    });
  }

}
