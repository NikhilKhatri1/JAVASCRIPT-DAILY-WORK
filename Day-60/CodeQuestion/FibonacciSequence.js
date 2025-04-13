const number = parseInt(prompt("Enter the Number = "));
let a = 0
let b = 1
let arr = []
for (let i = 0; i < number; i++) {
    let next = a + b
    arr.push(a);
    a = b;
    b = next;
}
console.log(`Fibonacci Sequence of number ${number} is ${arr} and Value is ${a}`)
