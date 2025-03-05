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
// console.log(loginUserMsg("hello"));



function cartPrice(...num1){
    return num1
}
// console.log(cartPrice(200, 100, 899));


//passing object in function-----------------

const dress = {
    dreesType: "Shirt",
    price: 999,
    color: "olive green"
}

function handleObject(anyobject){
    console.log(`dresstype is ${anyobject.dreesType} and price of this dress is ${anyobject.price}`);
}
// handleObject(dress)
handleObject({
    dreesType: "Jeans",
    price: 1999
})



// passing arrays in function

const arr = [399, 499, 699, 599]

function newArr(getArr){
    return getArr[1]
}

console.log(newArr(arr))