// Prompt
// Given a 2D rectangular matrix, return all of the values in a single, linear array in spiral order. Start at (0, 0) and first include everything in the first row. Then down the last column, back the last row (in reverse), and finally up the first column before turning right and continuing into the interior of the matrix.

//resources: https://www.youtube.com/watch?v=ajSXu2D2gzg&t=0s
 

// For example:

//  1  2  3  4
//  5  6  7  8
//  9 10 11 12
//  13 14 15 16

// Returns:

 

// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

console.log({"arr12 ": arr[1][2]})
function spiralTraversal(matrix) {
  /* your code here */
  let spiral = matrix[0];
  for (let i =1; i<matrix.length; i++) {
    spiral.push(matrix[i][matrix[i].length-1])
  }
  for (i = matrix.length-1; i>=0; i--) {
    spiral.push(matrix[matrix.length-1][i])
  }
  for (i = 0; i < matrix[2].length-1; i++){
    spiral.push(matrix[1][i])
  }
  return spiral;
}

console.log(spiralTraversal(arr))