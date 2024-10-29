function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}. Current Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ${amount}. Current Balance: ${balance}`);
      } else {
        console.log("Insufficient funds.");
      }
    },
    checkBalance() {
      console.log(`Current Balance: ${balance}`);
    },
  };
}

const myAccount = bankAccount(100);
myAccount.deposit(50); // Output: Deposited: 50. Current Balance: 150
myAccount.withdraw(30); // Output: Withdrew: 30. Current Balance: 120
myAccount.checkBalance(); // Output: Current Balance: 120

function createPizza() {
  let toppings = [];

  return {
    addTopping(topping) {
      toppings.push(topping);
      console.log(`${topping} added!`);
    },
    showPizza() {
      console.log(`Your pizza has: ${toppings.join(", ")}`);
    },
  };
}

const myPizza = createPizza();
myPizza.addTopping("Pepperoni"); // Pepperoni added!
myPizza.addTopping("Cheese"); // Cheese added!
myPizza.showPizza(); // Your pizza has: Pepperoni, Cheese
