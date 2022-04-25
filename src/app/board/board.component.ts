import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  squares: string[];
  xIsNext: boolean;
  winner: string;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  txtColor: string = "#ffffff";
  winColor: string = "#ffffff";

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.xIsNext = true;
    this.txtColor = "#ffffff";
  }

  getColor()
  {
    if(this.winner == "X")
    {
      this.winColor = "#00d68f"
    }
    else
    {
      this.winColor = "#ff3d71"
    }

    if(this.player == "X")
    {
      this.txtColor = "#00d68f"
    }
    else
    {
      this.txtColor = "#ff3d71"
    }
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {

   if(this.winner == null)
    {
      if (!this.squares[idx]) {
        this.squares.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null!;
  }
}
