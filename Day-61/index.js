// Fetch data from API
function bodyLoad() {
    const img = document.getElementById("img");
    img.src = "./noImage.png";
    async function fetchData(pokemonName) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) throw new Error("Not Found");
            const data = await response.json();

            console.log(data);
            // set image
            img.src = data.sprites.front_default;  // Assuming the image is under 'sprites.front_default'
        } catch (error) {
            console.error(error);
            img.src = "./noImage.png"
        }
    }

    // Event listener for the button click
    const btn = document.getElementById("btn");
    const pokemonName = document.getElementById("pokemonName");
    btn.addEventListener("click", () => {
        // Check if the input field is empty
        if (pokemonName.value.length === 0) {
            const img = document.getElementById("img");
            img.src = "./noImage.png";  // Default image if no Pokémon name is entered
        } else {
            fetchData(pokemonName.value);  // Pass the value from the input field
        }
    });
}
