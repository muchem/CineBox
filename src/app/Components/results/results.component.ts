import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';
import { Response } from '../../Models/response';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchValue:string;
  Movies:Response[];
  showCard:boolean = true;
  constructor(private route: ActivatedRoute, private Service: MoviesService) { }
  ngOnInit() {
    //get url paramter value
    this.route.paramMap.subscribe(params => {
      //store in variable
      this.searchValue = params.get('searchValue');
      //inject url parameter in Service method.
      this.Service.searchMovies(this.searchValue).subscribe(res => {
      this.Movies = res.results;
      })
    });
  }
}
