/* 
8. Find the Missing Number

Given an array containing n distinct numbers taken from 1 to n+1, find the missing number.

*/

function findMissingNumber(arr) {
    for (let i = 0; i <= arr.length; i++) {
        let num = arr[0];
        if (num === arr[i]) {
            num += 1;
        }
        console.log(num);
        break;
    }
}

findMissingNumber([1, 3, 4, 5]);