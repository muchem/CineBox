import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) { }
  apiKey: string = environment.API_Key;
  getUpcomingMovies():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  getPopularMovies():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  getTopRated():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}
