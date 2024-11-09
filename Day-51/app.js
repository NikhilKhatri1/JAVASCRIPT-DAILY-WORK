let x = 10;
function varShadow() {
    let x = 20;
    console.log(x)   // 20
    if (true) {
        let x = 30;
        console.log(x)    // 30
    }
    console.log(x)  //20

}
varShadow()
console.log(x)   //10