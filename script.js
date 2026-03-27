let products = {
    headphones: {
        qty: Number(localStorage.getItem("headphonesQty")) || 0,
        price: 199
    },
    keyboard: {
        qty: Number(localStorage.getItem("keyboardQty")) || 0,
        price: 99
    },
    mouse: {
        qty: Number(localStorage.getItem("mouseQty")) || 0,
        price: 49
    }
};

let total = Number(localStorage.getItem("total")) || 0;

const addButtons = document.querySelectorAll(".add-btn");
const removeButtons = document.querySelectorAll(".remove-btn");

const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

const headphonesQtyEl = document.getElementById("headphones-qty");
const keyboardQtyEl = document.getElementById("keyboard-qty");
const mouseQtyEl = document.getElementById("mouse-qty");

const clearCartBtn = document.getElementById("clear-cart");
const checkoutBtn = document.getElementById("checkout-btn");

function updateUI() {
    const count =
        products.headphones.qty +
        products.keyboard.qty +
        products.mouse.qty;

    cartCount.textContent = "Items: " + count;
    cartTotal.textContent = "Total: $" + total;

    headphonesQtyEl.textContent = products.headphones.qty;
    keyboardQtyEl.textContent = products.keyboard.qty;
    mouseQtyEl.textContent = products.mouse.qty;
}

function saveToStorage() {
    localStorage.setItem("headphonesQty", products.headphones.qty);
    localStorage.setItem("keyboardQty", products.keyboard.qty);
    localStorage.setItem("mouseQty", products.mouse.qty);
    localStorage.setItem("total", total);
}

updateUI();

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;

        products[product].qty++;
        total += products[product].price;

        updateUI();
        saveToStorage();
    });
});

removeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;

        if (products[product].qty > 0) {
            products[product].qty--;
            total -= products[product].price;
        }

        updateUI();
        saveToStorage();
    });
});

clearCartBtn.addEventListener("click", () => {
    products.headphones.qty = 0;
    products.keyboard.qty = 0;
    products.mouse.qty = 0;
    total = 0;

    updateUI();
    saveToStorage();
});

checkoutBtn.addEventListener("click", () => {
    const count =
        products.headphones.qty +
        products.keyboard.qty +
        products.mouse.qty;

    if (count === 0) {
        alert("Cart is empty");
        return;
    }

    window.location.href = "https://andrii-kuleshov.github.io/checkout-page/";
});
