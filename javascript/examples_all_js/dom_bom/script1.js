x1;
console.log(x1);
var x1 = 5;

x();
console.log("before function gettting called", x1);
function x() {
  console.log("x function getted called");
}

function twovalues() {
  return [5, 10];
}
async function add() {
  let arrVal = await twovalues();
  console.log(arrVal[0] + arrVal[1]);
}

// [{},{},{}]

// [<></>,<></>,<></>];

function checkMyOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    //api
    if (orderId == 1) {
      resolve("Order Placed");
    } else {
      reject("Order Not Placed");
    }
  });
}

checkMyOrderStatus(1)
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
