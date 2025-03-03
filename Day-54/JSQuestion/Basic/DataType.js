// coercion

var add = '5' + 5;
// console.log(add);

var divide = 'string' % 5;
// console.log(divide);


var a;
// console.log(a);   // undefined
a = 10;
// console.log(a);  // 10


// variable shadowing

let x = 10;
function outer() {
    let x = 20;
    if (true) {
        let x = 30;
        console.log("x of Inner if Scope", x);  // 30
    }
    console.log("x of Inner function Scope", x);  // 20
}
outer();
console.log("x of outer Scope", x);   // 10
