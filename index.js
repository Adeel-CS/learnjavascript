function callback(){
  console.log('this is the function that will be send as argument AKA callBack Function')
}

function higherOrderFunction(callBack){
  console.log('Now the higherOrder Funciton Will call the call Back function')
  callBack()
}
higherOrderFunction(callback)