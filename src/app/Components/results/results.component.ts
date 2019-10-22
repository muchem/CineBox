import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';
import { Responce } from '../../Models/response';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchValue:string;
  newSearchValue:string;
  Popular:any[];
  Movies: Responce[];
  constructor(private route: ActivatedRoute, private Service: MoviesService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchValue = params.get('searchValue');
      });
    this.Service.searchMovies(this.searchValue).subscribe(result => {
      this.Movies = result;
    })
  }
}
