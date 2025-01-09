

let heading = document.getElementById('heading');
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {

    if (heading.style.display === 'block' || heading.style.display === '') {
        heading.style.display = 'none'
        btn.textContent = 'Show';
    }
    else {
        heading.style.display = 'block';
        btn.textContent = 'Hide';
    }

})