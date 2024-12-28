// Given an array of integers, where all elements but one occur twice, find the unique element.

//     Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4.


function lonelyinteger(a) {
    // Write your code here
    let charCount = {};
    for (let i = 0; i < a.length; i++) {
        let char = a[i];
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }
    for (let key in charCount) {
        if (charCount[key] === 1) {
            return parseInt(key);
        }
    }
}
let a = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(a))

