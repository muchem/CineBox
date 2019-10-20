import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http:HttpClient) { }
  apiKey: string = environment.API_Key;
  searchString;
  getUpcomingMovies():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  getPopularMovies():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  getTopRated():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  searchMovies(searchValue:string):Observable<any[]>{
   let search =  new HttpParams().set('query',searchValue);
    this.searchString = { params: search };
    return this.http.get<any[]>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.searchString.params.updates[0].value}`);
  }
}
