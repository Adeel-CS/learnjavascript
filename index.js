const APromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if(3=="3"){
      return resolve("Well it Does work like that !!___")
    }
    else if(3===3){
      return reject("Well It does Work Like That for sure")
    }
  },5000)

})


const APromise2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    return resolve("The Second Promise is Resolved Now")
  },2000)
})


async function checking(){
  console.log("Temporary check this will be reieved first")

  //First Pormise With Higher SetTimeout
  const val = await APromise
  console.log("The Higher SettimeOut Will won, it will take the higher time")
  console.log(val)

  //Second Promise With lesser TimeOut
  const val2 = await APromise2
  console.log("Chekking the Second Promise That is Of lesser Time")




  // APromise.then((res)=>{
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.error(err)
  // })
}

checking()