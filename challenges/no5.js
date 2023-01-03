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
    let next, prevUp;
    for (let r=0; r < matrix.length; r++) {
        const rowLength = matrix[r].length-1;
        for (let c=0; c < rowLength; c++) {
            // save value
            const value = matrix[r][c];
            console.log({"matrix[r][c+1]": matrix[r][c+1]})
            if (c<rowLength) {next = matrix[r][c+1];}
            

            if (r>1) {const prevUp = matrix[r-1][c];}
            // Part 1: row 0 not last column--check value ahead 1
            console.log({r: r, c: c, next: next, rowlength: rowLength})
            if (r == 0 &&  c < rowLength-1 && value > next) {
                return false;

            // Part 2: last column
            } else if (c == rowLength && r>0 && value> prevUp) {
                return false;

            // Part 3: all other rows
            } else if (r > 0 &&  c < rowLength && (value>next || value< prevUp)) {
                return false;
            }
        }
    }
    return true
}

console.log(isMatrixMonotonic(m2));

//Solution Works!

// Of course, Formation's solution is far more elegant and succint 

function isMatrixMonotonicAns(matrix) {

    // row-major traversal over matrix
    for (let r=0; r<matrix.length; r++) {
        for (let c=0; c<matrix[r].length; c++) {
            const value= matrix[r][c];
            // check value on the second row and later with the value above it
            if (r>0 && matrix[r-1][c] > value) return false;
            
            // check column on second, column and beyond it with value to left
            if (c>0 && matrix[r][c-1] > value) return false;
        }
    }

    // else return true 

    return true;
}

console.log({Formation: isMatrixMonotonicAns(m2)})