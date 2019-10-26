import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Response } from '../Models/response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }
  apiKey: string = environment.API_Key;
  searchString;
  selectedId;
  getUpcomingMovies(): Observable<Response[]>{
    return this.http.get<Response[]>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  getPopularMovies():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  getTopRated():Observable<any[]>{
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`);
  }
  searchMovies(searchValue: string): Observable<Response[]>{
   let search =  new HttpParams().set('query',searchValue);
    this.searchString = { params: search };
    return this.http.get<Response[]>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.searchString.params.updates[0].value}`);
  }

  getMovieDetails(Id): Observable<Response[]>{
    let MovieIdPara = new HttpParams().set('movie_id', Id);
    this.selectedId = { params: MovieIdPara };
    return this.http.get<Response[]>(`https://api.themoviedb.org/3/movie/${this.selectedId.params.updates[0].value}?api_key=${this.apiKey}&language=en-US`);
  }
  getCast(Id): Observable<any[]>{
    let MovieIdPara = new HttpParams().set('movie_id', Id);
    this.selectedId = { params: MovieIdPara };
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/${this.selectedId.params.updates[0].value}/credits?api_key=${this.apiKey}`)
  }
  getSimilarMovies(Id):Observable<any[]>{
    let MovieIdPara = new HttpParams().set('movie_id', Id);
    this.selectedId = { params: MovieIdPara };
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/${this.selectedId.params.updates[0].value}/similar?api_key=${this.apiKey}&language=en-US&page=1`)
  }
  getVideos(Id):Observable<any[]>{
    let MovieIdPara = new HttpParams().set('movie_id', Id);
    this.selectedId = { params: MovieIdPara };
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/${this.selectedId.params.updates[0].value}/videos?api_key=${this.apiKey}&language=en-US`)
  }
}
