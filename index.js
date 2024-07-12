const cart = ["shoes","pants","mobiles",'jeans']

api.CreateOrder(cart,function(){
  api.ProceedToPayment(method,function(){
    api.GetShipped.(orderID, function(){
      api.BackToShopPage()
    })
  })
})