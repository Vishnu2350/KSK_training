let products = [];
let currentPage = 1;
const productsPerPage = 5;

// Function to fetch products data from Fake Store API
const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products data");
  }
  return await response.json();
};

// Function to render products in a table format based on the current page
const renderProductsData = () => {
  const productsTable = document.getElementById("productsData");
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const productsToShow = products.slice(start, end);

  productsTable.innerHTML = productsToShow
    .map(
      (product) => `
        <tr>
            <td>${product.title}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.category}</td>
            <td>${product.description.slice(0, 50)}...</td>
        </tr>
    `
    )
    .join("");

  updatePagination();
};

// Function to update pagination controls
const updatePagination = () => {
  const totalPages = Math.ceil(products.length / productsPerPage);
  document.getElementById(
    "pageInfo"
  ).textContent = `Page ${currentPage} of ${totalPages}`;
  document.getElementById("prevButton").disabled = currentPage === 1;
  document.getElementById("nextButton").disabled = currentPage === totalPages;
};

// Function to handle pagination button clicks
const setupPagination = () => {
  document.getElementById("prevButton").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProductsData();
    }
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      currentPage++;
      renderProductsData();
    }
  });
};

// Asynchronous function to handle fetching and displaying data
async function loadProducts() {
  document.getElementById("productsData").innerHTML =
    "<tr><td colspan='4'>Loading...</td></tr>";
  document.getElementById("errorMessage").textContent = "";

  try {
    products = await fetchProducts();
    currentPage = 1;
    renderProductsData();
  } catch (error) {
    document.getElementById("errorMessage").textContent = error.message;
    document.getElementById("productsData").innerHTML = "";
  }
}

// Event listener for the "Fetch Products" button
document
  .getElementById("fetchProductsButton")
  .addEventListener("click", loadProducts);

// Setup pagination buttons
setupPagination();
