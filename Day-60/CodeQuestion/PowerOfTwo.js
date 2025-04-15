/*

8. Check if a Number is a Power of Two
Write a function to check if a given number is a power of two.

*/

function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(isPowerOfTwo(32)); 