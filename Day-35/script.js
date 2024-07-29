$(document).ready(function () {
    // Toggle mobile menu visibility on click
    $(".mobile-nav i").click(function () {
        $(".site-nav-menu").toggleClass("primary-menu");
    });

    // Function to load products based on URL
    function LoadProduct(url) {
        $(".container").html(""); // Use class selector with dot
        $.ajax({
            method: "GET",
            url: url,
            success: function (products) {
                products.forEach(product => {
                    $(`
                        <img src="${product.image}" width="150" height="150" style="padding:20px">
                    `).appendTo(".container");
                });
            }
        });
    }

    // Function to load categories into the dropdown
    function LoadCategories() {
        $.ajax({
            method: "GET",
            url: "https://fakestoreapi.com/products/categories",
            success: function (categories) {
                // Add "All" option
                $("#lstCategories").append('<option value="">All</option>');

                // Add categories to dropdown
                categories.forEach(category => {
                    $(`<option value="${category}">${category}</option>`).appendTo("#lstCategories");
                });
            }
        });
    }

    // Initial load of products and categories
    LoadProduct("https://fakestoreapi.com/products");
    LoadCategories();

    // Event handler for category change
    $("#lstCategories").change(function () {
        const selectedCategory = $(this).val();
        if (selectedCategory) {
            LoadProduct(`https://fakestoreapi.com/products/category/${selectedCategory}`);
        } else {
            LoadProduct("https://fakestoreapi.com/products"); // Load all products when "All" is selected
        }
    });
});
