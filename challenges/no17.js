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
