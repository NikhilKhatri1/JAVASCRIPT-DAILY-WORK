const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countChar(arr) {
    const n = arr.length;
    let charCount = {};
    for (let i = 0; i < n; i++) {
        let count = arr[i];
        if (charCount[count]) {
            charCount[count] += 1;
        } else {
            charCount[count] = 1;
        }
    }

    for (let char in charCount) {
        console.log("Char : ", char + " " + "Count : ", charCount[char]);
    }
};

rl.question("Enter the Array value with space Seperated ", (arr) => {
    const charArray = arr.split("")
    countChar(charArray);
    rl.close();
});