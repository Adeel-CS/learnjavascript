const users = [
  {firstname: "Ali",lastname: "Muhammad", age:23},
  {firstname: "Me",lastname: "Imran", age:13},
  {firstname: "Fahad",lastname: "Sher", age:43},
  {firstname: "AHmed",lastname: "Abbass", age:21},
  {firstname: "AHmed",lastname: "Abbass", age:21},

]

// const output = users.map((x)=> x.firstname + " And Age is:" + x.age)

// console.log(output)

//Now using the reduce function to chech the age and how many lie in that particular branch

const output2 = users.reduce(function(accumulator, current){
      if(accumulator[current.age]){
        accumulator[current.age] = ++accumulator[current.age]
      }
      else{
        accumulator[current.age] = 1
      }
      return accumulator
},{})

console.log(output2)

const output3 = users.filter(x=> x.age<22).map((x)=>x.firstname)

console.log(output3)

//Doing thesame thing using reduce

const output4 = users.reduce(function(accumulator,current){
  if(current.age<22){
    accumulator[current.lastname] = current.lastname
  }
  return accumulator
},{})
console.log(output4)
//---------------Handling the repeating lastnames
const output5 = users.reduce(function(accumulator, current) {
  if (current.age < 22) {
    if (!accumulator[current.lastname]) {
      accumulator[current.lastname] = []; // Initialize an array for the last name
    }
    accumulator[current.lastname].push(current); // Push the user object into the array
  }
  return accumulator;
}, {});

console.log(output5);

