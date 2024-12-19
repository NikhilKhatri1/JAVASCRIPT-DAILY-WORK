// remove element from array


// function removeElement(arr, x, y) {
//     let updatedArray = arr.filter(val => val !== x && val !== y);
//     console.log(updatedArray)
// }

// const arr = [1, 2, 3, 4, 2, 1, 2];
// const x = parseInt(prompt("Enter the first number "));
// const y = parseInt(prompt("Enter the second number "));


// removeElement(arr, x, y);


const readline = require('readline');

// Create an interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to remove elements from the array
function removeElement(arr, x, y) {
    let updatedArray = arr.filter(val => val !== x && val !== y);
    console.log(updatedArray);
}

// Ask the user for input
rl.question("", (x) => {
    rl.question("", (y) => {
        // Convert inputs to integers
        const arr = [1, 2, 3, 4, 2, 1, 2];
        removeElement(arr, parseInt(x), parseInt(y));

        // Close the readline interface after input
        rl.close();
    });
});
