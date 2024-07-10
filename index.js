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

Array.prototype.calculate = function(logic){
  const output = []
  for(let i=0; i<this.length; i++){
    output.push(logic(this[i]))
  }
  return output
}



console.log(radiu.map(area))
console.log(radiu.calculate(area))
// console.log(calculate(radiu,circum))
// console.log(calculate(radiu,diameter))