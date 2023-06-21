export const WINNER_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkEndGame(board: string[]): boolean {
  return board.every((fill) => fill !== '');
}

export function checkWinner(board: string[]): string | null {
  for (const combination of WINNER_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
