// Array Chunk


function ArrayChunk(arr, size) {
    let chunked = [];
    let index = 0;

    while (index < arr.length) {
        const chunk = arr.slice(index, index + size);
        console.log('-----', chunk);
        chunked.push(chunk);
        index += size;
    }
    return chunked;

}

const result = ArrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
console.log(result);