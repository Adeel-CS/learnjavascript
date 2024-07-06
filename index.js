    
    
    function Counter(){

        var coutner =0
        this.incrementing =function (){
            coutner++;
            console.log(coutner)
    }
        this.decrement = function (){
            coutner--;
            console.log(coutner)
        }
}

var counter1 = new Counter()//we have to call new since there is a constructor inside it

counter1.incrementing()
counter1.decrement()






// function outer(){
//     var a =-34;
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// outer()()
// //or we ca nwrite in a way
// var close = outer()
// close()










// function x(){
//     for(var i=1; i<=5; i++){
//     function close(i){
//     setTimeout(function() {console.log(i)
//     }, i*1000)
        
//     }
    
//     close(i)
// }
        

//     console.log("Hi there looking happy today")
// }

// x()








// function x(){
//     var a =9
//     function y(){
//         console.log(a)
//     }
//     a =234
//     return y
// }

// var z =x()

// console.log(z)
// z()


// function a(){
//     var a= 8
//     function childern(){
//         console.log(a)
//     }
//     childern()
// }

// a()







// function parents(){
//     console.log("I'm The Parent")
//     function childern(){
//         console.log("I'm the child")
//     }
    
// }

// var grandparent = 8

// parents()
// childern()



// function a(){
//     console.log(b);
// }

function somealert(){
    alert("Now just messing with this thing")
}

document.getElementById("myButton").addEventListener("click",somealert)

// var b =10;
// a();
