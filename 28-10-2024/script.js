document.getElementById("userForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  // Select form elements and message display area
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const messageElement = document.getElementById("message");

  try {
    // Clear any previous message
    messageElement.textContent = "Submitting...";

    // Make an API POST request with user data
    const response = await fetch("https://api.example.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email })
    });

    // Check if the response is OK (status 200–299)
    if (!response.ok) {
      throw new Error(`Submission failed! Status: ${response.status}`);
    }

    // Process the JSON response
    const data = await response.json();
    messageElement.textContent = "Submission successful!";
    messageElement.style.color = "green";

  } catch (error) {
    // Display error message to the user
    messageElement.textContent = `Error: ${error.message}`;
    messageElement.style.color = "red";
  }
});
