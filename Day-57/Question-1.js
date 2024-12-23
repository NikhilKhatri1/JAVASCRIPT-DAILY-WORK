// /*
// There is a large pile of socks that must be paired by color.Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

//     example:
// n = 7
// ar = [1, 2, 1, 2, 1, 3, 2]

// There is one pair of color1 and one of color2.There are three odd socks left, one of each color.The number of pairs is 2 .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

//     int n: the number of socks in the pile
//     int ar[n]: the colors of each sock

// Returns

// int: the number of pairs

// Input Format

// The first line contains an integer
//     , the number of socks represented in .
// The second line contains space - separated integers, , the colors of the socks in the pile.

//      --------
//     9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// Sample Output

// 3   
// */

// =============================  Solution ===================================== //

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sockMerchant(n, arr) {
    let colorCount = {};
    for (let i = 0; i < n; i++) {
        let color = arr[i];
        if (colorCount[color]) {
            colorCount[color] += 1;
        } else {
            colorCount[color] = 1;
        }
    }

    let pairs = 0;
    for (let count in colorCount) {
        pairs += Math.floor(colorCount[count] / 2);
    }

    return pairs;
}

rl.question("Enter number of socks: ", (n) => {
    rl.question("Enter the array of sock colors (space-separated): ", (arr) => {
        // Convert input string to an array of integers
        const sockArray = arr.split(" ").map(Number);

        // Call sockMerchant function
        const result = sockMerchant(sockArray.length, sockArray);
        console.log("Number of pairs: " + result);
        rl.close();
    });
});
