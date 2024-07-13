const carts = ["Wallet", "Shampu", "Hair Dyer"];

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    let Names = cart;
    let numberOfProducts = cart.length;
    let orderId = numberOfProducts * 23;
    // console.log(numberOfProducts);

    if (numberOfProducts !== 0) {
      resolve(orderId);
    } else {
      reject("Cart is empty");
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    // Simulate payment processing logic here
    let paymentSuccessful = (orderId >=0); // Simulate successful payment condition
    if (paymentSuccessful) {
      resolve(true); // Resolve with a single boolean value
    } else {
      reject("Payment failed. No order ID provided.");
    }
  });
}

function showOrderSummary(paymentId) {
  return new Promise((resolve, reject) => {
    if (paymentId) {
      let canUpdateWallet = true;
      resolve(canUpdateWallet);
    } else {
      reject("The Payment was not completed");
    }
  });
}

function updateWallet(canUpdateWallet) {
  return new Promise((resolve, reject) => {
    if (canUpdateWallet) {
      resolve("Your Wallet Has been Updated. Thanks for shopping! Do more!");
    } else {
      reject("There was an error in updating the wallet");
    }
  });
}

createOrder(carts)
  .then(orderId => {
    // console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .then(paymentId => {
    // console.log("Payment done:", paymentId);
    return showOrderSummary(paymentId);
  })
  .then(canUpdateWallet => {
    return updateWallet(canUpdateWallet);
  })
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log("Error:", error);
  });
