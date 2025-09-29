import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SquareComponent } from "./components/square/square.component";
import { BoardComponent } from "./components/board/board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, BoardComponent],
  template:
  `<app-header></app-header>
  <main>

   <app-home></app-home>
   <app-board></app-board>

  </main>`,
  styles: [`
    main{padding: 16px;}
  `]

})
export class AppComponent {
  title = 'TickTacToe';
}
