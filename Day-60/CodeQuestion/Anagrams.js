/*

10. Check if a String is an Anagram

Write a function that checks if two strings are anagrams.

*/

function AreAnagram(str1, str2) {
    let string1 = str1.replace(/\s+/g, "").toLowerCase();
    let string2 = str2.replace(/\s+/g, "").toLowerCase();
    let flag = true
    if (string1.length !== string2.length) {
        flag = false
    }
    else {
        for (let i = 0; i < string1.length; i++) {
            if (!string2.includes(string1[i])) {
                flag = false
            }
        }
    }
    console.log(flag);
}

AreAnagram("silent", "Listen");
AreAnagram("hello", "world23");