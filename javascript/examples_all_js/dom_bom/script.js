// 1. Accessing the title of the document
console.log("Document Title: " + document.title); // Logs the document title

// 2. Changing the content of an element
document.getElementById("main-heading").textContent = "Hello from JavaScript!";
console.log(
  "Updated Heading: " + document.getElementById("main-heading").textContent
);

// 3. Getting all elements with a class name
const description = document.getElementsByClassName("description");
description[0].textContent = "This description has been updated!";
console.log("Updated Description: " + description[0].textContent);

// 4. Query Selector (selects first matching element)
const itemList = document.querySelector("#item-list");
console.log("First Item in List: " + itemList.firstElementChild.textContent);

// 5. Query Selector All (selects all matching elements)
const allItems = document.querySelectorAll("#item-list li");
allItems.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item.textContent}`);
});

// 6. Creating a new element and adding it to the DOM
const addItemBtn = document.getElementById("add-item-btn");
addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li"); // Create new <li> element
  newItem.textContent = `Item ${allItems.length + 1}`; // Set text content
  document.getElementById("item-list").appendChild(newItem); // Add to list
});

// 7. Changing CSS style of an element
const mainHeading = document.getElementById("main-heading");
mainHeading.style.color = "blue"; // Changes text color of heading

// 8. Changing the document background using document.body.style
document.body.style.backgroundColor = "#f0f0f0"; // Change background color

// 9. Alert using window object
window.alert("Welcome to the Document Example!");

// 10. Confirm using window object
if (window.confirm("Do you want to proceed?")) {
  console.log("User confirmed to proceed.");
} else {
  console.log("User canceled.");
}

// 11. Using window.location to redirect
const changeContentBtn = document.getElementById("change-content-btn");
changeContentBtn.addEventListener("click", () => {
  document.getElementById("main-heading").textContent = "Content Changed!";
  document.body.style.backgroundColor = "#ffffff"; // Reset background color
  console.log(window.location.href); // Logs the current URL
});

// 12. Getting the height and width of the browser window
console.log("Window Inner Width: " + window.innerWidth);
console.log("Window Inner Height: " + window.innerHeight);

// 13. Adding an event listener to the window resize event
window.addEventListener("resize", () => {
  console.log("Window resized. New dimensions:");
  console.log(
    "Width: " + window.innerWidth + "px, Height: " + window.innerHeight + "px"
  );
});

// 14. Accessing document ready state
console.log("Document Ready State: " + document.readyState); // 'complete' when page fully loaded

// 15. Document cookies
document.cookie = "username=John Doe"; // Set a cookie
console.log("Cookies: " + document.cookie); // Log cookies
