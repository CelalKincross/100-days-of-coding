// Prompt
// A Toeplitz Matrix is one where the values on every diagonal are the same: Given a 2d matrix (multidimensional array), return true if the input is a Toeplitz matrix and false otherwise.

 

// Example of a valid Toeplitz matrix:

// 1 2 3 4 5 6 
// 5 1 2 3 4 5
// 6 5 1 2 3 4
// 7 6 5 1 2 3
// 8 7 6 5 1 2
// 9 8 7 6 5 1
const matrix = [
[1, 2, 3, 4],
[5, 1, 2, 3],
[6, 5, 1, 2],
[7, 6, 5, 1]
]

function isToeplitz(m) {
  /* your code here */
  let fRow = m[0];
  let lRow = m[m.length-1];


// top diagonal half works 

  for (let row = 1; row < m.length; row++) {
    for (let col = row; col < fRow.length; col++) {
      if (m[row][col] != fRow[col-row]) {
        return console.log('top false');
      }
    }
  }

  //bottom diagonal off 
  for (let row = 1; row < m.length-1; row++) {
    for (let col = 0; col<row; col++) {
      console.log({"m[row][col]": m[row][col],"lRow[col]": lRow[(m.length-row)-1]})
      if (m[row][col] != lRow[(m.length-row)-1]) {
        console.log({"m[row][col]": m[row][col], "lRow[(m.length-col)-1]":lRow[(m.length-col)-1]})
        console.log({row: row, col: col})
        return console.log('bot false');
      }
      console.log('good')
    }
  }
  return console.log('same')
}

isToeplitz(matrix)


// answer from formation

function isToeplitzAns(matrix) {
  // row-major traversal using two loops
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      const value = matrix[r][c];

      // At the current value, check one level up and to the left to see if the value is the same-- start from the second row so r and c are greater than 0 
      // then check value
      if (r > 0 && c > 0 && matrix[r-1][c-1] != value){
        return false;
      }
    }
  }

  // no problems then return true
  return true;
}

console.log(isToeplitzAns(matrix))