//callback functions

setTimeout(function(){
    console.log("time out")
}, 5000)

function x(y){
    console.log("x")
    y()
}
x(function y(){
    console.log("y")
})


//this gives the concept of not blocking the main thread when writing the JS code
//since javascript is synchronous and runs one code line at a time therefore blocking the main thread 
//will cause alot of problemos











function somealert(){
    alert("Now just messing with this thing")
}

document.getElementById("myButton").addEventListener("click",somealert)
