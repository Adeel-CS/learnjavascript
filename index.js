const p1 = new Promise(function (resolve, reject){
  setTimeout(()=>{reject("P1 Wierd", 5000)},3000)
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
  }, 4000);
}
)


Promise.all([p1, p2, p3])
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.error(err)
})