let count = 0;
let total = 0;

const addButtons = document.querySelectorAll(".add-btn");
const removeButtons = document.querySelectorAll(".remove-btn");

const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);
        
        count++;
        total += price;
        
        cartCount.textContent = "Items: " + count;
        cartTotal.textContent = "Total: $" + total;
    });
});

removeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = Number(button.dataset.price);

        if (count > 0) {
            count --;
            total -= price;
            
            cartCount.textContent = "Items: " + count;
            cartTotal.textContent = "Total: $" + total;
        }
    });
});
