function LoadCategories() {
    fetch("https://fakestoreapi.com/products/categories")
        .then(function (response) {
            return response.json();
        })
        .then(function (categories) {
            categories.unshift("all");
            categories.forEach(function (category) {
                var option = document.createElement("option");
                option.text = category.toUpperCase();
                option.value = category;
                document.getElementById("lstCategories").appendChild(option);
            });
        });
}

function LoadProducts(url) {
    document.querySelector("main").innerHTML = "";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            products.forEach(function (product) {
                var div = document.createElement("div");
                div.className = "card m-2 p-2";
                div.style.width = "200px";
                div.innerHTML = `
                   <img src="${product.image}" class="card-img-top" height="140">
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

function bodyload() {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
    GetCount();
}

function CategoryChange() {
    var categoryName = document.getElementById("lstCategories").value;
    if (categoryName === "all") {
        LoadProducts("https://fakestoreapi.com/products");
    } else {
        LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
}

var cartItems = [];
var cartTotal = 0;

function GetCount() {
    document.getElementById("lblCount").innerHTML = cartItems.length;
}

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

function LoadCartItems() {
    document.querySelector("tbody").innerHTML = "";
    document.getElementById("total").innerHTML = "$" + cartTotal.toFixed(2);
    cartItems.forEach(function (item) {
        var tr = document.createElement("tr");
        var tdTitle = document.createElement("td");
        var tdPrice = document.createElement("td");
        var tdImage = document.createElement("td");
        var tdAction = document.createElement("td");

        tdTitle.textContent = item.title;
        tdPrice.textContent = item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        tdImage.innerHTML = `<img src="${item.image}" width="50" height="50">`;
        tdAction.innerHTML = `<button class="btn btn-danger bi bi-trash"></button>`;

        tr.appendChild(tdTitle);
        tr.appendChild(tdPrice);
        tr.appendChild(tdImage);
        tr.appendChild(tdAction);

        document.querySelector("tbody").appendChild(tr);
    });
}
