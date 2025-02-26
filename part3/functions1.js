function myName(){
    console.log("U");
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("A");   
}
// myName()



// function add(a, b){   // here a and b are parameters
//     console.log(a+b); 
// }

function add(a, b){   // here a and b are parameters
    // let result = a+b; 
    // return result;

    return a + b;
}
// add(4, "5")                  // here 4 and 5 are arguments
const result = add(12, 5)
// console.log(`Result: ${result}`);



function loginUserMsg(username){
    if (!username){
        console.log("please insert user name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg());
