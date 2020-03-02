import { Component, OnInit,Input } from '@angular/core';
import { Response } from '../../Models/response';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()  Movies//:Response[];
  constructor() { }

  ngOnInit() {
   }
  

}
