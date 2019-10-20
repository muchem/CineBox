import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) { }
  getUpcomingMovies():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/upcoming?api_key=43c00618f867c060677c3dcc6de93669&language=en-US&page=1`);
  }
}
