let cart = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");

let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');
let resultsContainer = document.getElementById('results');

addItemButton.addEventListener("click", function () {
    let item = itemInput.value;

    if (item === "") {
        alert("Please enter an item.");
        return;
    }

    checkDuplicateItem(item);
    renderCart();
    itemInput.value = ""; // Clear the input field
});

removeItemButton.addEventListener("click", function () {
    if (cart.length === 0) {
        alert('Cart is empty.  Nothing to remove');
    }
    else {
        cart.pop(); // Remove last item from cart array
        renderCart();
    }
});

searchButton.addEventListener("click", function () {
    console.log('I am here');

    let searchItem = searchInput.value;

    if (cart.length === 0) {
        alert("List is empty. Nothing to search");
        return;
    }

    // Find matches (case-insensitive)
    const allMatches = cart.filter(item =>
        item.toLowerCase().includes(searchItem.toLowerCase())
    );

    // Clear previous results
    resultsContainer.innerHTML = "";

    if (allMatches.length === 0) {
        resultsContainer.innerText = "No matching items found.";
    } else {
        allMatches.forEach(match => {
            let li = document.createElement("li");
            li.innerText = match;
            resultsContainer.appendChild(li);
        });
    }
});

function renderCart() {
    cartList.innerHTML = ""; // Clear existing list
    for (let i = 0; i < cart.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = cart[i];
        cartList.appendChild(listItem);
    }
}

function checkDuplicateItem(item) {
    if (cart.includes(item))
        alert('Item already listed');
    else cart.push(item);
}

