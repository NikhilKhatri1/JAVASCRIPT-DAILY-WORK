// custom Array

class MyArray {
    constructor() {
        this.length = 0,
            this.data = {}
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];
        // re-indexing
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    deleteByIndex(index) {
        const indexItem = this.data[index];
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return indexItem;
    }
}

const myNewArray = new MyArray();

myNewArray.push(3);
myNewArray.push('apple');
myNewArray.push(true);

// console.log(myNewArray);

// ----- get Item ----- //
// console.log(myNewArray.get(2));

// --------- pop Method --------- //

// console.log(myNewArray.pop());

// -------- Shift Method----------  //
/*

console.log(myNewArray);

console.log(myNewArray.shift());

console.log(myNewArray);

*/


// ----- delete by index ----- //
/*

console.log(myNewArray);
console.log(myNewArray.deleteByIndex(1));
console.log(myNewArray);

*/