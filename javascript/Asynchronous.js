/* Operation 1: Callback */

function greetUser(callback) {
    console.log("Fetching user...");
    setTimeout(() => {
      callback("John");
    }, 2000);
  }
  
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greetUser(greet);
  
  /* Operation 2: Promise */

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1500);
    });
  };
  
  fetchData().then((message) => {
    console.log(message);
  });
  
  /* Operation 3: Async/Await */

  async function fetchData() {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched with async/await!");
      }, 1000);
    });
    console.log(data);
  }
  
  fetchData();
  