let count=0;
let total=0;

const buttons = document.querySelectorAll("button");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);

        count++;
        total += price;

        cartCount.textContent = "Items: " + count;
        cartTotal.textContent = "Total: $" + total;
    });
});
