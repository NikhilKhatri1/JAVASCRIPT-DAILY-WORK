/*

9. Remove Duplicates from an Array

Write a function that removes duplicate values from an array.

*/

function removeDuplicate(arr) {
    let noDuplicate = [];
    for (let i = 0; i < arr.length; i++) {
        if (!noDuplicate.includes(arr[i])) {
            noDuplicate.push(arr[i]);
        }
    }
    console.log(noDuplicate);
}

removeDuplicate([1, 2, 2, 3, 3, 5]);    // [ 1, 2, 3, 5 ]