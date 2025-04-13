/*
7. Find Factorial of a Number

Question: Write a function to find the factorial of a number.

    Example Input: 5

    Example Output: 120

*/

function FactorialNumber(num) {
    let fact = 1;
    for (let i = num; i >= 1; i--) {
        fact *= i;
    }
    console.log(fact)
}

FactorialNumber(5)