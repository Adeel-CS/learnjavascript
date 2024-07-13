const cart = ["shoes","pants","mobiles",'jeans']

// reateOrder(cart,function(orderId){
//   proceedToPayment(orderId)
// })C

const promise = CreateOrder(cart)

//Promise returns an object that can be filled at any interval of time in the program
promise
.then(function(orderId){
  console.log(orderId)
  return orderId
})
.then(function(orderId){
  return proceedToPayment(orderId)

})
.then(function (paymentverified){
  console.log(paymentverified)
})
.catch(function(err){
  console.log(err.message)
})



///Creating our own API fucntion with Promise functionalities

function  CreateOrder(cart){
  const promiseforCreatrOrder = new Promise(function(resolve, reject){
    if(!validateCart(cart)){
      const err = new Error("Cart is empty or invalid")
      reject(err)
    }

    const orderId = "234dsa2"
    if(orderId){
      resolve(orderId)
    }
  })

  return promiseforCreatrOrder
}

function validateCart(cart){
  return true
}

function proceedToPayment(orderId){
  return new Promise(function(resolve,reject){
    resolve("Payment Done")
  })
}