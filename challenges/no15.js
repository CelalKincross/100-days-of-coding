// Prompt

// Given an N*N board, place N queens on the board such that none can attack each other. A queen can move an unlimited number of spaces in any direction: horizontal, vertical, or diagonal. Return an N*N matrix of ‘.’ and ‘Q’ characters, a ‘Q’ where ever a queen is positioned.

function nQueens(n) {
  /* your code here */
}

function nQueens(n) {
    let board = createEmptyBoard(n);
    let solutions = [];
    solve(board, 0, solutions);
    return solutions;
  }
  
  function createEmptyBoard(n) {
    let board = [];
    for (let i = 0; i < n; i++) {
      board[i] = new Array(n).fill('.');
    }
    return board;
  }
  
  function isValidMove(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }
  
  function solve(board, row, solutions) {
    if (row === board.length) {
      solutions.push(board.map(row => row.slice()));
      return;
    }
    for (let col = 0; col < board.length; col++) {
      if (isValidMove(board, row, col)) {
        board[row][col] = 'Q';
        solve(board, row + 1, solutions);
        board[row][col] = '.';
      }
    }
  }

//   This solution uses a backtracking algorithm to find all possible solutions for the n-Queens problem. The nQueens function creates an empty board of size nn, and calls the solve function to find all solutions, passing in the empty board, an initial row index of 0, and an empty array to store the solutions. The createEmptyBoard function creates an empty board of size nn, filled with '.' characters. The isValidMove function checks if a particular position on the board is a valid move by checking if any queens are currently placed on the same column or on the same diagonal. The solve function uses a nested loop to iterate through all positions on the board, and for each position, it calls the isValidMove function to check if placing a queen at that position is a valid move. If it is, it places a 'Q' at that position, and recursively calls the solve function with the updated board and the next row. If the row is equal to n, that means all queens are placed in the board, so it pushes a copy of the board to the solutions array. Finally, it backtracks by replacing the 'Q' with a '.' and continues with the next column.