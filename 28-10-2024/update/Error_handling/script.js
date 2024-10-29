document.getElementById("applicationForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  // Select form elements and message display area
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const messageElement = document.getElementById("message");

  // Basic client-side validation
  if (!name || !email || !phone || !course) {
    messageElement.textContent = "All fields are required!";
    messageElement.style.color = "red";
    return;
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    messageElement.textContent = "Invalid name format. Only letters are allowed!";
    return;
  }
  if (!/^\d{10}$/.test(phone)) {
    messageElement.textContent = "Phone number must be 10 digits.";
    return;
  }

  try {
    // Clear any previous message
    messageElement.textContent = "Submitting...";

    // Mock API call (replace URL with actual endpoint)
    const response = await fetch("https://api.example.com/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, course })
    });

    // Check if response is OK (status 200–299)
    if (!response.ok) {
      throw new Error(`Submission failed! Status: ${response.status}`);
    }

    // Process JSON response
    const data = await response.json();
    messageElement.textContent = "Application submitted successfully!";
    messageElement.style.color = "green";
    document.getElementById("applicationForm").reset();

  } catch (error) {
    // Handle errors during API call or other issues
    messageElement.textContent = `Error: ${error.message}`;
    messageElement.style.color = "red";
  }
});
