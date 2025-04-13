/*

3. Check for Palindrome

    Question: Write a function that checks if a given string is a palindrome.

    Example Input: "racecar"

    Example Output: true

*/

function Palindrome(myString) {
    let normalString = myString.replace(/\s+/g, "").toLowerCase();
    console.log(normalString);
    let reverseString = normalString.split("").reverse().join("");
    console.log(reverseString);

    return normalString === reverseString;
}
console.log(Palindrome("racecar"));