// This is a mock data representing products
const productsData = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    // Add more product data as needed
];

// Function to render products
function renderProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    productsData.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Call renderProducts function to display products
renderProducts();
