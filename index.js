async function RecieveData(){
  return "Random Proimise Value"
}


const RDataPromise = RecieveData()

console.log(RDataPromise.then(res=> console.log(res)))


const p = new Promise((resolve, reject)=>{
  return resolve("The temporary function was Resolved! Remember the Asyn will always return a Promise Objectin which the value will be that can be seeen using the .then() method!")
})

async function takesOnePromiseOnly(){
  return p
}

const Checking = takesOnePromiseOnly()

Checking.then((result)=>{
  console.log(result)
})

