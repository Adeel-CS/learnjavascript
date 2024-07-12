const cart = ["shoes","pants","mobiles",'jeans']

CreateOrder(cart,function(orderId){
  proceedToPayment(orderId)
})

const promise = CreateOrder(cart)

//Promise returns an object that can be filled at any interval of time in the program
promise.then(function(orderId){
  return proceedToPayment(orderId)
})
.then(function(paymentId){
  return showDeliveryId(DeliveryId)
})
.then(function(DeliveryId){
  return updateWallet()
})