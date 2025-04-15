/*

1. Find the sum of all integers from 1 to N.

Write a function to calculate the sum of all numbers from 1 to N.

*/


function SumOfNumber(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    console.log(sum);
}

SumOfNumber(5)