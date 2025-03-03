// closure


// function outer() {
//     let count = 0;
//     return function inner(name) {
//         count++;
//         console.log(`Hi, ${name} your number is ${count}`);
//     }
// }

// let greeting = outer();
// let secondGreeting = outer();
// greeting("Alice");
// greeting("kone");
// secondGreeting("Bob");

// question 2

// for (var i = 0; i < 3; i++) {
//     setTimeout(function () { alert(i); }, 1000 + i);
// }   // 3 3 3



// addsix in return


function createBase(n) {
    let count = n;
    return function (m) {
        count = n + m;
        console.log(count);
    }
}

let addSix = createBase(6);
addSix(10);