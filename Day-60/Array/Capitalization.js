// capitalize the first letter

function Capitalization(str) {
    // convert to array with lower case
    const arr = str.toLowerCase().split(' ');

    const newArr = arr.map(item => item.slice(0, 1).toUpperCase() + item.slice(1, item.length));
    const result = newArr.join(' ');

    console.log(result);

}


Capitalization('heLLo wOrLd');