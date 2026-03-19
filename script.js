let count=0;

const buttons = document.querySelectorAll("button");
const cartCount = document.getElementById("cart-count");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        count++;
        cartCount.textContent = "Items: " + count;
    });
});
