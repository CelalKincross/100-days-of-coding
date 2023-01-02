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

function isMatrixMonotonic(matrix) {
    /* your code here */
    for (let r=0; r < matrix.length; row++) {
        for (let c=0; c < matrix[r].length; c++) {
            const value = matrix[r][c];

            if (r == 0 &&  c < matrix[r].length-1 && matrix[r][c]>matrix[r][c +1]) {
                return false;
            } else if (c == matrix[r].length-1 && r>0 && matrix[r][c]> matrix[r][c-1]) {
                return false;
            } else if (r > 0 &&  c < matrix[r].length-1 && (matrix[r][c]>matrix[r][c +1] || matrix[r][c]< matrix[r-1][c])) {
                return false;
            }

        }
    }
}