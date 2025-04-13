 /* 
Question: Write a function to reverse a string without using built-in reverse methods.

Example Input: "hello"

Example Output: "olleh"

*/

const value = prompt("Enter the Value = ");
let rev = [];
for (let i = value.length - 1; i >= 0; i--) {
    rev.push(value[i])
}
console.log(rev.join(""))