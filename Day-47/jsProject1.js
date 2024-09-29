const { log } = require("console")

const prompt = require("prompt-sync")()

const name = prompt("what is your name? : ")

console.log(`Hello ${name}, How are you?`)

const ShouldWePlay = prompt('Do you want to Play? Yes/no : ')


if (ShouldWePlay.toLowerCase() === "yes") {
    //Game Logic

    const LeftorRight = prompt("You Enter the maze, do you want to go right or left? : ")

    if (LeftorRight.toLowerCase() === "left") {
        console.log("You go to left and see the bridge....");
        const cross = prompt("Do you want to cross the bridge? : ")
        if (cross.toLowerCase() === "yes") {
            console.log("You cross but the bridge was weak and broke and you fell, you lost...")
        }
        else {
            console.log("Good Choice... you Win")
        }
    }
    else {
        console.log("You go Right and fall off a cliff....")
    }

}
else if (ShouldWePlay.toLowerCase() === "no") {
    console.log("Okay :(")
}
else {
    console.log("Invalid input...")
}

