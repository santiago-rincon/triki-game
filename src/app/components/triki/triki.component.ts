import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { checkEndGame, checkWinner } from './logic';

@Component({
  selector: 'app-triki',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './triki.component.html',
  styleUrls: ['./triki.component.scss'],
})
export class TrikiComponent {
  TURNS = { X: '❌', Y: '🟢' };
  board: string[] = Array(9).fill('');
  turn = this.TURNS.X;
  winner: boolean = false;
  endGame: boolean = false;
  label: string = '';

  changeTurn(i: number): void {
    if (this.winner || this.endGame) return; // Verificación que no exista un ganador o el juego haya terminado aún
    let newBoard = [...this.board]; // Copia del tablero actual
    if (newBoard[i]) return; // verificar si la posición actual no está ocupada
    newBoard[i] = this.turn; // Llena la casilla cliqueada con el turno actual
    this.board = [...newBoard]; // Actualización del nuevo tablero

    // Verificación si hay un ganador
    if (checkWinner(newBoard)) {
      this.endGame = true;
      this.label = `Felicidades, gano ${this.turn}`;
      return;
    }

    // Verificación si el juego a terminado
    if (checkEndGame(newBoard)) {
      this.endGame = true;
      this.label = 'No hay ganador, empate!!!';
      return;
    }

    this.turn = this.turn === this.TURNS.X ? this.TURNS.Y : this.TURNS.X; // Cambio de turno
  }

  resetGame() {
    this.board = Array(9).fill('');
    this.turn = this.TURNS.X;
    this.winner = false;
    this.endGame = false;
    this.label = '';
  }
}

