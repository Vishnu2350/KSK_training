console.log("Initiating parallel requests"); // Step 1

const getUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data received");
    }, 2000); // 2-second delay
  });
};

const getPostsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data received");
    }, 1000); // 1-second delay
  });
};

// Step 2: Use Promise.all to handle parallel execution
Promise.all([getUserData(), getPostsData()]).then((results) => {
  console.log(results[0]); // "User data received" after 2 seconds
  console.log(results[1]); // "Posts data received" after 2 seconds
});

console.log("Parallel requests started"); // Step 3
