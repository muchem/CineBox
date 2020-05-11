import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private Service: MoviesService, 
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }
  Id;
  movie;
  Cast;
  Videos;
  Reveiws;
  searchText;
  poster;
  MovieTitle;
  releaseDate;
  voteAverage;
  voteCount;
  movieTagline;
  movieOverview;
  videoKey1;
  videoKey2;
  url: SafeResourceUrl;
  url2: SafeResourceUrl;
  Similar;
  videoMessage:boolean = false;
  hide:boolean = true;
  show:boolean = false;
  showCast:boolean = false;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('movieId');
      parseInt(this.Id);
      this.Service.getMovieDetails(this.Id).subscribe(detail => {
        this.movie = detail;
        this.poster = this.movie.poster_path;
        this.MovieTitle = this.movie.title;
        this.releaseDate = this.movie.release_date;
        this.voteAverage = this.movie.vote_average;
        this.voteCount = this.movie.vote_count
        this.movieTagline = this.movie.tagline;
        this.movieOverview = this.movie.overview;
      })

      this.Service.getCast(this.Id).subscribe(members => {
        this.Cast = members.cast.splice(0,6);
        if(this.Cast.length === 0){
          this.showCast = true;
        }
      })

      this.Service.getSimilarMovies(this.Id).subscribe(alike => {
        this.Similar = alike.results.splice(0, 12);
        if (this.Similar.length === 0){
          this.show = true;
        }
      })
      this.Service.getVideos(this.Id).subscribe(video =>{
        this.Videos = video.results;
          if(this.Videos.length == 1){
            this.hide = false;
          }
          if(this.Videos.length > 1){
            this.hide = true;
          }
          if(this.Videos.length === 0){
            this.videoMessage = true;
          }
          if(this.Videos[0] != undefined){
            this.videoKey1 = this.Videos[0].key;
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoKey1}`);
          }
          if(this.Videos[1] != undefined){
            this.videoKey2 = this.Videos[1].key;
            this.url2 = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoKey2}`);
          }
      })
      this.Service.getReviews(this.Id).subscribe(review =>{
          this.Reveiws = review.results.splice(0,4)
      })
    });
  }

}
