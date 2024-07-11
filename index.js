function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius;
};


const circle1 = new Circle(3);
const circle2 = new Circle(5);

console.log(circle1.area()); // Output: 28.274333882308138
console.log(circle2.circumference()); // Output: 31.41592653589793


//______________________________________________
Function.prototype.mybind = function(){
  console.log("My Bind will be accessable to all the functions")
}

function temp(){

}

temp.mybind()

