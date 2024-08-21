// Updated product data
const products = [
    { id: 1, name: "T-Shirt", price: 10.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUTV0u8or53kL0BLfu3GFGhA3T_Fu-YGX7A&s", category: "clothing" },
    { id: 2, name: "Headphones", price: 20.00, image: "https://t4.ftcdn.net/jpg/03/28/37/93/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg", category: "electronics" },
    { id: 3, name: "Sneakers", price: 50.00, image: "data:image/jpeg;base64,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", category: "clothing" },
    { id: 4, name: "Sunglasses", price: 15.00, image: "https://media.istockphoto.com/id/905125152/photo/aviator-sunglasses-isolated.jpg?s=612x612&w=0&k=20&c=cdqPJ4vSrfUIchpphcjjduMtjgPKrN_RGC5hEHtaJ68=", category: "accessories" },
    { id: 5, name: "Smartwatch", price: 80.00, image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg", category: "electronics" },
    { id: 6, name: "Backpack", price: 25.00, image: "https://www.shutterstock.com/image-photo/yellow-backpack-opened-isolated-on-600nw-2425288827.jpg", category: "accessories" },
    { id: 7, name: "Jeans", price: 40.00, image: "https://t3.ftcdn.net/jpg/04/83/25/50/360_F_483255019_m1r1ujM8EOkr8PamCHF85tQ0rHG3Fiqz.jpg", category: "clothing" },
    { id: 8, name: "Laptop", price: 500.00, image: "https://m.media-amazon.com/images/I/61+r3+JstZL.jpg", category: "electronics" },
    { id: 9, name: "Watch", price: 120.00, image: "https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=", category: "accessories" },
    { id: 10, name: "Tablet", price: 200.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDM2xrjls_zcBl755G1D5Fpz0dj4QaqlXcVA&s", category: "electronics" }
];

let cart = [];

// Function to display products on the page
function displayProducts(filteredProducts = products) {
    const productListing = document.getElementById("product-listing");
    productListing.innerHTML = "";

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.setAttribute("data-category", product.category);
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListing.appendChild(productCard);
    });
}

// Function to filter products based on category and search query
function filterProducts() {
    const category = document.getElementById("category").value;
    const searchQuery = document.getElementById("search").value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return (category === "all" || product.category === category) &&
               product.name.toLowerCase().includes(searchQuery);
    });

    displayProducts(filteredProducts);
}

// Function to add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart display and total price
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    document.getElementById("total").textContent = total.toFixed(2);
    document.getElementById("cart-count").textContent = cart.length;
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to handle the checkout process
function checkout() {
    document.getElementById("checkout-form").style.display = 'block';
}

// Initialize product display on page load
displayProducts();
