// ==============================
// PRODUCT SEARCH
// ==============================

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

const noResults = document.createElement("p");

noResults.textContent = "No products found.";
noResults.classList.add("no-results");

searchInput.parentElement.appendChild(noResults);

noResults.style.display = "none";


searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    let foundProduct = false;

    productCards.forEach(function (card) {

        const productName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const productDescription = card
            .querySelector(".product-info p:not(.price)")
            .textContent
            .toLowerCase();

        if (
            productName.includes(searchValue) ||
            productDescription.includes(searchValue)
        ) {

            card.style.display = "block";

            foundProduct = true;

        } else {

            card.style.display = "none";

        }

    });


    if (foundProduct) {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }

});


// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {

    navigation.classList.toggle("active");

});