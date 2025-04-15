/*

2. Reverse a Number

Write a function to reverse a given integer.

*/

function ReverseNumber(num) {
    let reverseNum = parseInt(num.toString().split("").reverse().join(""));
    console.log(reverseNum);
}

ReverseNumber(1234);