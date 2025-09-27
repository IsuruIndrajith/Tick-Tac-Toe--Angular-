import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template:
  `<app-header></app-header>
  <app-home></app-home>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'TickTacToe';
}
