// Prompt

// Given a rectangular 2D array of integers, return true if all rows and all columns are monotonically increasing. This means that every successive value along all rows and columns must be AT LEAST as large as what came before.



// Example:

const m1 = [
    [0, 0, 0, 1],
    [1, 1, 1, 2],
    [2, 3, 4, 5]
]

// Returns true but this next one returns false.

const m2 = [
    [0, 0, 0, 1],
    [1, 1, 3, 2],
    [2, 3, 4, 5]
]

// problem will b approached in three parts after initializing row-major search:
// Part 1: row 0 not last column--check values ahead 
// Part 2: last column
// Part 3: all other rows
function isMatrixMonotonic(matrix) {
    /* your code here */
    for (let r=0; r < matrix.length; row++) {
        const rowLength = matrix[r].length-1
        for (let c=0; c < rowLength; c++) {
            // save value
            const value = matrix[r][c];
            const next = matrix[r][c+1];
            const prevUp = matrix[r-1][c];
            
            // Part 1: row 0 not last column--check value ahead 1
            if (r == 0 &&  c < rowLength && value>next) {
                return false;
            } else if (c == rowLength && r>0 && value> prevUp) {
                return false;
            } else if (r > 0 &&  c < rowLength && (value>next || value< prevUp)) {
                return false;
            }

        }
    }
}