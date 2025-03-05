// to display and toggle content
function Display() {
    const Heading = document.querySelector(".Heading");
    const Para = document.querySelector(".para");
    const list = document.getElementById("list");

    // Toggle the visibility of the content on each click
    if (Heading.textContent === "Hello World!") {
        // If content is already displayed, hide it
        Heading.textContent = "";
        Para.textContent = "";
        list.innerHTML = "";  // Remove the list
    } else {
        // Display the content
        Heading.textContent = "Hello World!";
        Para.textContent = "This is Paragraph";

        // Create list of fruits
        const listOfFruits = ["Apple", "Banana", "Mango", "Orange"];
        const ul = document.createElement("ul");

        listOfFruits.forEach(fruit => {
            const li = document.createElement("li");
            li.innerText = fruit;
            ul.appendChild(li);
        });

        // Append the list
        list.appendChild(ul);
    }
}
