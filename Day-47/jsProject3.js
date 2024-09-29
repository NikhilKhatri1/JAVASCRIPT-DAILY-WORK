const prompt = require("prompt-sync")()

function ShowInfo() {
    console.log("Management System")
    console.log("=================")

    console.log("1. Add a Contact")
    console.log("2. Delete a Contact")
    console.log("3. View Contact")
    console.log("4. Search Contact")
    console.log("5. Exit")
}

function AddContact() {

}
function DeleteContact() {

}

function ViewContact() {

}
function SearchContact() {

}
ShowInfo()

const flag = true;

while (flag) {
    const number = prompt("Enter the number (1-5) : ")
    switch (number) {
        case "1":
            AddContact();
            break;
        case "2":
            DeleteContact();
            break;
        case "3":
            ViewContact();
            break;
        case "4":
            SearchContact();
            break;
        case "5":
            flag = false;
            break;
        default:
            console.log("Type number (1-5)");
            break;
    }
}