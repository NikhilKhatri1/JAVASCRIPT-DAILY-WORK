let div = document.querySelector('div');

let form = document.querySelector('form');

let button = document.querySelector('button');


// event bubbling

// div.addEventListener('click', () => {
//     alert('div')
// });

// form.addEventListener('click', () => {
//     alert('form')
// });

// button.addEventListener('click', () => {
//     alert('button')
// });

// event capturing
// div.addEventListener('click', () => {
//     alert('div')
// }, {
//     capture: true
// });

// form.addEventListener('click', () => {
//     alert('form')
// }, {
//     capture: true
// });

// button.addEventListener('click', () => {
//     alert('button')
// }, {
//     capture: true
// });


// event target || this.target || event.currentTarget

div.addEventListener('click', func);
form.addEventListener('click', func);
button.addEventListener('click', func);


function func(event) {
    alert('Current Target = ' + event.currentTarget.tagName +
        ' Target = ' + event.target.tagName +
         ' this.target = ' + this.tagName);
}