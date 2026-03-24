let headphonesQty = Number(localStorage.getItem("headphonesQty")) || 0;
let keyboardQty = Number(localStorage.getItem("keyboardQty")) || 0;
let mouseQty = Number(localStorage.getItem("mouseQty")) || 0;
let total = Number(localStorage.getItem("total")) || 0;

let count = headphonesQty + keyboardQty + mouseQty;

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
    count = headphonesQty + keyboardQty + mouseQty;

    cartCount.textContent = "Items: " + count;
    cartTotal.textContent = "Total: $" + total;

    headphonesQtyEl.textContent = headphonesQty;
    keyboardQtyEl.textContent = keyboardQty;
    mouseQtyEl.textContent = mouseQty;
}

function saveToStorage() {
    localStorage.setItem("headphonesQty", headphonesQty);
    localStorage.setItem("keyboardQty", keyboardQty);
    localStorage.setItem("mouseQty", mouseQty);
    localStorage.setItem("total", total);
}

updateUI();

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);
        const product = button.dataset.product;

        if (product === "headphones") headphonesQty++;
        if (product === "keyboard") keyboardQty++;
        if (product === "mouse") mouseQty++;

        total += price;

        updateUI();
        saveToStorage();
    });
});

removeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);
        const product = button.dataset.product;

        if (product === "headphones" && headphonesQty > 0) {
            headphonesQty--;
            total -= price;
        }

        if (product === "keyboard" && keyboardQty > 0) {
            keyboardQty--;
            total -= price;
        }

        if (product === "mouse" && mouseQty > 0) {
            mouseQty--;
            total -= price;
        }

        updateUI();
        saveToStorage();
    });
});

clearCartBtn.addEventListener("click", () => {
    headphonesQty = 0;
    keyboardQty = 0;
    mouseQty = 0;
    total = 0;

    updateUI();
    saveToStorage();
});

checkoutBtn.addEventListener("click", () => {
    if (count === 0) {
        alert("Cart is empty");
        return;
    }

    window.location.href = "https://andrii-kuleshov.github.io/checkout-page/";
});
