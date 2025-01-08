

let btn = document.querySelector('.increment-btn');
let btnPressed = document.querySelector('.increment-pressed');
let count = document.querySelector('.increment-count');


let pressedCount = 0;
let triggeredCount = 0;

// using library lodash

let start = new Date().getTime();

const debounce = _.debounce(() => {
    let now = new Date().getTime();
    console.log(now - start);

    count.innerHTML = ++triggeredCount;
}, 800)

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;
    debounce();
})