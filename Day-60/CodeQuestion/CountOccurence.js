/*

6. Count Occurrences of a Character in a String

    Question: Write a function that counts the number of occurrences of a specific character in a string.

    Example Input: "hello world", "o"

    Example Output: 2

*/

function CountOccurence(myString, char) {
    let count = 0;
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === char) {
            count += 1;
        }
    }
    console.log(count);
}
let myString = "hello world"
let char = "o"
CountOccurence(myString, char);


let charCount = [...myString].filter(a => char === a).length;

console.log(charCount)

// Converting to Array using Spread Operator
let newString = [...myString];
console.log(newString)