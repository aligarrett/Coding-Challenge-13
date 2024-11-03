// Task 2: Fetch Products from the API Using Fetch and Promises

// Fetch products from API
function fetchProducts() {
    // Initiate fetch request to the API
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Throw error if response is not OK
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => displayProducts(data)) // Pass the parsed data to displayProducts
        .catch(error => { // Task 4: Handle Errors Gracefully
            displayError('Failed to load products. Please try again later.'); // Show user-friendly error message
            console.error('Error fetching products:', error); // Log the error for debugging
        });
}

// Task 3: Display Product Details Dynamically

// Display products on the page
function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear any existing content in the container

    // Loop through each product and create HTML structure
    products.forEach(product => {
        const { company, price, name } = product.fields; // Destructure product fields
        const imageUrl = product.fields.image[0].url; // Get the image URL
        const formattedPrice = (price / 100).toFixed(2); // Format price to two decimal places

        // Create a div for each product
        const productCard = document.createElement('div');
        productCard.className = 'product'; // Add class for styling

        // Set the inner HTML with product details
        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${name}"> <!-- Product image -->
            <h2>${name}</h2> <!-- Product name -->
            <p>Company: ${company}</p> <!-- Company name -->
            <p>Price: $${formattedPrice}</p> <!-- Product price -->
        `;

        productContainer.appendChild(productCard); // Append the product card to the container
    });
}

// Task 4: Handle Errors Gracefully

// Display error message on the page
function displayError(message) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = `<p style="color: red; text-align: center;">${message}</p>`; // Show error message in red
}

// Call fetchProducts when the page loads
document.addEventListener('DOMContentLoaded', fetchProducts); // Trigger product fetch after DOM is loaded