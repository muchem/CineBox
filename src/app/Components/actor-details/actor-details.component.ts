import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../Services/movies.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {
  CreditId;
  actorDetails;
  Movies;
  constructor(private route: ActivatedRoute,
    private Service:MoviesService) { 

  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //store in variable
      this.CreditId = params.get('credit_Id');
      //inject url parameter in Service method.
      this.Service.getActorDetails(this.CreditId).subscribe(details => {
        this.actorDetails = details;
        this.Movies = details.person.known_for;
        console.log(this.Movies);
        console.log(this.actorDetails);
      })
    });
  }

}
