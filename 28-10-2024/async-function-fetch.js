async function fetchUserData(userId) {
  try {
    // Attempt to fetch user data from a fictional API endpoint
    let response = await fetch(`https://api.example.com/users/${userId}`);

    // Check if the response is OK (status 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    let data = await response.json();
    console.log("User Data:", data);

  } catch (error) {
    // Catch any errors and log a user-friendly message
    console.error("Error fetching user data:", error.message);
    alert("Unable to fetch user data. Please try again later.");
  } finally {
    // Optional: Execute code here regardless of success or failure
    console.log("Fetch attempt completed.");
  }
}

// Example usage: Fetch data for user ID 123
fetchUserData(123);
