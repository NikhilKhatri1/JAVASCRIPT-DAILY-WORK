const PromptSync = require("prompt-sync")

function TikTak(turn, board) {
    while (true) {
        const row = parseInt(prompt("Enter the row : "));
        const col = parseInt(prompt("Enter the Col : "))
        if (isNaN(row) || row < 1 || row > 3) {
            console.log("Invalid move in row")
        }
        else if (isNaN(col) || col < 1 || col > 3) {
            console.log("Invalid move in column")
        }
        else if (board[row - 1][col - 1] === " ") {
            console.log("Invalid move")
        }
        else {
            board[row - 1][col - 1] = turn;
            break;
        }
    }
}
 
const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]