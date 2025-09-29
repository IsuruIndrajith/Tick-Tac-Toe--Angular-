import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { NgFor, NgIf } from '@angular/common'; 

@Component({
  selector: 'app-board',
  imports: [NgFor, NgIf, SquareComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: ('X' | 'O' | null)[] = Array(9).fill(null);
  xIsNext = true;
  winner: string | null = null;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array<'X' | 'O' | null>(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player(): 'X' | 'O' {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares[idx] = this.player;
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  private calculateWinner(): string | null {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of lines) {
      if (this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]) {
        return this.squares[a];
      }
    }
    return null;
  }
}
