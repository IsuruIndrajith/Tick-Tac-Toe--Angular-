import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  imports: [],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent implements OnInit{
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(number) { 
    
  }

}
