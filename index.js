const radiu = [3,2,5,32]


const area = function(radiu){
  return Math.PI* radiu*radiu
}

const circum = function(radiu){
  return 2*Math.PI*radiu
}

const diameter = function(radiu){
  return 2*radiu
}

const calculate = function(radiu, logic){
  const output = []
  for(let i=0; i<radiu.length; i++){
    output.push(logic(radiu[i]))
  }
  return output
}



console.log(radiu.map(area))
console.log(calculate(radiu,area))
// console.log(calculate(radiu,circum))
// console.log(calculate(radiu,diameter))