// Function to load categories into the dropdown
function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
        .then(function (response) {
            return response.json();
        })
        .then(function (categories) {
            // Add 'all' option at the beginning of categories
            categories.unshift("all");
            categories.map(function (category) {
                var option = document.createElement("option");
                option.text = category.toUpperCase();
                option.value = category;
                document.getElementById("lstCategories").appendChild(option);
            });
        });
}

// Function to load products based on URL
function LoadProducts(url) {
    document.querySelector("main").innerHTML = "";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            products.map(function (product) {
                var div = document.createElement("div");
                div.className = "card m-2 p-2";
                div.style.width = "200px";
                div.innerHTML = `
                <img src=${product.image} class="card-img-top" height="140">
                <div class="card-header" style="height:100px">
                    <p>${product.title}</p>
                </div>
                <div class="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd> $ ${product.price}</dd>
                        <dt>Rating</dt>
                        <dd> ${product.rating.rate} <span class="bi bi-star-fill text-success"></span> [${product.rating.count}] </dd>
                    </dl>
                </div>
                <div class="card-footer">
                    <button onclick="AddClick(${product.id})" class="btn btn-warning w-100 bi bi-cart3"> Add to Cart </button>
                </div>
            `;
                document.querySelector("main").appendChild(div);
            });
        });
}

// Function called when body loads to initialize categories and products
function bodyload() {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
    GetCount();
}

// Function called when category dropdown changes
function CategoryChange() {
    var categoryName = document.getElementById("lstCategories").value;
    if (categoryName == "all") {
        LoadProducts("https://fakestoreapi.com/products");
    } else {
        LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
}

// Array to store cart items and total price
var cartItems = [];
var cartTotal = 0;

// Function to update the cart item count badge
function GetCount() {
    document.getElementById("lblCount").innerHTML = cartItems.length;
}

// Function to add a product to the cart
function AddClick(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (product) {
            cartTotal += product.price;
            cartItems.push(product);
            alert(`${product.title}\nAdded to Cart`);
            GetCount();
        });
}

// Function to load cart items into the modal
function LoadCartItems() {
    document.querySelector("tbody").innerHTML = "";
    document.getElementById("total").innerHTML = "$" + cartTotal.toFixed(2);
    cartItems.map(function (item) {
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        var tdPrice = document.createElement("td");
        var tdImage = document.createElement("td");
        var tdAction = document.createElement("td");

        tdTitle.innerHTML = item.title;
        tdPrice.innerHTML = item.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
        tdImage.innerHTML = `<img src=${item.image} width="50" height="50">`;
        tdAction.innerHTML = `<button class="btn btn-danger bi bi-trash"></button>`;

        tr.appendChild(tdTitle);
        tr.appendChild(tdPrice);
        tr.appendChild(tdImage);
        tr.appendChild(tdAction);

        document.querySelector("tbody").appendChild(tr);
    });
}
