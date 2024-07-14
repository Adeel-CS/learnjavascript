const p1 = new Promise(function (resolve, reject){
  setTimeout(()=>{reject("P1 Wierd")},3000)
})

const p2 = new Promise((resolve,reject)=>
{
  setTimeout(function(){
    resolve("P2 Success")
  },2000)
})

const p3 = new Promise((resolve, reject)=>
{
  setTimeout(() => {
    reject("P3 Failed")
  }, 1000);
}
)


Promise.allSettled([p1, p2, p3])
.then((res)=>{
  console.log("The output for the AllSettled Part:^")
  console.log(res)
})
.catch((err)=>{
  console.log("The output for the AllSettled Part:^")
  console.error(err)
})

Promise.race([p1, p2, p3])
.then((res)=>
{
  console.log("Output for the race Part:^")
  console.log(res)

})
.catch((err)=>{
  console.log("Output for the race Part:^")
  console.error(err)
})

Promise.any([p1,p3])
.then((res)=>{
  console.log("The Output for the Any Part of the Promise:^ ")
  console.log(res)
})
.catch((err)=>{
  console.log("The Output for the Any Part of the Promise:^ ")
  console.error(err)
  //To check the arry of aggreated eror we have to call the variable from the error object
  console.log(err.error)
})