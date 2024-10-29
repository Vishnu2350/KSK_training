// Function to simulate fetching user data
const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data received");
        }, 2000); // Simulate 2-second delay
    });
};

// Function to simulate fetching posts data
const getPostsData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Posts data received");
        }, 1000); // Simulate 1-second delay
    });
};

// Asynchronous function to fetch both data types
async function fetchData() {
    document.getElementById("userData").textContent = "Loading user data...";
    document.getElementById("postsData").textContent = "Loading posts data...";
    
    // Fetch data in parallel
    const [userData, postsData] = await Promise.all([getUserData(), getPostsData()]);
    
    // Display the fetched data
    document.getElementById("userData").textContent = userData;
    document.getElementById("postsData").textContent = postsData;
}

// Event listener for button
document.getElementById("fetchDataButton").addEventListener("click", fetchData);
