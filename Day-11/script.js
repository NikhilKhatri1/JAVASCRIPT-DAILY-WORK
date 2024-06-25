
function bodyload() {
    var product = {};
    var http = new XMLHttpRequest();
    http.open("get", "mobiles.json", true);
    http.send();
    http.onreadystatechange = function () {
        if (http.readyState == 4) {
            product = JSON.parse(http.responseText);
            document.getElementById("imgProduct").src = product.image;
            document.getElementById("title").innerHTML = product.title;
            document.getElementById("rating").innerHTML = product.rating.rate;
            document.getElementById("reviews").innerHTML = `<b>${product.rating.ratings} ratings & ${product.rating.reviews} reviews</b>`;
            document.getElementById("price").innerHTML = product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' });

            product.offers.map(function (offer) {
                var li = document.createElement("li");
                li.className = "bi bi-tag-fill my-3 text-success";
                li.innerHTML = `<span class="text-secondary">${offer}</span>`;

                document.querySelector("ul").appendChild(li);
            })

        }
    }
}
