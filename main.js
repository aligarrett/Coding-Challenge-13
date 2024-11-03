// Task 2: Fetch Products from the API Using Fetch and Promises

// Fetch products from API
function fetchProducts() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayProducts(data))
        .catch(error => {
            displayError('Failed to load products. Please try again later.');
            console.error('Error fetching products:', error);
        });
}

// Task 3: Display Product Details Dynamically

// Display products on the page
function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const { company, price, name } = product.fields;
        const imageUrl = product.fields.image[0].url;
        const formattedPrice = (price / 100).toFixed(2);

        // Create product card
        const productCard = document.createElement('div');
        productCard.className = 'product';

        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p>Company: ${company}</p>
            <p>Price: $${formattedPrice}</p>
        `;

        productContainer.appendChild(productCard);
    });
}

// Task 4: Handle Errors Gracefully

// Display error message
function displayError(message) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = `<p style="color: red; text-align: center;">${message}</p>`;
}

// Call fetchProducts when the page loads
document.addEventListener('DOMContentLoaded', fetchProducts);