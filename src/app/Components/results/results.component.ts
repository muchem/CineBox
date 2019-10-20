import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private Service: MoviesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const searchValue = params['searchValue']
      });
  }

}
