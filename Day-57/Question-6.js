// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9

// The left - to - right diagonal 1 + 5 + 9 = 15 .
// The right to left diagonal  3+5+9=17.
// Their absolute difference is |15-17| = 2.

function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;
    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][n - 1 - i];
    }
    let result = Math.abs(primarySum - secondarySum)
    return result
}

const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

console.log(diagonalDifference(arr))
