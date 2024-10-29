//Operation: Try-Catch

try {
    let result = 10 / 0;
    console.log(result);
  } catch (error) {
    console.error("Error: Division by zero");
  }

  //Operation 2: Throw Custom Error

  function checkAge(age) {
    if (age < 18) {
      throw new Error("You must be 18 or older.");
    } else {
      console.log("Access granted.");
    }
  }
  
  try {
    checkAge(16);
  } catch (error) {
    console.error(error.message);
  }
  