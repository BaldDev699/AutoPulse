let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCartUI();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");

  if (!cartItems) return;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${item.name} - KES ${item.price}
      <button class="remove-btn" onclick="removeFromCart(${index})">
        Remove
      </button>
    `;

    cartItems.appendChild(li);
  });

  totalPrice.textContent = total;
  cartCount.textContent = cart.length;
}
