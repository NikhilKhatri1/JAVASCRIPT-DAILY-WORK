/*
3. Check if a Number is Prime

Write a function that checks whether a number is prime.
*/

function CheckPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(CheckPrime(5));
