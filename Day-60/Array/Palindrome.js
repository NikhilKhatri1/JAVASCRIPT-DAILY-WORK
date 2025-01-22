// palidrome


function palidrome(str) {
    const revStr = str.split('').reverse().join('');
    if (str === revStr) {
        return true;
    } else {
        return false;
    }
}

console.log(palidrome('acca'));
