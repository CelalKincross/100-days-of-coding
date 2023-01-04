// 6. Prompt

// Given a matrix that is monotonically increasing along all rows and columns, as well as a value, k, return true if the value exists in the matrix and false otherwise.


// - Strategy: Use Binary Search-start in the middle row, if in the preceding row is lower and the value in the next row is greater, check current row. else row++? 

const m1 = [
    [0, 1, 2, 3],
    [2, 3, 5, 5],
    [3, 4, 6, 7]
]
// attempt 1
// not working attempt at binary search on a matrix-- too complex for this solution
function findInMonotonic(matrix, k) {
  /* your code here */
  // find bottom corner
  let middleR = Math.floor((matrix.length-1)/2)
  // check if the value above is equal  
  // check if row before is less than curr value and row after is greater than curr value
  // if it is check row
  console.log(middleR)
  let end;
  let start;
  for (let r=middleR; r<matrix.length; r++) {
      const value = matrix[r][matrix[r].length-1];
      if (k< value) {
        end = middleR;
        middleR == Math.floor((matrix.length-1)/2);
      }

        // for (let c=0; c< matrix[r].length; r++) {
        //     if (matrix[r][c]==k) return true;
        // i   f (matrix[r][c]<k)
    // }
  }

  // check if row before is greater than, if it is 
  // row -2
  // check it row above is greater than  is less than and d, if it is then row if it is then row 
}

findInMonotonic(m1, 2)

// Formation solution

function findInMontonicAns(matrix, k) {
    // check matrix and find bottom right corner
    // bottom right corner is useful because if the target is greater move over one col if not move down one row
    let numr = matrix.length;
    if (numr == 0) return false;

    let row = numr -1;
    let col = 0;
    let ncol = matrix[row].length;
    
    while (row >=0 && col < ncol) {
        let value = matrix[row][col];
        if (k == value) return true;
        if ( k > value) {
            col++
        } else {
            row--
        }
    }
    return false;
}

console.log(findInMontonicAns(m1, 17))