// how to find duplicate element in a given array
// arr = [1, 2, 3, 1, 2, 2, 1, 1, 3];


// function duplicateElement(arr) {
//     let duplicateValue = [];
//     for (i = 0; i < arr.length; i++) {
//         if (!duplicateValue.includes(arr[i])) {
//             duplicateValue.push(arr[i])
//         }
//     }
//     console.log(duplicateValue)
// }

// const arr = [1, 2, 3, 1, 2, 2, 1, 1, 3];
// duplicateElement(arr);

function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {  // Start the loop from 1
        if (min > arr[i]) {
            min = arr[i];  // Update min if a smaller value is found
        }
        if (max < arr[i]) {
            max = arr[i];  // Update max if a larger value is found
        }
    }
    console.log("Min = ", min);
    console.log("Max = ", max);
}

const arr = [3, 1, 3, 2, 4];
minMax(arr);
