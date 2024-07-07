//THe development tools in JS NOw
// let i =0
// document.getElementById("clickme")
// .addEventListener("click",function temptest(){
//     // alert("The Hover Button was clicked my Nigga")
 
//     console.log("Buddy it works now Learning is important mate",--i)
   
// })
// ///Wrong way to do it


//Correct way mate

function WraperForHoverButton(){
    let i =0
    document.getElementById("clickme")
    .addEventListener("click",function temptest(){
        // alert("The Hover Button was clicked my Nigga")
    
        console.log("Buddy it works now Learning is important mate",--i)
    
    })
///
}
WraperForHoverButton()







function somealert(){
    alert("Now just messing with this thing")
}

document.getElementById("myButton").addEventListener("click",somealert)
