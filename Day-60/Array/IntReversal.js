// Integer Reversal

const IntReversal = (int) => {
    const revInt = parseInt(int.toString().split('').reverse().join(''));
    const result = revInt * Math.sign(int);
    console.log(result);
    // console.log(typeof revInt); 

}

IntReversal(-1234);