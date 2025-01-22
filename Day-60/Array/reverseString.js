// reverse String


function reverseString(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
        // push only work on array
        
        // reverseStr.push(str[i]);
    }
    return reverseStr;

}

const str = 'Hello'
console.log(reverseString(str));