console.log("Start processing data"); // Step 1

const getData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from API 1");
    }, 2000); // 2-second delay
  });
};

const getData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from API 2");
    }, 1000); // 1-second delay
  });
};

// Step 2: Async function to handle multiple asynchronous calls
async function processData() {
  const data1 = await getData1();
  console.log(data1); // Logs after 2 seconds
  
  const data2 = await getData2();
  console.log(data2); // Logs 1 second after data1
}

processData();

console.log("Data processing initiated"); // Step 3
