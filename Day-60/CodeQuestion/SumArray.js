/*

5. Sum of All Numbers in an Array

Question: Write a function that sums all the numbers in an array.

    Example Input: [1, 2, 3, 4]

    Example Output: 10

*/

function SumOfArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

let input = [1, 2, 3, 4]

SumOfArray(input)

let myArray = [1, 2, 3, 4]
let sumOfArr = myArray.reduce((acc, curr) => acc + curr, 0);

console.log(sumOfArr)