var arr = ['a', 'b', 'c'];
const ArrayString = arr.toString();
console.log(ArrayString);

// arr.join('|');
const ArrayJoin = arr.join('|');
console.log(ArrayJoin);
// console.log(arr); // does not modify original


// pop and push

var num = [1, 2, 3, 4];
// num.pop();
console.log(num.pop())
// num.push(5);
console.log(num);


// shift and unshift
var num = [1,2,3,4]
num.shift();
console.log(num);

num.unshift(6);
console.log(num);

// splice and slice

var num = [1, 2, 3, 4,6,5,7,9,0];
console.log(num.slice(1, 4));
console.log(num);   // using operation slice will not change original


num.splice(2, 0, 8, 5);
console.log(num);  // change the original array

// use toSplice()=>for original remain same

const toSplicedArr = num.toSpliced(1, 0, 9, 9);
console.log(toSplicedArr)