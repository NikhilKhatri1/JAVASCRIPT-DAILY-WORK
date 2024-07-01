// Function to load categories into the dropdown
function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(categories => {
            categories.unshift("all"); // Adding "all" option
            const selectCategories = document.getElementById("lstCategories");
            categories.forEach(category => {
                let option = document.createElement("option");
                option.text = category.toUpperCase();
                option.value = category;
                selectCategories.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading categories:', error));
}

// Function to load products based on selected category
function LoadProducts(url) {
    fetch(url)
        .then(response => response.json())
        .then(products => {
            const productContainer = document.getElementById("product-container");
            productContainer.innerHTML = ""; // Clear previous content
            products.forEach(product => {
                let card = document.createElement("div");
                card.className = "card m-2 p-2";
                card.style.width = "200px";
                card.innerHTML = `
                    <img src="${product.image}" class="card-img-top" height="140">
                    <div class="card-header" style="height:100px">
                        <p>${product.title}</p>
                    </div>
                    <div class="card-body">
                        <dl>
                            <dt>Price</dt>
                            <dd>$ ${product.price}</dd>
                            <dt>Rating</dt>
                            <dd>${product.rating.rate} <span class="bi bi-star-fill text-success"></span> [${product.rating.count}]</dd>
                        </dl>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-warning w-100 bi bi-cart3" onclick="AddToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
                productContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

// Function to handle category change event
function CategoryChange() {
    let selectedCategory = document.getElementById("lstCategories").value;
    let url = selectedCategory === "all" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${selectedCategory}`;
    LoadProducts(url);
}

// Function to initialize the page
function BodyLoad() {
    LoadCategories(); // Load categories on page load
    LoadProducts("https://fakestoreapi.com/products"); // Load products initially
}

// Example function to add product to cart (needs implementation)
function AddToCart(productId) {
    // Implement adding product to cart logic here
    console.log(`Product with ID ${productId} added to cart.`);
}
