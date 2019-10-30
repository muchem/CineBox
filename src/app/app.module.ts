import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ResultsComponent } from './Components/results/results.component';
import { MovieCardComponent } from './Components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { SearchNavbarComponent } from './Components/search-navbar/search-navbar.component';
import { ActorDetailsComponent } from './Components/actor-details/actor-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    FooterComponent,
    ResultsComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    SearchNavbarComponent,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
