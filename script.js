let headphonesQty = 0;
let keyboardQty = 0;
let mouseQty = 0;

let count = 0;
let total = 0;

const addButtons = document.querySelectorAll(".add-btn");
const removeButtons = document.querySelectorAll(".remove-btn");

const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

const headphonesQtyEl = document.getElementById("headphones-qty");
const keyboardQtyEl = document.getElementById("keyboard-qty");
const mouseQtyEl = document.getElementById("mouse-qty");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);
        const product = button.dataset.product;

        if (product === "headphones") {
            headphonesQty++;
        }

        if (product === "keyboard") {
            keyboardQty++;
        }

        if (product === "mouse") {
            mouseQty++;
        }

        total += price;
        count = headphonesQty + keyboardQty + mouseQty;

        cartCount.textContent = "Items: " + count;
        cartTotal.textContent = "Total: $" + total;

        headphonesQtyEl.textContent = headphonesQty;
        keyboardQtyEl.textContent = keyboardQty;
        mouseQtyEl.textContent = mouseQty;
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

        count = headphonesQty + keyboardQty + mouseQty;

        cartCount.textContent = "Items: " + count;
        cartTotal.textContent = "Total: $" + total;

        headphonesQtyEl.textContent = headphonesQty;
        keyboardQtyEl.textContent = keyboardQty;
        mouseQtyEl.textContent = mouseQty;
    });
});

const clearCartBtn = document.getElementById("clear-cart");

clearCartBtn.addEventListener("click", () => {
    headphonesQty = 0;
    keyboardQty = 0;
    mouseQty = 0;

    count = 0;
    total = 0;

    cartCount.textContent = "Items: 0";
    cartTotal.textContent = "Total: $0";

    headphonesQtyEl.textContent = 0;
    keyboardQtyEl.textContent = 0;
    mouseQtyEl.textContent = 0;
});
