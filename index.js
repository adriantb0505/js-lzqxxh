// Import stylesheets
import './style.css';

// Write Javascript code!
// Initialize the game board
let board = [['', '', ''], ['', '', ''], ['', '', '']];

// Player 1 is 'X' and Player 2 is 'O'
let currentPlayer = 'X';

// Function to update the game board
function updateBoard(x, y) {
  if (board[x][y] === '') {
    board[x][y] = currentPlayer;
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
  } else {
    console.log('Invalid move, try again.');
  }
}

// Function to check if the game is won
function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
      return board[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
      return board[0][i];
    }
  }

  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
    return board[0][0];
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
    return board[0][2];
  }

  // Check for tie
  let emptySpaces = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        emptySpaces++;
      }
    }
  }
  if (emptySpaces === 0) {
    return 'Tie';
  }

  // If none of the above conditions are met, the game is not won yet
  return '';
}

