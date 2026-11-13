
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        image: "https://placehold.co/300x200?text=Laptop"
    },
    {
        id: 2,
        name: "Headphones",
        price: 2500,
        image: "https://placehold.co/300x200?text=Headphones"
    },
    {
        id: 3,
        name: "Smartphone",
        price: 30000,
        image: "https://placehold.co/300x200?text=Smartphone"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 5000,
        image: "https://placehold.co/300x200?text=Smart+Watch"
    }
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];


const productsContainer = document.querySelector("#products-container");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartTotal = document.querySelector("#cart-total");
const clearCartButton = document.querySelector("#clear-cart");
const checkoutButton = document.querySelector("#checkout");


function displayProducts() {

    productsContainer.innerHTML = "";

    products.forEach(product => {

        const productCard = document.createElement("div");

        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>KSh ${product.price.toLocaleString()}</p>

            <button data-id="${product.id}" class="add-to-cart">
                Add to Cart
            </button>
        `;

        productsContainer.appendChild(productCard);

    });

}


function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    displayCart();

}


function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    }

    cart.forEach(item => {

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>KSh ${item.price.toLocaleString()}</p>
            </div>

            <div class="quantity-controls">

                <button data-id="${item.id}" class="decrease">-</button>

                <span>${item.quantity}</span>

                <button data-id="${item.id}" class="increase">+</button>

            </div>

            <button data-id="${item.id}" class="remove-btn">
                Remove
            </button>
        `;

        cartItems.appendChild(cartItem);

    });

    updateCartSummary();

}

// Update cart summary
function updateCartSummary() {

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    cartCount.textContent = totalItems;

    cartTotal.textContent = totalPrice.toLocaleString();

}

// Increase quantity
function increaseQuantity(id) {

    const item = cart.find(item => item.id === id);

    if (item) {
        item.quantity++;
    }

    saveCart();
    displayCart();

}


function decreaseQuantity(id) {

    const item = cart.find(item => item.id === id);

    if (item) {

        item.quantity--;

        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }

    }

    saveCart();
    displayCart();

}


function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();
    displayCart();

}


function clearCart() {

    cart = [];

    saveCart();
    displayCart();

}


function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


productsContainer.addEventListener("click", event => {

    if (event.target.classList.contains("add-to-cart")) {

        const id = Number(event.target.dataset.id);

        addToCart(id);

    }

});


cartItems.addEventListener("click", event => {

    const id = Number(event.target.dataset.id);

    if (event.target.classList.contains("increase")) {
        increaseQuantity(id);
    }

    if (event.target.classList.contains("decrease")) {
        decreaseQuantity(id);
    }

    if (event.target.classList.contains("remove-btn")) {
        removeFromCart(id);
    }

});


clearCartButton.addEventListener("click", clearCart);


checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        return;
    }

    alert("Checkout successful! Thank you for shopping.");

    clearCart();

});


displayProducts();
displayCart();
