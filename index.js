const cart = ["shoes","pants","mobiles",'jeans']

// reateOrder(cart,function(orderId){
//   proceedToPayment(orderId)
// })C

const promise = CreateOrder(cart)

//Promise returns an object that can be filled at any interval of time in the program
promise.then(function(orderId){
  console.log(orderId)
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
  return false
}