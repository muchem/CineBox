import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Response } from '../../Models/response';
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
  url: SafeResourceUrl;
  url2: SafeResourceUrl;
  Similar:Response[];
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
      })

      this.Service.getCast(this.Id).subscribe(members => {
        this.Cast = members.cast.splice(0,18);
        console.log(this.Cast);
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
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.Videos[0].key}`);
        this.url2 = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.Videos[1].key}`);
      })
      this.Service.getReviews(this.Id).subscribe(review =>{
          this.Reveiws = review.results.splice(0,4)
      })
    });
  }

}
