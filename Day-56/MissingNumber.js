// find the missing number from 1 to 10 array

function findMissingNumber(arr) {
    const expectedSum = 55;  // Sum of numbers from 1 to 10 (1 + 2 + ... + 10 = 55)
    const actualSum = arr.reduce((sum, num) => sum + num, 0);  // Sum of elements in the array
    return expectedSum - actualSum;  // The missing number
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // Missing 10
console.log(findMissingNumber(arr));  // Output: 10
