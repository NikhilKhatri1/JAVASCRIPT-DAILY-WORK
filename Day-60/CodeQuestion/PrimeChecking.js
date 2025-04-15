/*

4. Check if a Number is Prime

Write a function to check if a given number is prime.

*/

function CheckPrime(n) {
    if (i <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

const result = CheckPrime(5);
console.log(result)