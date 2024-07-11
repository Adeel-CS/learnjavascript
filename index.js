//Map in JS

const arr = [1,3,34,42,2,3]

const output = arr.map((x)=>
  x.toString(2)
)
console.log(output)



//Filter Inside a variable 
//filtering all the odd numbers

function isOdd(x){
  return x%2
}

const output2 = arr.filter(isOdd)
const output3 = arr.filter((x)=> x%2===0)
console.log(output2)
console.log(output3)

//_---------------------------------------------
//Reduce function in JS
//Giving one output from an array

//Understanding the reduce using the reduce function in JS

const output4 = arr.reduce(function(maxofarr, currentno){
  if(maxofarr<currentno){
    maxofarr = currentno
  }
  return maxofarr
},0)


console.log(output4)