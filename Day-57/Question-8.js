// A pangram is a string that contains every letter of the alphabet.
// Given a sentence determine whether it is a pangram in the English alphabet.
// Ignore case.
// Return either pangram or not pangram as appropriate.


function pangrams(s) {
    // Write your code here

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let noSpaceStr = s.replace(/\s/g, '');
    
    let strLowerCase = noSpaceStr.toLowerCase();

    let strArray = strLowerCase.split('');

    let result = [...new Set(strArray)].sort().join('');

    return result == alphabet ? 'pangram' : 'not pangram';
}
