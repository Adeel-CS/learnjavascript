const APromise = new Promise((resolve, reject)=>{
  if(3=="3"){
    return resolve("Well it Does work like that !!___")
  }
  else if(3===3){
    return reject("Well It does Work Like That for sure")
  }
})

async function checking(){
  const val = await APromise
  console.log(val)
  APromise.then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.error(err)
  })
}

checking()