let btn = document.querySelector('.increment-btn');
let btnCount = document.querySelector('.increment-pressed');
let count = document.querySelector('.increment-count');

let pressedCount = 0;
let triggerCount = 0;


function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    }
}


const debounceCount = debounce(() => {
    count.innerHTML = ++triggerCount;
}, 800)




btn.addEventListener('click', () => {
    btnCount.innerHTML = ++pressedCount
    debounceCount();
})