
let i = 0;
function changeName() {
    document.getElementById("demo").innerText = `${arr[i]}`;
    i++;
    if (i > arr.length) {
        i = 0;
    }
}

const arr = ['raj', 'amit', 'kalu', 'lalu'];