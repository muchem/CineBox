import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CineBox';
  onActivate(event) {
    document.querySelector('body').scrollTo(0,0)
}
}
