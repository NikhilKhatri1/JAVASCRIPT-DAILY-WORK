const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function hello(name) {
    console.log(`Hello ${name}`)
}

rl.question("Enter Your name : ", (name) => {
    hello(name);
    rl.close();
});
