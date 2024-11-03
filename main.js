// Task 2: Fetch Products from the API Using Fetch and Promises

// Select the product container from the HTML
const productContainer = document.getElementById("productContainer");

// Function to fetch product data from the API
function fetchProducts() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
      // Check if the response is ok (status code 200)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON data from the response
    })
    .then(data => {
      // Display products on the page
      displayProducts(data);
    })
    .catch(error => {
      console.error("Fetch error:", error);
      productContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
    });
}

// Function to display products on the webpage
function displayProducts(products) {
  // Clear container in case of previous content
  productContainer.innerHTML = "";

  // Loop over each product and create an HTML structure for it
  products.forEach(product => {
    // Extract necessary product details
    const { company, price, name } = product.fields;
    const imageUrl = product.fields.image[0].url;

    // Create product card
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}">
      <h3>${name}</h3>
      <p>Company: ${company}</p>
      <p>Price: $${(price / 100).toFixed(2)}</p>
    `;

    // Append the product card to the container
    productContainer.appendChild(productCard);
  });
}

// Call the function to fetch products when the page loads
fetchProducts();