// Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row. For example, if given the following input:

const array = [
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]

// Here, the result is 11 because of the path 2 + 3 + 5 + 1.

function triangleLowestPath(arr) {
  /* your code here */
  // row major traversal
  // min equals first value which is then compared with each value in that array.
  // sum and then check next row with the same procedure
  let sum = 0;
  for (let row=0; row<arr.length; row++) {
    let min = arr[row][0];
    // console.log(min)
    for (let col=0; col<arr[row].length; col++) {
        if (min > arr[row][col]) min = arr[row][col]
    }
    // console.log({'final min': min})
    sum += min;
  }
  return console.log(sum);
}

triangleLowestPath(array)

// alternate solution bottom up
function triangleLowestPathE(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
      }
    }
    return triangle[0][0];
  }

console.log(triangleLowestPathE(array))

// Here's the recursive DFS implementation. We'll use
// extra row and column parameters with defaults to
// keep track of where we are.
function triangleLowestPath(triangle, row = 0, col = 0) {
    if (row >= triangle.length) return 0;
  
  
    const below = triangleLowestPath(triangle, row + 1, col);
    const next = triangleLowestPath(triangle, row + 1, col + 1);
  
  
    return triangle[row][col] + Math.min(below, next);
  }
  
  
  // And here is the iterative solution.
  function triangleLowestPath(triangle) {
  
  
    // Start at the second row up from the bottom.
    for (let row = triangle.length - 2; row >= 0; row--) {
  
  
      // Walk through that row and add the small of the two
      // available options from the row below.
      for (let col = 0; col < triangle[row].length; col++) {
        triangle[row][col] +=
          Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
      }
    }
  
  
    // Now the lowest sum is at the top!
    return triangle[0][0];
  }