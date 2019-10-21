import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() Movie;
  constructor() { }

  ngOnInit() {
  }
  

}
