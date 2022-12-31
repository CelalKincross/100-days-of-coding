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

// foolishly had the wrong input... created a second arr1 afterward
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

let arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
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


// better answer from Formation
// traversals over rows and columns, both forward and backwards
// problems: how to keep track of directions, and turn corners without duplicating values

function spiralTraversalAns(matrix) {
  // deal with edge casse fo no rows (0x0) matrix
  if (matrix.length === 0) return []

  const output = [];

  // all limit indices are inclusive.
  // initailize a row start and end indices
  let rstart = 0; rend = matrix.length-1;

  // initialize a column start and end indices;
  let cstart =0, cend = matrix[0].length-1;

  // use 0 as across, 1 as down, 2 as across backwards and 3 as up
  let direction = 0;

  // while thes is work to do in any direction, row or column

  while (rstart <= rend && cstart <= cend) {
     // use a diferent loop based on direction
     switch (direction) {
      case 0: // across left to right
        for (let i = cstart; i < cend; i++) {
          output.push(matrix[rstart][i]);
        }
        rstart++;
        break;

      case 1: //down
        for (let i = rstart; i <= rend; i++) {
          output.push(matrix[i][cend]);
        }
        cend--;
        break;

      case 2: // across right to left
        for (let i = cend; i >= cstart; i--) {
          output.push(matrix[rend][i]);
        }
        rend--;
        break;

      case 3: // up
        for (let i = rend; i>=rstart; i--) {
          output.push(matrix[i][cstart]);
        }
        cstart++;
        break;
      }
      // move to the next direction, mod 4 to wrap around direction 0 - 3
    direction = (direction + 1) % 4;

  }

  return output;
}

console.log({"ans ":spiralTraversalAns(arr1)})