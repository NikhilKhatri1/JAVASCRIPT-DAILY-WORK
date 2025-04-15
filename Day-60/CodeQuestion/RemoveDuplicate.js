/*

9. Remove Duplicates from an Array

Write a function that removes duplicate values from an array.

*/

function RemoveDuplicate(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // Only push the element if it's not already in newArr
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

RemoveDuplicate([1, 2, 3, 1, 2]); // Output: [1, 2, 3]
