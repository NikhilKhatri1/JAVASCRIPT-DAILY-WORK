/*
12. Count Vowels in a String

Write a function that counts the number of vowels in a string.

*/

function CountVowel(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    let foundVowel = [];

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
            foundVowel.push(string[i]);
        }
    }
    console.log(`Vowels in array "${foundVowel.join("")}" count is "${count}"`);
}
const string = "Hello";
CountVowel(string);