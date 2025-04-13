/*
4. Find the Largest Number in an Array

Question: Write a function that finds the largest number in an array.

    Example Input: [1, 3, 5, 7, 2]

    Example Output: 7

*/

function FindLargest(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum
}

let Input = [1, 3, 5, 7, 2]


console.log(FindLargest(Input));

function LargestVal(arr) {
    return Math.max(...arr)
}

let newArr = [1, 3, 5, 7, 2]

console.log(LargestVal(newArr));