function matchingStrings(strings, queries) {
    // Create a frequency map to count occurrences of each string in 'strings'
    let freqMap = {};

    // Populate the frequency map
    for (let i = 0; i < strings.length; i++) {
        const str = strings[i];
        if (freqMap[str]) {
            freqMap[str]++;
        } else {
            freqMap[str] = 1;
        }
    }

    // Create the result array by checking how many times each query appears in the map
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        result.push(freqMap[queries[i]] || 0); // Return 0 if query does not exist in map
    }

    return result;
}

const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];

console.log(matchingStrings(strings, queries));
// Output: [2, 1, 0]
