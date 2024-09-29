const { listenerCount } = require("process")

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
    const name = prompt("Name : ")
    const email = prompt("Email : ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact)
    console.log("Contact Added...")
}
function DeleteContact() {
    console.log("Contact Ids")
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i]
        console.log(`${(i + 1).toString()} : ${contact.name}`)
    }
    const number = parseInt(prompt("Enter the id : "))
    if (isNaN(number) || number > contacts.length) {
        console.log("Invalid input...")
        return
    }
    contacts.splice(number - 1, 1)
    console.log("Contact Removed....")
}

function ViewContact(contacts) {
    if (contacts.length === 0) {
        console.log("No Available Contacts ")
    }
    else {
        contacts.map(contact => {
            console.log("+++++++++++++++++++++");
            console.log(`Name : ${contact.name}`)
            console.log(`Email : ${contact.email}`)

        })
    }
}
function SearchContact() {
    const SearchString = prompt("Search Contact : ").toLowerCase();
    const result = [];
    for (let contact of contacts) {
        if (contact.name.toLowerCase().includes(SearchString)) {
            result.push(contact);
        }
        ViewContact(result)
    }
}
const contacts = []
const flag = true;
ShowInfo()

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
            ViewContact(contacts);
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